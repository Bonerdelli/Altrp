import app_path from "../../helpers/app_path"
import base_path from "../../helpers/base_path"
import fs from 'fs'
import {BaseGenerator} from "App/Generators/BaseGenerator"
import Controller from "App/Models/Controller"
import Source from "App/Models/Source"
import Model from "App/Models/Model"
import ModelGenerator from "App/Generators/ModelGenerator";

export default class ControllerGenerator extends BaseGenerator {

  public static directory = app_path('/AltrpControllers/')
  private static template = base_path('/altrp-templates/AltrpController')
  private controller: Controller
  private model: Model
  private sources: Source[] = []

  public async run(controller: Controller): Promise<void> {

    await controller.load((loader) => {
      loader.load('sources', loader=>{
        loader.preload('roles')
        loader.preload('altrp_model')
        loader.preload('permissions')
      })
      loader.load('altrp_model', loader=>{
        loader.preload('table', loader=>{
          loader.preload('columns')
        })
      })
    })

    let custom = ''


    this.controller = controller
    this.model = this.controller.altrp_model
    this.sources = this.controller.sources
    let fileName =`${this.model.name}Controller.${ModelGenerator.ext}`
    if (!this.getClassnameContent()) {
      return
    }
    if (fs.existsSync(ControllerGenerator.directory + fileName)) {
      let oldContent:string = fs.readFileSync(ControllerGenerator.directory + fileName,  {encoding: 'utf8'})
      if(oldContent){
        custom = oldContent.match(/\/\/ CUSTOM_START([\s\S]+?)\/\/ CUSTOM_START/)?.pop() || ''
        custom = custom.trim()
      }

    }

    return await this.addFile(fileName)
      .destinationDir(ControllerGenerator.directory)
      .stub(ControllerGenerator.template)
      .apply({
        imports: this.getImportsContent(),
        classname: this.getClassnameContent(),
        properties: this.getPropertiesContent(),
        methods: this.getMethodsContent(this.model.name),
        custom,
      })

  }

  private getImportsContent(): string {
    return `

import ${this.model.name} from "../AltrpModels/${this.model.name}";
`
  }

  private getClassnameContent(): string {
    return ` ${this.model.name}Controller `
  }

  private getPropertiesContent(): string {
    return ''
  }

  private getMethodsContent(modelClassName: string): string {
    return `
  ${this.sources.map(source => source.renderForController(modelClassName)).join('')}
    `
  }
}
