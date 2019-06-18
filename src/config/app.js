'use strict'
let app = (() => {
  const fastify = require('fastify')

  const router = require('../server/app/router')
  const middleware = require('./middleware')
  const env = require('./env')      

  const app = fastify({
    logger: env.modeDev ? true : false
  })

  middleware.register(app)

  router.routes.forEach((route, index) => {
    app.route(route)
  })

  let start = async () => {    
    try {
      await app.listen(env.port, env.localhost)
      app.log.info(`${env.info.nome} iniciado na porta ${env.port}.`)
    } catch (err) {
      app.log.error(err)
      process.exit(1)
    }
  }

  return {
    start: () => start()
  }  
})()

module.exports = app