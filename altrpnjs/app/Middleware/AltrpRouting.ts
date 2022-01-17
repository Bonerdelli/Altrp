import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Page from "App/Models/Page";
import Edge from "../../helpers/edge";
import Env from "@ioc:Adonis/Core/Env";
import extractElementsNames from "../../helpers/extractElementsNames";
import ssr from "../../helpers/ssr";


export default class AltrpRouting {
  public async handle({request, response, view}: HttpContextContract, next: () => Promise<void>) {
    const url = request.url();

    const page = await Page.query().where("path", url).preload("templates").first();

    if(page) {
      const pageAreas = await page.getAreas();
      const altrpElementsLists = extractElementsNames(pageAreas);
      console.log(ssr())
      const v = await view.render("front-app", Edge({
        hAltrp: Env.get("PATH_ENV") === "production" ? "/modules/front-app/h-altrp.js" : "http://localhost:3001/src/bundle.h-altrp.js",
        url: Env.get("PATH_ENV") === "production" ? "/modules/front-app/front-app.js" : "http://localhost:3001/src/bundle.front-app.js",
        page,
        ssr: ssr(),
        script: `
          <script>
            window.altrpElementsLists = ${JSON.stringify(altrpElementsLists)}
            window.__altrp_settings__ = ${JSON.stringify({
              action_components: [],
              altrpMenus: [],
              libsToLoad: [],
              page_params: [],
            })}

            window.altrpPages = [${JSON.stringify(page.getForFront())}];

            window.altrp = {
                version: "${Env.get("ALTRP_VERSION")}"
            };

            window.page_areas = ${JSON.stringify(pageAreas)};

            window.page_id = ${page.id}
          </script>
        `
      }))
      return response.send(v)
    } else {
      await next()
    }


  }
}
