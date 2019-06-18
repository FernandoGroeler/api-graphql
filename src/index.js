'use strict'
let api = (() => {
  const consign = require('consign')
  const database = require('./config/database')
  const app = require('./config/app')

  consign({ cwd: 'src'})
    .into(app)

  let init = () => {
    database.connect()
    console.log(app.start())      
  }

  return {
    init: () => init()
  }
})()

api.init()