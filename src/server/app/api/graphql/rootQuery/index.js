'use strict'
let rootQuery = (() => {
  const graphql = require('graphql')
  const { GraphQLObjectType } = graphql
  const { merge } = require('lodash')

  const usuarioRootQuery = require('./usuarioRootQuery')
  
  let config = {
    name: 'RootQueryType'
  }

  config = merge(config, usuarioRootQuery)
  
  return new GraphQLObjectType(config)
})()

module.exports = rootQuery