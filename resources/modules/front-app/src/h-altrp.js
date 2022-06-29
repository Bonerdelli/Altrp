import {io} from "socket.io-client";
import loadPluginsHelpers from "./js/plugins/loadPluginsHelpers";
window.altrp.loadPluginsHelpers = loadPluginsHelpers
console.log('FIRST SCRIPT: ', performance.now());

window.altrpIo = io( {
  path: '/wsaltrp',
  auth: {
  },
})
window.altrpIo.on("message", (data) => {
  if(data === 'altrpe'){
    import('./_h-altrp')
    console.log('SOCKET IO CONNECTED: ', performance.now());
    window.altrpIo.disconnect()
  }
})
window.altrpIo.on("connect_error", (data) => {
  import('./_h-altrp')
  window.altrpIo.disconnect()

})
window.altrpIo.send('altrp-front-load')
document.addEventListener('DOMContentLoaded',()=>{
  import('./js/helpers/dataRevealElements').then(cb=>cb.default())
})
document.addEventListener('DOMContentLoaded',()=>{
  if(document.querySelector('[data-async-content-load]')){
    import('./js/helpers/dataAsyncContentLoad').then(cb=>cb.default())

  }
})
