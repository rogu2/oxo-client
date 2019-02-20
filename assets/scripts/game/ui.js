'use strict'

const store = require('../store.js')

const newGameSuccess = () => {
  $('#user-feedback').text('New game!')
  // store.user = response.user
  $('.box').text('')
  $('#game-table').show()
}

const showGamesSuccess = () => {
  $('#user-feedback').text(store.player)
}

const updateGameSuccess = () => {
  console.log('update game success', updateGameSuccess)
  // $('#user-feedback').text('game successfully updated')
}

const updateGameFailure = () => {
  console.log('game failed to update')
  $('#user-feedback').text('Oops! Looks like that move failed')
}

const failure = () => {
  $('#user-feedback').text('Something went wrong, please try again')
  $('form').trigger('reset')
  store.user = null
}

const noClick = () => {
  $('#user-feedback').text('That spot has already been taken')
}

// if user is not logged in, hide #game-table
module.exports = {
  store,
  showGamesSuccess,
  newGameSuccess,
  updateGameSuccess,
  updateGameFailure,
  failure,
  noClick
}
