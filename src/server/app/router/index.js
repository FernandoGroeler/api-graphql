'use strict'
let router = (() => {
  const usuarioRouter = require('./usuarioRouter')

  let routes = []

  //-> rotas de usuário
  routes.push(usuarioRouter.routeTodos)
  routes.push(usuarioRouter.routeUnico)  

  return {
    routes: routes
  }
})()

module.exports = router