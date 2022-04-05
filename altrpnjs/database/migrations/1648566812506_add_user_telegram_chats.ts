import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AddUserTelegramChats extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.bigInteger("telegram_chat")
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn("telegram_chat")
    })
  }
}
