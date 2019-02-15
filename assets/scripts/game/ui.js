'use strict'

const store = require('../store.js')

const onBoxClick = (event) => {
  event.preventDefault()

  const box = event.target

  $('.box').on('click', function () {
    console.log('box clicked!')
  })
}
// if user is not logged in, hide #game-table
module.exports = {
  store,
  onBoxClick
}
