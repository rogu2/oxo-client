'use strict'

// psuedo-code: make array of 9 strings (CHECK)
// assign var to position in array
//
// jquery for updating #box[i] corresponds to
// array game [i]
//
// if number of strings in array is even or 0
// player X turn, else player Y turn
//
// return x or y to gameboard in corresponding array-string location
//
//

const authEvents = require('./auth/events.js')
const gameEvents = require('./game/events.js')

$(() => {
  // authEvents.addHandlers()
  // gameEvents.addHandlers()
  // authEvents
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  $('#change-password-form').on('submit', authEvents.onChangePassword)

  // gameEvents -> probably to change
  $('#game-table').on('click', gameEvents.onBoxClick)
})
