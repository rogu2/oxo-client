'use strict'

const authEvents = require('./auth/events.js')
const gameEvents = require('./game/events.js')

$(() => {
  // authEvents.addHandlers()
  // gameEvents.addHandlers()
  // authEvents
  $('#game-table').hide()
  $('#change-password-form').hide()
  $('#sign-out-button').hide()
  $('#restart-button').hide()
  $('#show-games-button').hide()

  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  $('#change-password-form').on('submit', authEvents.onChangePassword)

  // gameEvents -> probably to change
  $('.box').on('click', gameEvents.onBoxClick)
  $('#restart-button').on('click', gameEvents.onNewGame)
  $('#show-games-button').on('click', gameEvents.onShowGames)
})
