'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const gameBoard = ['', '', '', '', '', '', '', '', '']

// if user is not logged in, hide #game-table
const onBoxClick = (event) => {
  event.preventDefault()
  console.log('clicked!')

  const score = event.target
  //
  $(score).html('X')
}

// const

module.exports = {
  getFormFields,
  api,
  ui,
  onBoxClick,
  gameBoard
}
