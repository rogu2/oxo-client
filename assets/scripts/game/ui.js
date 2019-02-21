'use strict'

const store = require('../store.js')
const api = require('./api.js')
// const gameFile = require('./gameFile.js')

const newGameSuccess = (response) => {
  $('#user-feedback').text('New game!')
  store.game = response.game
  $('.box').text('')
  $('#game-table').show()
  $('#player-turn').text('')
}

const showGamesSuccess = (response) => {
  store.games = response.games
  $('#show-games').text(`You've played ${response.games.length} games`)
}

const updateGameSuccess = () => {
  $('#user-feedback').text('Turn played!')
}

const updateGameFailure = () => {
  $('#user-feedback').text('Oops! Looks like that move failed')
}

const failure = () => {
  $('#user-feedback').text('Something went wrong, please try again')
  $('form').trigger('reset')
  // store.user = null
}

// const noClick = () => {
//   $('#user-feedback').text('That spot has already been taken')
// }

// if user is not logged in, hide #game-table
module.exports = {
  store,
  showGamesSuccess,
  newGameSuccess,
  updateGameSuccess,
  updateGameFailure,
  failure,
  // noClick,
  api
}
