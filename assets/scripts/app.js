'use strict'

const authEvents = require('./auth/events.js')
const gameEvents = require('./game/events.js')

$(() => {
  $('#game-table').hide()
  $('#change-password-form').hide()
  $('#sign-out-button').hide()
  $('#restart-button').hide()
  $('#show-games-button').hide()

  authEvents.addHandlers()
  gameEvents.addHandlers()
})
