'use strict'
const store = require('../store.js')

// make gameboard
const gameboard = ['', '', '', '', '', '', '', '', '']

// create function for taking turns
let player = 'x'
const turnCheck = (event) => {
  const turn = event.target
  $(turn).text('x')
  if (store.player === 'x') {
    $(turn).text('o')
    $('#player-turn').text('Turn: Player O')
  } else {
    $(turn).text('x')
    $('#player-turn').text('Turn: Player X')
  }
}

// create function for new board
let gameOver = false
const clearBoard = (event) => {
  gameOver = false
  for (let i = 0; i < gameboard.length; i++) {
    $(`[data-index=${i}]`).empty()
  }
  player = 'x'
  store.game = null
}

// create function for checking game status
// if game is not over AND board has empty spaces,
// clear user-feedback and insert player value
// if game is over, check which player won or played last
// const gameStatus = (turn) => {
//   if (gameOver === false && gameboard[turn] === '') {
//     $('#user-feedback').text('')
//   } $('#player-turn').text('Turn: Player X')
//   console.log('game status', gameStatus)
// }

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
    $('#player-turn').html('<h2>Game over!</h2>')
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
    $('#player-turn').html('<h2>Game over!</h2>')
    gameOver = true
  } else if (
    gameboard[0] !== '' && gameboard[1] !== '' && gameboard[2] !== '' &&
    gameboard[3] !== '' && gameboard[4] !== '' && gameboard[5] !== '' &&
    gameboard[6] !== '' && gameboard[7] !== '' && gameboard[8] !== ''
  ) {
    $('#user-feedback').text('The game is a tie!')
    $('#player-turn').html('<h2>Game over!</h2>')
    gameOver = true
  }
  // $('#user-feedback').text('Player ' + store.player + ' just went')
  console.log(gameboard)
  console.log(store.gameboard)
  store.gameOver = gameOver
  return console.log(`Status of Game: ${gameOver}`)
}

// FUTURE VERSION //
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

module.exports = {
  store,
  gameboard,
  gameOver,
  player,
  turnCheck,
  clearBoard,
  // gameStatus,
  winCheck
}
