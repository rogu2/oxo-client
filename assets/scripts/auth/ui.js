'use strict'

// if user is logged in, hide login/signup, show signout and change password
const store = require('../store.js')

const signUpSuccess = () => {
  $('#user-feedback').text('Player successfully created, please sign in to play')
  $('form').trigger('reset')
}

const signInSuccess = (responseData) => {
  $('#user-feedback').text('Successfully signed in. Welcome back!')
  $('form').trigger('reset')
  store.user = responseData.user
  $('#change-password-form').show()
  $('#sign-out-button').show()
  $('#restart-button').show()
  $('#show-games-button').show()
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()
}

const signOutSuccess = () => {
  $('#user-feedback').text('Successfully logged out')
  $('#player-turn').text('')
  $('#show-games').text('')
  $('form').trigger('reset')
  store.user = null
  $('#game-table').hide()
  $('#change-password-form').hide()
  $('#sign-out-button').hide()
  $('#sign-in-form').show()
  $('#sign-up-form').show()
  $('#restart-button').hide()
  $('#show-games-button').hide()
}

const changePasswordSuccess = () => {
  $('#user-feedback').text('Password successfully updated')
  $('form').trigger('reset')
}

const changePasswordFailure = () => {
  $('#user-feedback').text('Password did not update, please try again')
  $('form').trigger('reset')
}

const failure = () => {
  $('#user-feedback').text('Something went wrong, please try again')
  $('form').trigger('reset')
  store.user = null
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  changePasswordFailure,
  failure
}
