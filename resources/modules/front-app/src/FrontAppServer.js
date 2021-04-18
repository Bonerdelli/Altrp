import React, { Component } from "react";
import { window } from "global";
import { hot } from "react-hot-loader";
import { getRoutes } from "./js/helpers";
import appStore from "./js/store/store";
import AppContentServer from "./js/components/AppContentServer";
import { Provider } from "react-redux";
import Resource from "../../editor/src/js/classes/Resource";
import {
  changeCurrentUser,
  setUserNotice,
  setUsersOnline
} from "./js/store/current-user/actions";
import FontsManager from "./js/components/FontsManager";
import Echo from "laravel-echo";

import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

if (typeof window === "undefined") {
  global.window = {};
  global.window.stylesModulePromise = new Promise(function(resolve) {
    global.window.stylesModuleResolve = resolve;
  });
  global._ = require("lodash");
}
class FrontApp extends Component {
  constructor(props) {
    super(props);
    if (window) {
      window.frontApp = this;
    }
  }

  /**
   * Обновляем текущего пользователя
   */
  async componentDidMount() {
    // get current user
    let currentUser = await new Resource({
      route: "/ajax/current-user"
    }).getAll();
    currentUser = currentUser.data;
    appStore.dispatch(changeCurrentUser(currentUser));

    let pusherKey = await new Resource({ route: "/admin/ajax/settings" }).get(
      "pusher_app_key"
    );
    let websocketsPort = await new Resource({
      route: "/admin/ajax/settings"
    }).get("websockets_port");
    let websocketsHost = await new Resource({
      route: "/admin/ajax/settings"
    }).get("pusher_host");

    pusherKey = pusherKey?.pusher_app_key;
    websocketsPort = websocketsPort?.websockets_port;
    websocketsHost = websocketsHost?.pusher_host;

    if (window) {
      if (pusherKey && websocketsPort) {
        try {
          window.Pusher = require("pusher-js");
          window.Echo = new Echo({
            broadcaster: "pusher",
            key: pusherKey,
            wsHost: websocketsHost,
            wsPort: websocketsPort,
            forceTLS: false,
            disableStats: true
          });
        } catch (error) {
          console.log(error);
        }

        // Подключение слушателя канала
        window.Echo.private("App.User." + currentUser.id).notification(
          notification => {
            // Запись пришедших по каналу уведомлений в appStore
            appStore.dispatch(setUserNotice(notification));
            console.log(appStore.getState().currentUser, "STORE NOTICE");
          }
        );

        // Подключение слушателя для получения users online
        let presenceChannel = window.Echo.join("online");
        let activeUsers = [];
        presenceChannel
          .here(users => {
            activeUsers = users;
            appStore.dispatch(setUsersOnline(activeUsers));
          })
          .joining(user => {
            activeUsers.push(user);
            appStore.dispatch(setUsersOnline(activeUsers));
          })
          .leaving(user => {
            activeUsers.splice(activeUsers.indexOf(user), 1);
            appStore.dispatch(setUsersOnline(activeUsers));
          });
      } else {
        console.log("Вебсокеты выключены");
      }
    }
  }

  render() {
    return (
      <Provider store={appStore}>
        <DndProvider backend={HTML5Backend}>
          <AppContentServer routes={this.props.routes} />
        </DndProvider>
        <FontsManager />
      </Provider>
    );
  }
}
let _export;
if (process.env.NODE_ENV === "production") {
  _export = FrontApp;
} else {
  _export = hot(module)(FrontApp);
}

export default _export;
