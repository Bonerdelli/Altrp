import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import Role from "App/Models/Role";
import UserMeta from "App/Models/UserMeta";
import Permission from "App/Models/Permission";
import empty from "../../helpers/empty";
import {
  column,
  beforeSave,
  BaseModel,
  manyToMany,
  ManyToMany,
  hasOne,
  HasOne,
  computed,
  afterCreate, beforeDelete
} from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {

  @column({ isPrimary: true })
  public id: number

  @column()
  public email: string

  @column()
  public name: string

  @column()
  public last_name: string

  @column()
  public local_storage: string

  @column()
  public telegram_user_id: string

  @column({ serializeAs: null })
  public password: string

  @computed()
  public get fullName():string{
    if( !this.usermeta){
      return ''
    }
    return `${this.usermeta.first_name} ${this.usermeta.second_name}`
  }

  @column()
  public rememberMeToken: string | null

  @column.dateTime()
  public last_login_at: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword (user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }

  /**
   *
   */
  async isAdmin():Promise<boolean> {
    return await this.hasRole('admin');
  }

  @manyToMany(() => Role, {
    pivotTable: 'role_user',
    localKey: 'id',
    relatedKey: 'id',
    pivotForeignKey: 'role_id',
    pivotRelatedForeignKey: 'user_id',
  })
  public roles: ManyToMany<typeof Role>

  @manyToMany(() => Permission, {
    pivotTable: 'permission_user',
    localKey: 'id',
    relatedKey: 'id',
    pivotForeignKey: 'permission_id',
    pivotRelatedForeignKey: 'user_id',
  })
  public permissions: ManyToMany<typeof Permission>

  @hasOne(() => UserMeta, {
    foreignKey: 'user_id',
  })
  public usermeta: HasOne<typeof UserMeta>

  /**
   *
   * @param roles
   * @private
   */
  async hasRole(roles: string|number|Array<string|number>):Promise<boolean> {
    if(empty(roles)){
      return  true
    }
    if(typeof roles === 'string' || typeof roles === 'number'){
      roles = [roles]
    }
    // @ts-ignore
    await this.load('roles')

    return ! ! roles.filter((roleName)=>{
      return this.roles.map((role:Role)=>{
        if(typeof roleName === 'string'){
          return role.name
        }
        return role.id
      }).indexOf(roleName) !== -1;
    })
  }

  @afterCreate()
  public static async createUserMeta(user: User) {
    await UserMeta.create({
      user_id: user.id
    })
  }

  @beforeDelete()
  public static async deleteUserMeta(user: User) {
    const userMeta = await UserMeta.query().where("user_id", user.id).first()

    if(userMeta) {
      await userMeta.delete()
    }
  }

  public async hasPermission(value: Permission|number|string): Promise<boolean> {
    //@ts-ignore
    const relation = this.related("permissions");

    if(typeof value === "object") {
      const permission = await relation.query().where("id", value.id).first();

      return !!permission
    } else if(typeof value === "number") {
      const permission = await relation.query().where("id", value).first();

      return !!permission
    }else  {
      const permission = await relation.query().where("name", value).first();

      return !!permission
    }

  }

  public async can(value: Permission|number): Promise<boolean> {
    //@ts-ignore

    if(typeof value === "object" || typeof value === "number") {
      const userPermission = await this.hasPermission(value)

      if(!userPermission) {
        //@ts-ignore
        const roles = await this.related("roles").query()

        let out = false;

        for (let key in roles) {
          // @ts-ignore
          if(await roles[key].hasPermission(value)) {
            out = true
            break;
          }
        }
        return out
      }

      return userPermission
    }

    return false
  }

  @hasOne(() => UserMeta)
  public user_meta: HasOne<typeof UserMeta>

}
