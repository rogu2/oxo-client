'use strict'
//require get form fields
//require api.js
//require ui.js

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
}
