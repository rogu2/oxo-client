'use strict'

// if user is logged in, hide login/signup, show signout and change password

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

// const addHandlers = () => {
//   $('#sign-up-form').on('submit', authEvents.onSignUp)
//   $('#sign-in-form').on('submit', authEvents.onSignIn)
//   $('#sign-out-button').on('click', authEvents.onSignOut)
//   $('#change-password-form').on('submit', authEvents.onChangePassword)
// }

const onSignUp = (event) => {
  event.preventDefault()

  const form = event.target
  console.log('form', form)

  const formData = getFormFields(form)
  console.log('formData', formData)

  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.failure)
}

const onSignIn = (event) => {
  event.preventDefault()

  const form = event.target
  console.log('form', form)

  const formData = getFormFields(form)
  console.log('formData', formData)

  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.failure)
}

const onChangePassword = (event) => {
  event.preventDefault()

  const form = event.target
  console.log('form', form)

  const formData = getFormFields(form)
  console.log('formData', formData)

  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.failure)
}

const onSignOut = (event) => {
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.failure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword
  // addHandlers
}
