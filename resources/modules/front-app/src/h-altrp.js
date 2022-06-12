import {io} from "socket.io-client";
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
    import('./js/helpers/dataRevealElements').then(cb=>cb.default())

    window.altrpIo.disconnect()
  }
})
window.altrpIo.on("connect_error", (data) => {
  import('./_h-altrp')
  window.altrpIo.disconnect()

})
window.altrpIo.send('altrp-front-load')
