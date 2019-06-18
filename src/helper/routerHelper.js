'use strict'
let routerHelper = (() => {
  let methods = Object.freeze({
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    PATCH: 'PATCH',
    DELETE: 'DELETE',
    HEAD: 'HEAD',
    OPTIONS: 'OPTIONS'
  })

  let defaultUrlApi = '/api'

  let urls = Object.freeze({
    USUARIO: `${defaultUrlApi}/usuario`,
    USUARIO_ID: `${defaultUrlApi}/usuario/:id`
  })

  return {
    methods: methods,
    urls: urls
  }
})()

module.exports = routerHelper