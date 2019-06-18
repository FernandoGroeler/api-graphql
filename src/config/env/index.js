'use strict'
let env = (() => {
  const infoEnv = require('./infoEnv')
  const baseDadosEnv = require('./baseDadosEnv')
  
  const modeDev = (process.env.NODE_ENV === 'dev')
  
  return {
    modeDev: modeDev,
    localhost: 'localhost',
    authSecret: modeDev ? 'api-graphql' : process.env.AUTH_SECRET,
    port: modeDev ? 4000 : process.env.PORT,
    baseDados: baseDadosEnv,
    info: infoEnv
  }  
})()

module.exports = env