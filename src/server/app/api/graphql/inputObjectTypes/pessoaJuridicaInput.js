'use strict'
let pessoaJuridicaInput = (() => {
  const graphql = require('graphql')
  const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString} = graphql  

  const typeHelper = require('../../../../../helper/typeHelper')

  return new GraphQLInputObjectType({
    name: typeHelper.types.PESSOAJURIDICAINPUT,
    fields: {
      nome: { type: new GraphQLNonNull(GraphQLString) },
      cnpj: { type: new GraphQLNonNull(GraphQLString) }      
    }    
  })
})()

module.exports = pessoaJuridicaInput