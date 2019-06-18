'use strict'
let pessoaFisicaType = (() => {
  const graphql = require('graphql')
  const { GraphQLObjectType, GraphQLString } = graphql  

  const typeHelper = require('../../../../../helper/typeHelper')

  return new GraphQLObjectType({
    name: typeHelper.types.PESSOAFISICA,
    fields: () => ({
      nome: { type: GraphQLString },
      cpf: { type: GraphQLString }
    })    
  })
})()

module.exports = pessoaFisicaType