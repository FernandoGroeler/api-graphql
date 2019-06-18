'use strict'
let fatifyJwt = (() => {
  const env = require('../env')

  let options = {
    secret: env.authSecret
  }

  let register = (app) => {
    app.register(require('fastify-jwt'), options)
  }

  return {
    register: (app) => register(app)
  }
})()

module.exports = fatifyJwt