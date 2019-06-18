'use strict'
const mongoose = require('mongoose')
const tableHelper = require('../../../helper/tableHelper')

const usuarioSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  senha: {
    type: String,
    min: 6,
    max: 12,
    required: true
  },
  pessoaFisica: {
    nome: {
      type: String,
      required: true
    },
    cpf: {
      type: String,
      required: true,
      unique: true
    }
  },
  pessoaJuridica: {
    nome: {
      type: String,
      required: true
    },
    cnpj: {
      type: String,
      required: true,
      unique: true
    }    
  },
  ativo: {
    type: Boolean,
    required: true,
    default: true
  }
})

mongoose.set('useCreateIndex', true)
module.exports = mongoose.model(tableHelper.tables.USUARIO, usuarioSchema)