'use strict'
let pessoaJuridicaType = (() => {
  const graphql = require('graphql')
  const { GraphQLObjectType, GraphQLString } = graphql  

  const typeHelper = require('../../../../../helper/typeHelper')

  return new GraphQLObjectType({
    name: typeHelper.types.PESSOAJURIDICA,
    fields: () => ({
      nome: { type: GraphQLString },
      cnpj: { type: GraphQLString }
    })    
  })
})()

module.exports = pessoaJuridicaType