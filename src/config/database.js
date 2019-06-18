'use strict'
let database = (() => {
  const mongoose = require('mongoose')
  const env = require('./env')

  mongoose.Error.messages.general.required = 'O atributo "{PATH}" é obrigatório.'
  mongoose.Error.messages.Number.min = 'O "{VALUE}" informado é menor que o limite mínimo de "{MIN}".'
  mongoose.Error.messages.Number.max = 'O "{VALUE}" informado é maior que o limite máximo de "{MAX}".'
  mongoose.Error.messages.String.enum = '"{VALUE}" não é válido para o atributo "{PATH}".'    

  mongoose.Promise = global.Promise

  const database = mongoose.connection
  database.on('error', error => console.log(`Conexão ao banco ${env.baseDados.nome} falhou:`, error))
  database.on('connected', () => console.log(`Conectado ao banco ${env.baseDados.nome}.`))
  database.on('disconnected', () => console.log(`Desconectado do banco ${env.baseDados.nome}.`))      

  process.on('SIGINT', () => {
    database.close(() => {
      console.log(`Banco ${env.baseDados.nome} teve a conexão fechada.`)
      process.exit(0)
    })
  })
  
  let options = { 
    useNewUrlParser: true //-> para utilizar a porta na string de conexão do banco de dados
  } 
  
  let connect = () => {
    return mongoose.connect(env.baseDados.local, options)
  }
  
  return {
    connect: () => connect()
  }  
})()

module.exports = database