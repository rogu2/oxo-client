'use strict'

//require config.js
//require store.js

const signUp = (formData) => {
  return $.ajax ({
    url: '',
    method: 'POST',
    data: formData
  })
}

const signIn = (formData) => {
  return $.ajax({
    url: '',
    method: 'POST',
    data: formData
  })
}

const signOut = (formData) => {
  return $.ajax({
    url: '',
    method: 'DELETE',
    headers: {

    }
  })
}

const changePassword = (formData) => {
  return $.ajax ({
    url: '',
    method: 'PATCH',
    headers: {

    },
    data: formData
  })
}


module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword
}
