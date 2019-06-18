'use strict'
let typeHelper = (() => {
  let types = Object.freeze({
    USUARIO: 'Usuario',
    PESSOAFISICA: 'PessoaFisica',
    PESSOAFISICAINPUT: 'PessoaFisicaInput',
    PESSOAJURIDICA: 'PessoaJuridica',
    PESSOAJURIDICAINPUT: 'PessoaJuridicaInput'
  })

  return {
    types: types
  }
})()

module.exports = typeHelper