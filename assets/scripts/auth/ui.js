'use strict'

// if user is logged in, hide login/signup, show signout and change password
const store = require('../store.js')

const signUpSuccess = () => {
  $('#user-feedback').text('Player successfully created')
}

const signInSuccess = (responseData) => {
  $('#user-feedback').text('Successfully signed in. Welcome back!')
  store.user = responseData.user
}

const signOutSuccess = () => {
  $('#user-feedback').text('Successfully logged out')
  $('form').trigger('reset')
  store.user = null
}

const changePasswordSuccess = () => {
  $('#user-feedback').text('Password successfully updated')
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
  failure
}
