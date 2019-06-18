'use strict'
let mutation = (() => {
  const graphql = require('graphql')
  const { GraphQLObjectType } = graphql
  const { merge } = require('lodash')

  const usuarioMutation = require('./usuarioMutation')
  
  let config = {
    name: 'Mutations'
  }

  config = merge(config, usuarioMutation)

  return new GraphQLObjectType(config)
})()

module.exports = mutation