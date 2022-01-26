/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/
import './admin'
import Route from '@ioc:Adonis/Core/Route'
import {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";
import Drive from "@ioc:Adonis/Core/Drive"
import path from "path"
// import {UserFactory} from "Database/factories";

Route.get("/altrp-login", "IndicesController.loginView")
Route.post("/login", "IndicesController.login").name = 'post.login'
Route.post("/logout", "IndicesController.logout").name = 'logout'


// Route.get("/userr", async () => {
//   const user = await User.query().where("id", 1).firstOrFail();
//   const permission = await Permission.query().where("id", 1).firstOrFail();
//   return user.can([1, 2]);
// })

Route.get("/modules/editor/:file", async ({params}) => {
  const file = await Drive.get(path.join(__dirname, `../../../public/modules/editor/${params.file}`))

  return file
})

Route.get('/data/current-user', async ({response, auth}: HttpContextContract)=>{
  response.header('Content-Type','application/javascript')
  let user = auth.user
  if( !user){
    user = {}
  }
  await user.load('roles')
  await user.load('permissions')
  return response.send(`
window.current_user = ${JSON.stringify(user.serialize())}
  `);
})

Route.group(() => {
  Route.get("/menus/:id", "admin/MenusController.show")

  Route.get("/pages/:id", "admin/PagesController.getAreas")

  Route.get("/current-user", "users/UsersController.getCurrentUser")

  Route.get("/_token", ({request}) => {
    return {
      success: true,
      _token: request.csrfToken
    }
  })

  Route.get("/models/queries/galleries/get_galley", () => {
    return {
      data: []
    }
  })
})
.prefix("/ajax")

