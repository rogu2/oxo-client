'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')
const gameFile = require('./gameFile.js')

const addHandlers = () => {
  // // $('.box').on('click', onBoxClick)
  // $('#box0').on('click', onBoxClick)
  // $('#box1').on('click', onBoxClick)
  // $('#box2').on('click', onBoxClick)
  // $('#box3').on('click', onBoxClick)
  // $('#box4').on('click', onBoxClick)
  // $('#box5').on('click', onBoxClick)
  // $('#box6').on('click', onBoxClick)
  // $('#box7').on('click', onBoxClick)
  // $('#box8').on('click', onBoxClick)

  $(`[data-index=0]`).on('click', onUpdateGame)
  $(`[data-index=1]`).on('click', onUpdateGame)
  $(`[data-index=2]`).on('click', onUpdateGame)
  $(`[data-index=3]`).on('click', onUpdateGame)
  $(`[data-index=4]`).on('click', onUpdateGame)
  $(`[data-index=5]`).on('click', onUpdateGame)
  $(`[data-index=6]`).on('click', onUpdateGame)
  $(`[data-index=7]`).on('click', onUpdateGame)
  $(`[data-index=8]`).on('click', onUpdateGame)
  $('#restart-button').on('click', onNewGame)
  $('#show-games-button').on('click', onShowGames)
}

// const cells = ['', '', '', '', '', '', '', '', '']

// const winCheck = () => {
//   // Need to make this DRY - use getElementByID.target commands to shrink...
//   if (
//     (cells[0] === 'x' && cells[1] === 'x' && cells[2] === 'x') ||
//   (cells[0] === 'o' && cells[1] === 'o' && cells[2] === 'o')
//   ) {
//     $('#user-feedback').text('Player ' + store.player + ' wins!')
//   } else if (
//     (cells[3] === 'x' && cells[4] === 'x' && cells[5] === 'x') ||
//   (cells[3] === 'o' && cells[4] === 'o' && cells[5] === 'o')
//   ) {
//     $('#user-feedback').text('Player ' + store.player + ' wins!')
//   } else if (
//     (cells[6] === 'x' && cells[7] === 'x' && cells[8] === 'x') ||
//   (cells[6] === 'o' && cells[7] === 'o' && cells[8] === 'o')
//   ) {
//     $('#user-feedback').text('Player ' + store.player + ' wins!')
//   } else if (
//     (cells[0] === 'x' && cells[3] === 'x' && cells[6] === 'x') ||
//   (cells[0] === 'o' && cells[3] === 'o' && cells[6] === 'o')
//   ) {
//     $('#user-feedback').text('Player ' + store.player + ' wins!')
//   } else if (
//     (cells[1] === 'x' && cells[4] === 'x' && cells[7] === 'x') ||
//   (cells[1] === 'o' && cells[4] === 'o' && cells[7] === 'o')
//   ) {
//     $('#user-feedback').text('Player ' + store.player + ' wins!')
//   } else if (
//     (cells[2] === 'x' && cells[5] === 'x' && cells[8] === 'x') ||
//   (cells[2] === 'o' && cells[5] === 'o' && cells[8] === 'o')
//   ) {
//     $('#user-feedback').text('Player ' + store.player + ' wins!')
//   } else if (
//     (cells[0] === 'x' && cells[4] === 'x' && cells[8] === 'x') ||
//   (cells[0] === 'o' && cells[4] === 'o' && cells[8] === 'o')
//   ) {
//     $('#user-feedback').text('Player ' + store.player + ' wins!')
//   } else if (
//     (cells[2] === 'x' && cells[4] === 'x' && cells[6] === 'x') ||
//   (cells[2] === 'o' && cells[4] === 'o' && cells[6] === 'o')
//   ) {
//     $('#user-feedback').text('Player ' + store.player + ' wins!')
//   } else {
//     $('#user-feedback').text('Player ' + store.player + ' just went')
//     return console.log('game is tied')
//   }
// }

// alternative win winCheck
// const rowT = [0, 1, 2]
// const rowM = [3, 4, 5]
// const rowB = [6, 7, 8]
// const colL = [0, 3, 6]
// const colM = [1, 4, 7]
// const colR = [2, 5, 8]
// const diag1 = [0, 4, 8]
// const diag2 = [2, 4, 6]
// //
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

// const takeTurns = () => {
//   if (store.player === 'x') {
//     store.player = 'o'
//   } else {
//     store.player = 'x'
//   }
// }

const gameboard = ['', '', '', '', '', '', '', '', '']

// POSSIBLY TO BE DELETED
const onBoxClick = (event) => {
  event.preventDefault()
  // gameFile.turnCheck()
  gameFile.gameStatus()
  const score = event.target

  $(score).text('x')
  if (store.player === 'x') {
    store.player = 'o'
    $(score).text('o')
  } else {
    store.player = 'x'
    $(score).text('x')
  }
  // gameboard[0] = $('#box0').text()
  // gameboard[1] = $('#box1').text()
  // gameboard[2] = $('#box2').text()
  // gameboard[3] = $('#box3').text()
  // gameboard[4] = $('#box4').text()
  // gameboard[5] = $('#box5').text()
  // gameboard[6] = $('#box6').text()
  // gameboard[7] = $('#box7').text()
  // gameboard[8] = $('#box8').text()

  gameboard[0] = $(`[data-index=0]`).text()
  gameboard[1] = $(`[data-index=1]`).text()
  gameboard[2] = $(`[data-index=2]`).text()
  gameboard[3] = $(`[data-index=3]`).text()
  gameboard[4] = $(`[data-index=4]`).text()
  gameboard[5] = $(`[data-index=5]`).text()
  gameboard[6] = $(`[data-index=6]`).text()
  gameboard[7] = $(`[data-index=7]`).text()
  gameboard[8] = $(`[data-index=8]`).text()
  store.gameboard = gameboard
  console.log('store', store)
  console.log(gameboard)
  gameFile.winCheck()
}

// const stopGame = () => {
//   if (cells.every(val => val !== '') ||
//   winCheck() === true) {
//     console.log('game over', stopGame)
//   }
// }

// GAME API //

const onNewGame = () => {
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.failure)
  gameFile.clearBoard()
}

const onUpdateGame = (event) => {
  const move = event.target.id
  const score = event.target
  if ($(event.target).text()) { return }
  if (store.gameOver) {
    $('#user-feedback').html('<h1> SOMEONE WON </h1>')
    return
  }
  api.updateGame(move)
    .then(gameFile.turnCheck)
    .then(gameFile.winCheck)
    .catch(ui.updateGameFailure)
  $(score).text('x')
  if (store.player === 'x') {
    store.player = 'o'
    $(score).text('o')
  } else {
    store.player = 'x'
    $(score).text('x')
  }
  gameboard[0] = $(`[data-index=0]`).text()
  gameboard[1] = $(`[data-index=1]`).text()
  gameboard[2] = $(`[data-index=2]`).text()
  gameboard[3] = $(`[data-index=3]`).text()
  gameboard[4] = $(`[data-index=4]`).text()
  gameboard[5] = $(`[data-index=5]`).text()
  gameboard[6] = $(`[data-index=6]`).text()
  gameboard[7] = $(`[data-index=7]`).text()
  gameboard[8] = $(`[data-index=8]`).text()
  store.gameboard = gameboard
  console.log('store', store)
  console.log(gameboard)
  // gameFile.winCheck()
}

const onShowGames = () => {
  api.showGames()
    .then(ui.showGamesSuccess)
    .catch(ui.failure)
}

module.exports = {
  addHandlers,
  getFormFields,
  api,
  ui,
  onBoxClick,
  onNewGame,
  // cells,
  // winCheck,
  onShowGames,
  // stopGame,
  gameboard,
  gameFile,
  onUpdateGame
  // winChecker
  // winner,
  // win,
  // gameOver
}
