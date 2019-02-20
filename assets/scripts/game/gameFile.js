'use strict'
const store = require('../store.js')

// make gameboard
const gameboard = ['', '', '', '', '', '', '', '', '']

// create win arrays for wincheck array for win checker function
// const across1 = [0, 1, 2]
// const across2 = [3, 4, 5]
// const across3 = [6, 7, 8]
// const down1 = [0, 3, 6]
// const down2 = [1, 4, 7]
// const down3 = [2, 5, 8]
// const diag1 = [0, 4, 8]
// const diag2 = [2, 4, 6]
//
// // wincheck array
// const winCheck = [across1, across2, across3, down1, down2, down3, diag1, diag2]

// function to check if some of winCheck is true, return player wins
// const gameOver
// if (winCheck.some(true) {
//   console.log('game over', gameOver)
// } else {
//   gameOver = false
//   }
// )

// create function for taking turns
let player = 'x'
const turnCheck = (event) => {
  const turn = event.target
  $(turn).text('x')
  if (store.player === 'x') {
    // store.player = player
    // player = 'o'
    $(turn).text('o')
    $('#player-turn').text('Turn: Player O')
  } else {
    // store.player = player
    // player = 'x'
    $(turn).text('x')
    $('#player-turn').text('Turn: Player X')
  }
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
// store.gameboard = gameboard
// console.log('store', store)
// console.log(gameboard)
// winCheck()

// create function for new board
let gameOver = false
const clearBoard = (event) => {
  gameOver = false
  // gameboard.forEach('')
  for (let i = 0; i < gameboard.length; i++) {
    $(`[data-index=${i}]`).empty()
  }
  player = 'x'
  store.game = null
}

// set logic for whether game can progress
const nextTurn = () => {
  if (gameOver === true) {
    return false
  } else {
    return true
  }
}

// create function for checking game status
// if game is not over AND board has empty spaces,
// clear user-feedback and insert player value
// if game is over, check which player won or played last
const gameStatus = (turn) => {
  if (gameOver === false && gameboard[turn] === '') {
    $('#user-feedback').text('')
  } $('#player-turn').text('Turn: Player X')
  console.log('game status', gameStatus)
}

const winCheck = () => {
  // Make DRY in future version
  const gameboard = store.gameboard
  if (
    (gameboard[0] === 'x' && gameboard[1] === 'x' && gameboard[2] === 'x') ||
    (gameboard[3] === 'x' && gameboard[4] === 'x' && gameboard[5] === 'x') ||
    (gameboard[6] === 'x' && gameboard[7] === 'x' && gameboard[8] === 'x') ||
    (gameboard[0] === 'x' && gameboard[3] === 'x' && gameboard[6] === 'x') ||
    (gameboard[1] === 'x' && gameboard[4] === 'x' && gameboard[7] === 'x') ||
    (gameboard[2] === 'x' && gameboard[5] === 'x' && gameboard[8] === 'x') ||
    (gameboard[0] === 'x' && gameboard[4] === 'x' && gameboard[8] === 'x') ||
    (gameboard[2] === 'x' && gameboard[4] === 'x' && gameboard[6] === 'x')
  ) {
    $('#user-feedback').text('Player X wins!')
    gameOver = true
  } else if (
    (gameboard[0] === 'o' && gameboard[1] === 'o' && gameboard[2] === 'o') ||
    (gameboard[3] === 'o' && gameboard[4] === 'o' && gameboard[5] === 'o') ||
    (gameboard[6] === 'o' && gameboard[7] === 'o' && gameboard[8] === 'o') ||
    (gameboard[0] === 'o' && gameboard[3] === 'o' && gameboard[6] === 'o') ||
    (gameboard[1] === 'o' && gameboard[4] === 'o' && gameboard[7] === 'o') ||
    (gameboard[2] === 'o' && gameboard[5] === 'o' && gameboard[8] === 'o') ||
    (gameboard[0] === 'o' && gameboard[4] === 'o' && gameboard[8] === 'o') ||
    (gameboard[2] === 'o' && gameboard[4] === 'o' && gameboard[6] === 'o')
  ) {
    $('#user-feedback').text('Player O wins!')
    gameOver = true
    // return console.log('player wins')
  }
  $('#user-feedback').text('Player ' + store.player + ' just went')
  console.log(gameboard)
  console.log(store.gameboard)
  store.gameOver = gameOver
  return console.log(`Status of Game: ${gameOver}`)
}

module.exports = {
  store,
  gameboard,
  // across1,
  // across2,
  // across3,
  // down1,
  // down2,
  // down3,
  // diag1,
  // diag2,
  gameOver,
  player,
  turnCheck,
  clearBoard,
  gameStatus,
  winCheck,
  nextTurn
}
