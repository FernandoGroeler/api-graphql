'use strict'
let baseDadosEnv = (() => {  
  let porta = '27017'
  let nome = 'api-graphql'
  let local = process.env.MONGOLAB_URI ? process.env.MONGOLAB_URI : `mongodb://localhost:${porta}/${nome}`

  return {
    porta: porta,
    nome: nome,
    local: local
  }
})()

module.exports = baseDadosEnv