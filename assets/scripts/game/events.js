'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')
const gameFile = require('./gameFile.js')

const addHandlers = () => {
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

const gameboard = ['', '', '', '', '', '', '', '', '']

// New game button also invokes gameboard reset
const onNewGame = () => {
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.failure)
  gameFile.clearBoard()
}

// update game with user moves,
// check turns,
// check win condition
const onUpdateGame = (event) => {
  const move = event.target.id
  const score = event.target
  if ($(event.target).text()) { return }
  if (store.gameOver) { return }
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
  onNewGame,
  onShowGames,
  gameboard,
  gameFile,
  onUpdateGame
}
