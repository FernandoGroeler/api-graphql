'use strict'
let usuarioType = (() => {
  const graphql = require('graphql')
  const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLBoolean } = graphql

  const typeHelper = require('../../../../../helper/typeHelper')
  const pessoaFisicaType = require('./pessoaFisicaType')
  const pessoaJuridicaType = require('./pessoaJuridicaType')

  return new GraphQLObjectType({
    name: typeHelper.types.USUARIO,
    fields: () => ({
      _id: { type: GraphQLID },
      email: { type: GraphQLString },
      senha: { type: GraphQLString },
      pessoaFisica: { type: pessoaFisicaType },
      pessoaJuridica: { type: pessoaJuridicaType },
      ativo: { type: GraphQLBoolean }
    })    
  })
})()

module.exports = usuarioType