'use strict'
let fastifyGql = (() => {
  const gql = require('fastify-gql') 
  const schema = require('../../server/app/api/graphql/schema') 

  let register = (app) => {
    app.register(gql, {
      schema,
      graphiql: true
    })
  }

  return {
    register: (app) => register(app)
  }
})()

module.exports = fastifyGql