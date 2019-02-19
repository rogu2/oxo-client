'use strict'

const store = require('../store.js')

const showGamesSuccess = () => {
  $('#user-feedback').text(store.player)
}

const newGameSuccess = () => {
  $('#user-feedback').text('New game!')
  store.cells = null
  $('.box').empty()
}

const failure = () => {
  $('#user-feedback').text('Something went wrong, please try again')
  $('form').trigger('reset')
  store.user = null
}

// if user is not logged in, hide #game-table
module.exports = {
  store,
  showGamesSuccess,
  newGameSuccess,
  failure
}
