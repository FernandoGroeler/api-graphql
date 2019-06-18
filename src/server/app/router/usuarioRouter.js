'use strict'
let usuarioRouter = (() => {
  const usuarioController = require('../controller/usuarioController')
  const routerHelper = require('../../../helper/routerHelper')

  let getRouteTodos = {
    method: routerHelper.methods.GET,
    url: routerHelper.urls.USUARIO,
    handler: usuarioController.getTodos
  }

  let getRouteUnico = {
    method: routerHelper.methods.GET,
    url: routerHelper.urls.USUARIO_ID,
    handler: usuarioController.getUnico
  }

  return {
    routeTodos: getRouteTodos,
    routeUnico: getRouteUnico
  }
})()

module.exports = usuarioRouter