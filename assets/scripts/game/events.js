'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

const cells = ['', '', '', '', '', '', '', '', '']

const winCheck = () => {
  // Need to make this DRY - use getElementByID.target commands to shrink...
  if (
    (cells[0] === 'X' && cells[1] === 'X' && cells[2] === 'X') ||
  (cells[0] === 'O' && cells[1] === 'O' && cells[2] === 'O')
  ) {
    return console.log('Player ' + store.player + ' wins!')
  } else if (
    (cells[3] === 'X' && cells[4] === 'X' && cells[5] === 'X') ||
  (cells[3] === 'O' && cells[4] === 'O' && cells[5] === 'O')
  ) {
    return console.log('Player ' + store.player + ' wins!')
  } else if (
    (cells[6] === 'X' && cells[7] === 'X' && cells[8] === 'X') ||
  (cells[6] === 'O' && cells[7] === 'O' && cells[8] === 'O')
  ) {
    return console.log('Player ' + store.player + ' wins!')
  } else if (
    (cells[0] === 'X' && cells[3] === 'X' && cells[6] === 'X') ||
  (cells[0] === 'O' && cells[3] === 'O' && cells[6] === 'O')
  ) {
    return console.log('Player ' + store.player + ' wins!')
  } else if (
    (cells[1] === 'X' && cells[4] === 'X' && cells[7] === 'X') ||
  (cells[1] === 'O' && cells[4] === 'O' && cells[7] === 'O')
  ) {
    return console.log('Player ' + store.player + ' wins!')
  } else if (
    (cells[2] === 'X' && cells[5] === 'X' && cells[8] === 'X') ||
  (cells[2] === 'O' && cells[5] === 'O' && cells[8] === 'O')
  ) {
    return console.log('Player ' + store.player + ' wins!')
  } else if (
    (cells[0] === 'X' && cells[4] === 'X' && cells[8] === 'X') ||
  (cells[0] === 'O' && cells[4] === 'O' && cells[8] === 'O')
  ) {
    return console.log('Player ' + store.player + ' wins!')
  } else if (
    (cells[2] === 'X' && cells[4] === 'X' && cells[6] === 'X') ||
  (cells[2] === 'O' && cells[4] === 'O' && cells[6] === 'O')
  ) {
    return console.log('Player ' + store.player + ' wins!')
  } else {
    return console.log('Make move')
  }
}

// alternative win winCheck
// const rowT = [0, 1, 2]
// const rowM = [3, 4, 5]
// const rowB = [6, 7, 8]
// const colL = [0, 3, 6]
// const colM = [1, 4, 7]
// const colR = [2, 5, 8]
// const diag1 = [0, 4, 8]
// const diag2 = [2, 4, 6]
//
// const winChecker = [rowT, rowM, rowB, colL, colM, colR, diag1, diag2]
// const winCondition = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8],
//   [0, 4, 8], [2, 4, 6]]
//
// function winner (player) {
//   for (let i = 0; i < winCondition.length; i++) {
//     if (winCondition[i][0] === player && winCondition[i][1] === player && winCondition[i][2] === player) {
//       return console.log(x + 'wins!')
//     }
//   }
// }

// if user is not logged in, hide #game-table
const takeTurns = () => {
  if (store.player === 'X') {
    store.player = 'O'
  } else {
    store.player = 'X'
  }
}

const onBoxClick = (event) => {
  event.preventDefault()

  const score = event.target
  $(score).text('X')
  if (store.player === 'X') {
    // $('#user-feedback').text('Turn: Player ' + store.player)
    store.player = 'O'
    $(score).text('O')
    // $(event.target).on('click', function () {
    //
    // })
  } else {
    store.player = 'X'
    $(score).text('X')
  }
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
  winCheck()
}

// GAME API //
const onShowGames = (event) => {
  event.preventDefault()

  const game = event.target
  const gameData = getFormFields(game)

  api.showGames(gameData)
    .then(ui.showGamesSuccess)
    .catch(ui.failure)
}

const onNewGame = () => {
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.failure)
}

module.exports = {
  getFormFields,
  api,
  ui,
  onBoxClick,
  onNewGame,
  cells,
  winCheck,
  onShowGames
  // rowT,
  // rowM,
  // rowB,
  // colL,
  // colM,
  // colR,
  // diag1,
  // diag2,
  // winChecker
  // winner,
  // win,
  // gameOver
}
