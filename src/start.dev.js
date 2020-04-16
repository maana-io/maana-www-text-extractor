import initServer from './server.js'

console.log('Initializing server.')

initServer({
  httpAuthMiddleware: false,
  socketAuthMiddleware: false,
})
