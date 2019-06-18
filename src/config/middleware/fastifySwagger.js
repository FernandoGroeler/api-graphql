'use strict'
let fastifySwagger = (() => {
  let env = require('../env')
  let routerHelper = require('../../helper/routerHelper')

  let options = {
    routePrefix: routerHelper.urls.DOCUMENTACAO,
    exposeRoute: true,
    swagger: {
      info: {
        title: env.info.nome,
        description: env.info.descricao,
        version: env.info.versao
      },
      externalDocs: {
        url: 'https://swagger.io',
        description: 'Encontre mais informações aqui'
      },
      host: env.localhost,
      schemes: ['http', 'https'],
      consumes: ['application/json'],
      produces: ['application/json']
    }    
  }

  let register = (app) => {
    app.register(require('fastify-swagger'), options)    
  }

  return {
    register: (app) => register(app)
  }
})()

module.exports = fastifySwagger