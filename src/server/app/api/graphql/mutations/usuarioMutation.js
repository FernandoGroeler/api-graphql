'use strict'
let usuarioMutation = (() => {
  const graphql = require('graphql')
  const { GraphQLString, GraphQLID, GraphQLNonNull, GraphQLBoolean } = graphql

  const usuarioType = require('../objectTypes/usuarioType')
  const pessoaFisicaInput = require('../inputObjectTypes/pessoaFisicaInput')
  const pessoaJuridicaInput = require('../inputObjectTypes/pessoaJuridicaInput')
  const usuarioControler = require('../../../controller/usuarioController')  

  return {
    fields: {
      addUsuario: {
        type: usuarioType,
        args: {
          email: { type: new GraphQLNonNull(GraphQLString) },
          senha: { type: new GraphQLNonNull(GraphQLString) },
          pessoaFisica: { type: pessoaFisicaInput },
          pessoaJuridica: { type: pessoaJuridicaInput }
        },
        async resolve(parent, args) {
          const data = await usuarioControler.add(args)
          return data
        }
      },
      updateUsuario: {
        type: usuarioType,
        args: {
          id: { type: new GraphQLNonNull(GraphQLID) },
          email: { type: new GraphQLNonNull(GraphQLString) },
          senha: { type: new GraphQLNonNull(GraphQLString) },
          pessoaFisica: { type: pessoaFisicaInput },
          pessoaJuridica: { type: pessoaJuridicaInput },          
          ativo: { type: new GraphQLNonNull(GraphQLBoolean) }          
        },
        async resolve(parent, args) {
          const data = await usuarioControler.update(args)
          return data
        }
      },
      removeUsuario: {
        type: usuarioType,
        args: {
          id: { type: new GraphQLNonNull(GraphQLID) }
        },
        async resolve(parent, args) {
          const data = await usuarioControler.remove(args)
          return data
        }
      }
    }
  }
})()

module.exports = usuarioMutation