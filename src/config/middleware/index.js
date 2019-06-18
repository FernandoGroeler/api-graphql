'use strict'
let middleware = (() => {
  const fastifyGql = require('./fastifyGql')
  const fastifySwagger = require('./fastifySwagger')
  const fatifyCors = require('./fastifyCors')
  const fastifyJwt = require('./fastifyJwt')

  let register = (app) => {
    fastifyGql.register(app)
    fastifySwagger.register(app)
    fatifyCors.register(app)
    fastifyJwt.register(app)
  }

  return {
    register: (app) => register(app)
  }
})()

module.exports = middleware