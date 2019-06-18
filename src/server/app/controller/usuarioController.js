'use strict'
let usuarioController = (() => {
  const usuarioSchema = require('../model/usuarioSchema')  
  const baseRepository = require('../repository/baseRepository')

  let service = new baseRepository(usuarioSchema)

  return {
    getTodos: () => service.get(),
    getUnico: (req) => service.get(req),
    add: (req) => service.add(req),
    update: (req) => service.update(req)
  }
})()

module.exports = usuarioController