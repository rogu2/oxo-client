'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

const cells = ['', '', '', '', '', '', '', '', '']

const winCondition = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]]

const win = () => {

}

// if user is not logged in, hide #game-table
const onBoxClick = (event) => {
  event.preventDefault()
  console.log('clicked!')

  const score = event.target

  //
  $(score).html('X')
  console.log('store', store)
  if (store.player === 'X') {
    store.player = 'O'
    $(score).text('O')
  } else {
    store.player = 'X'
    $(score).text('X')
    console.log('score', score)
  }
  console.log('store', store)

  cells[0] = $('#box0').text()
  cells[1] = $('#box1').text()
  cells[2] = $('#box2').text()
  cells[3] = $('#box3').text()
  cells[4] = $('#box4').text()
  cells[5] = $('#box5').text()
  cells[6] = $('#box6').text()
  cells[7] = $('#box7').text()
  cells[8] = $('#box8').text()

  store.cells = cells
  console.log('store', store)
  console.log(cells)
}

const onNewGame = (event) => {
  event.preventDefault()
  console.log('New Game')
  store.cells = null
  $('.box').text('')
}


module.exports = {
  getFormFields,
  api,
  ui,
  onBoxClick,
  onNewGame,
  cells,
  win,
  winCondition
}
