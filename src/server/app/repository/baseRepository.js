'use strict'
class baseRepository {
  constructor(schema) {
    this.schema = schema
  }

  mensagem(texto) {
    const messageHandler = require('../common/messageHandler')
    return messageHandler.prototype.mensagem(texto)
  }

  async remove(req){
    try {
      const id = req.params === undefined ? req.id : req.params.id      
      const obj = await this.schema.findByIdAndRemove(id)
      return obj      
    } catch (err) {
      this.mensagem(err)
    }
  }

  async get(req) {
    try {
      const id = req.params === undefined ? req.id : req.params.id
      const obj = await this.schema.findById(id)
      return obj
    } catch (err) {
      this.mensagem(err)
    }    
  }

  async get() {
    try {
      const obj = this.schema.find()
      return obj
    } catch (err) {
      this.mensagem(err)
    }    
  }

  async add(req) {
    try {
      const obj = new this.schema(req)
      const novoObj = await obj.save()
      return novoObj
    } catch (err) {
      this.mensagem(err)
    }    
  }

  async update(req) {
    try {
      const id = req.params === undefined ? req.id : req.params.id
      const updateData = req.params === undefined ? req : req.params
      const update = await this.schema.findByIdAndUpdate(id, updateData, { new: true })
      return update
    } catch (err) {
      this.mensagem(err)
    }    
  }
}

module.exports = baseRepository