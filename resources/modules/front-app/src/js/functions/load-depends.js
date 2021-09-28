import WIDGETS_DEPENDS from "../constants/WIDGETS_DEPENDS";

window.libsLoaded = [];
window.LIBS = {
  'blueprint': () => {
    return import(/* webpackChunkName: 'Blueprint' */'../libs/blueprint').then(res => {
      window.libsLoaded.push('blueprint')
      console.log('LOAD Blueprint: ', performance.now());
      return Promise.resolve(res)
    });
  },
  'moment': () => {
    return import(/* webpackChunkName: 'moment' */'../libs/moment').then(res => {
      window.libsLoaded.push('moment')
      console.log('LOAD moment: ', performance.now());
      return Promise.resolve(res)
    });
  },
  'blueprint-select': () => {
    return import(/* webpackChunkName: 'blueprint-select' */'../libs/blueprint-select').then(res => {
      window.libsLoaded.push('blueprint-select')
      console.log('LOAD blueprint-select: ', performance.now());
      return Promise.resolve(res)
    });
  },
  'blueprint-datetime': () => {
    return import(/* webpackChunkName: 'blueprint-select' */'../libs/blueprint-datetime').then(res => {
      window.libsLoaded.push('blueprint-datetime')
      console.log('LOAD blueprint-datetime: ', performance.now());
      return Promise.resolve(res)
    });
  },
  'ckeditor': () => {
    return import(/* webpackChunkName: 'ckeditor' */'../libs/ckeditor').then(res => {
      window.libsLoaded.push('ckeditor')
      console.log('LOAD ckeditor: ', performance.now());
      return Promise.resolve(res)
    });
  },
  'section-element-wrapper': () => {
    return import(/* webpackChunkName: 'section-element-wrapper' */'../libs/section-element-wrapper').then(res => {
      window.libsLoaded.push('section-element-wrapper')
      console.log('LOAD "section-element-wrapper": ', performance.now());
      return Promise.resolve(res)
    });
  },
  'template-loader': () => {
    return import(/* webpackChunkName: 'template-loader' */'../libs/template-loader').then(res => {
      window.libsLoaded.push('template-loader')
      console.log('LOAD "template-loader": ', performance.now());
      return Promise.resolve(res)
    });
  },
  'devextreme': () => {
    return import(/* webpackChunkName: 'devextreme' */'../libs/devextreme').then(res => {
      window.libsLoaded.push('devextreme')
      console.log('LOAD "devextreme": ', performance.now());
      return Promise.resolve(res)
    });    
  }
};

window.libsToLoad = window.libsToLoad || [];
__altrp_settings__.libsToLoad?.forEach(lib=>{
  libsToLoad.push(LIBS[lib]())
})
export default function loadDepends(){

  if (window.altrpElementsLists) {
    window.altrpElementsLists.forEach(el => {
      if (WIDGETS_DEPENDS[el] && WIDGETS_DEPENDS[el].length && libsToLoad.indexOf(el) === -1) {
        WIDGETS_DEPENDS[el].forEach(lib => {
          if (LIBS[lib]) {
            libsToLoad.push(LIBS[lib]())
          }
        });
      }
    })
  } else {
    LIBS.forEach(lib => {
      libsToLoad.push(lib())
    })
  }
  Promise.all(window.libsToLoad).then(res => {
    import (/* webpackChunkName: 'FrontElementsManager' */'../classes/FrontElementsManager').then(module => {
      import (/* webpackChunkName: 'FrontElementsFabric' */'../classes/FrontElementsFabric').then(module => {
        console.log('LOAD FrontElementsFabric: ', performance.now());
        window.loadingCallback && window.loadingCallback();
      });
      return window.frontElementsManager.loadComponents();
    }).then(async components => {
      console.log('LOAD FrontElementsManager: ', performance.now());
      window.loadingCallback && window.loadingCallback();
    });
  });
}
