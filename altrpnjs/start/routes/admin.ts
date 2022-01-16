import Route from "@ioc:Adonis/Core/Route";


Route.group(() => {

  Route.group(() => {
    Route.get("/areas", "admin/AreasController.index")

    Route.get("/global_template_styles", "TemplatesController.globalTemplateStyles")

    Route.post("/templates", "TemplatesController.create").middleware("auth")
    Route.get("/templates", "TemplatesController.index")
    Route.get("/templates/options", "TemplatesController.options")
    Route.get("/templates/:id", "TemplatesController.get")
    Route.put("/templates/:id", "TemplatesController.update")

    Route.post("/pages", "admin/PagesController.create")
    Route.get("/pages", "admin/PagesController.index")
    Route.get("/pages/routes", "admin/PagesController.getRoutes")
    Route.get("/pages/routes/add", "admin/PagesController.addRoute")

    Route.get("/pages/:id", "admin/PagesController.show")
    Route.put("/pages/:id", "admin/PagesController.update")


    Route.get("/page_data_sources/pages/:id", () => {
      return []
    })

    Route.get("/role_options", () => {
    return []
    })

    Route.get("/pages_options", () => {
      return []
    })
    Route.get("/models_options", () => {
      return []
    })

    Route.group(() => {
      Route.get("/altrp_models_disabled", () => {
        return {
          altrp_models_disabled: ""
        }
      })
      Route.get("/pusher_app_key", () => {
        return {
          pusher_app_key: ""
        }
      })
    }).prefix("/settings")
    /**
     * Модели
     */

    Route.get("/model_options", 'admin/ModelsController.options')
    Route.get('/models', 'admin/ModelsController.index')
    Route.post('/models', 'admin/ModelsController.storeModel')
    Route.get('/models/:id', 'admin/ModelsController.getModel')
    Route.get('/models/:id/relation_name_is_free', 'admin/ModelsController.checkRelationName')
    Route.get('/model_name_is_free', 'admin/ModelsController.modelNameIsFree')
    Route.put('/models/:id', 'admin/ModelsController.updateModel')
    Route.delete('/models/:id', 'admin/ModelsController.deleteModel')
    Route.get('/models/:id/fields', 'admin/ModelsController.getModelFields')
    Route.get('/models/:id/field_options', 'admin/ModelsController.getModelFieldOptions')
    Route.post('/models/:id/fields', 'admin/ColumnsController.addColumn')
    Route.get('/models/:id/fields/:field_id', 'admin/ColumnsController.getColumn')
    Route.delete('/models/:id/fields/:field_id', 'admin/ColumnsController.deleteColumn')
    Route.put('/models/:id/fields/:field_id', 'admin/ColumnsController.updateColumn')
    Route.get('/models/:id/relations', 'admin/ModelsController.getModelRelations')
    Route.post('/models/:id/relations', 'admin/RelationshipsController.addRelationship')
    Route.get('/models/:id/relations/:relationship_id', 'admin/RelationshipsController.getRelationship')
    Route.put('/models/:id/relations/:relationship_id', 'admin/RelationshipsController.updateRelationship')
    Route.delete('/models/:id/relations/:relationship_id', 'admin/RelationshipsController.deleteRelationship')
    Route.get('/models/:id/data_source_options', 'admin/ModelsController.getDataSourcesOptionsByModel')
    Route.get('/models/:id/queries', 'admin/ModelsController.getQueries')
    Route.get('/models/:id/accessors', 'admin/ModelsController.getAccessors')

    /**
     * Категории
     */
    Route.get('/category/options', 'admin/CategoriesController.options')
    /**
     * Assets
     */
    Route.get('/media', 'admin/MediaController.index')
    /**
     * Settings
     */
    Route.get('/settings/:setting_name', 'admin/AdminController.getSettings')
    Route.put('/settings/:setting_name', 'admin/AdminController.setSettings')
    /**
     * Altrp Meta
     */
    Route.get('/altrp_meta/:meta_name', 'admin/AltrpMetaController.getMetaByName')
    Route.put('/altrp_meta/:meta_name', 'admin/AltrpMetaController.saveMeta')

  }).prefix("/ajax")

  Route.get("/editor-content", "IndicesController.editorContent")
  Route.get("/editor", "IndicesController.editor")

  Route.get('/', "IndicesController.admin")
  Route.get('*', "IndicesController.admin")
})
  .prefix("/admin")
  .middleware('admin')
  .middleware('installChecker')
