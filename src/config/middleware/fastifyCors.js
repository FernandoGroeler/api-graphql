'use strict'
let fastifyCors = (() => {
  let options = {}

  let register = (app) => {
    app.register(require('fastify-cors'), options)
  }

  return {
    register: (app) => register(app)
  }
})()

module.exports = fastifyCors