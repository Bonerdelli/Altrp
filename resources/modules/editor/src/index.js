import '../../front-app/src/js/libs/blueprint'
import '../../front-app/src/js/libs/blueprint-select'
import '../../front-app/src/js/libs/blueprint-datetime'
import '../../front-app/src/js/libs/react-lodash'
import '../../front-app/src/js/libs/ckeditor'
import '../../front-app/src/js/libs/altrp'
import '../../front-app/src/js/libs/moment'
import { Provider } from "react-redux";
import "./installing";
import ElementsManager from "./js/classes/modules/ElementsManager";
import ControllersManager from "./js/classes/modules/ControllersManager";
import store from "../src/js/store/store";
import IconsManager from "./js/classes/modules/IconsManager";
import "./sass/editor-style.scss";
import controllerHistory from "./js/classes/ControllerHistory";


window.iconsManager = new IconsManager();

window.stylesModulePromise = new Promise(function(resolve) {
  window.stylesModuleResolve = resolve;
});

window.elementsManager = new ElementsManager();
window.controllersManager = new ControllersManager();
window.controllersManager.init();
window.editorStore = store;

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
} else {
  console.log(
    "%cWelcome to Altrp Editor",
    "color: red; font-size: 24px; font-weight: 900;"
  );
}

// window.ReactDOM.render(<Editor/>, editorTarget);
/**
 * Импортируем компонент редактора Editor
 */
import("./Editor.js")
  .then(Editor => {
    Editor = Editor.default;

    let editorTarget = document.getElementById("editor");
    if (editorTarget) {
      window.ReactDOM.render(
        <Provider store={store}>
          <Editor />
        </Provider>,
        editorTarget
      );
    }

    return import("./EditorContent");
  })
  .then(EditorContent => {
    EditorContent = EditorContent.default;

    window.onload = () => {
      let iframe = document.getElementsByTagName("iframe")[0];
      window.EditorFrame = iframe;
      if (!iframe) {
        return;
      }
      let editorContentTarget = iframe.contentWindow.document.getElementById(
        "editor-content"
      );

      if (editorContentTarget) {
        ReactDOM.render(<EditorContent />, editorContentTarget);
      }
      if (process.env.NODE_ENV === "production") {
        let head = iframe.contentWindow.document.getElementsByTagName(
          "head"
        )[0];
        let styleLink = iframe.contentWindow.document.createElement("link");
        styleLink.rel = "stylesheet";
        styleLink.href = `/modules/editor/editor.css?${_altrpVersion}`;
        head.appendChild(styleLink);
        head.appendChild(document.querySelector('[data-cke]').cloneNode(true));
      } else {
        let head = iframe.contentWindow.document.getElementsByTagName(
          "head"
        )[0];
        let script = iframe.contentWindow.document.createElement("script");
        script.src = "http://localhost:3000/src/bundle.js";
        script.defer = "http://localhost:3000/src/bundle.js";
        head.appendChild(script);
      }

      function listenerHistory(event) {
        if (window.parent.appStore.getState().historyStore.active) {
          if (event.ctrlKey && event.code === "KeyZ" && event.shiftKey) {
            controllerHistory.redo();
          } else if (event.ctrlKey && event.code === "KeyZ") {
            controllerHistory.undo();
          }
        }
      }
      window.addEventListener("keydown", listenerHistory, false);
      window.EditorFrame.contentWindow.addEventListener(
        "keydown",
        listenerHistory,
        false
      );
    };
  });
