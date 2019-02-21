'use strict'
const config = require('../config.js')
const store = require('../store.js')

const newGame = () => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showGames = () => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGame = (index, value, over) => {
  return $.ajax({
<<<<<<< HEAD
    url: config.apiUrl + '/games/' + store.user.id,
=======
    url: config.apiUrl + `/games/${store.user.id}`,
>>>>>>> update-game-api
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: index,
          value: value
        },
        over: over
      }
    }
  })
}

// if user is not logged in, hide #game-table
// if user is logged in, hide login/signup, show signout and change password

module.exports = {
  newGame,
  showGames,
  updateGame
}
