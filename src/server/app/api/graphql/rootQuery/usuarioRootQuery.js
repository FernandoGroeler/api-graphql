'use restrict'
let usuarioRootQuery = (() => {
  const graphql = require('graphql')
  const { GraphQLID, GraphQLList } = graphql

  const usuarioType = require('../objectTypes/usuarioType')
  const usuarioController = require('../../../controller/usuarioController')  

  return {
    fields: {
      usuario: {
        type: usuarioType,
        args: { id: { type: GraphQLID } },
        async resolve(parent, args) {
          return await usuarioController.getUnico(args)
        }
      },
      usuarios: {
        type: new GraphQLList(usuarioType),
        async resolve(parent, args) {
          return await usuarioController.getTodos()
        }
      }
    }    
  }
})()

module.exports = usuarioRootQuery