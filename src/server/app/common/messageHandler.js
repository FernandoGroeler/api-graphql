'use strict'
class messageHandler {
  mensagem(texto) {
    const boom = require('boom')

    if (texto !== undefined && texto !== '')    
      throw boom.boomify(err)
  }
}

module.exports = messageHandler