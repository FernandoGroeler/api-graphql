'use strict'
let pessoaFisicaInput = (() => {
  const graphql = require('graphql')
  const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString} = graphql  

  const typeHelper = require('../../../../../helper/typeHelper')

  return new GraphQLInputObjectType({
    name: typeHelper.types.PESSOAFISICAINPUT,
    fields: {
      nome: { type: new GraphQLNonNull(GraphQLString) },
      cpf: { type: new GraphQLNonNull(GraphQLString) }      
    }    
  })
})()

module.exports = pessoaFisicaInput