<!--USER README MANUAL-->
INSTRUCTIONS
1. To get started, users must create an account using a unique email address a
password which they enter twice for confirmation.
2. Users then can log in and bring a friend/enemy to play as a challenger.
3. On login click 'New Game' to render the game board.
4. The user is Player X and the challenger is Player O.
5. Players take turns selecting boxes on the game board, marking with their
respective symbols 'X' and 'O'.
6. User feedback will appear above the gameboard to display the next turn.
7. The game is over when the following conditions occur:
  a. Player X or Player O have 3 of their symbols in a line either horizontally,
  vertically, or diagonally.
  b. If the game board fills up with no winner, the game is a draw.
  c. If a player selects 'New Game', the gameboard will be cleared.
8. Players may reset the game at any time or after a player has wone or if the
game is a draw.
9. The User can display the total number of games that have been played by clicking
the Show Games button.
10. Users may change their password after being logged in by entering the old
and new passwords as denoted change password input fields.
11. The User will be signed out after selecting the Sign Out button or if the page
is refreshed.

TECHNOLOGIES USED
HTML, CSS, SASS, Bootstrap, JavaScript, jQuery, AJAX, API

PLANNING AND PROCESS
1. Create wireframes and user stories
2. Create a basic gameboard using HTML and CSS
3. Review API documentation for authentication and game play.
4. Write authentication html
5. Write authentication curl scripts
6. Write authentication event & UI JavaScript
7. Write authentication api javascript
8. Create click logic and manipulate DOM with click events
9. Create game logic including game board, if/else win conditions.
10. Create hide/show conditions when user is logged in/logged out.
11. Disable player turns on win, loss, draw, and double click.
12. Return feedback to user for game events
13. Set up game curl and api JavaScript

My biggest stumbling block in this project was the game logic, which I rewrote
multiple times.

Remaining goals:
-Add styling polish to the project including images, board animations, etc
-Add nav dropdown for user authentication and game history.
-Add features such as full game history, undo last move, ai challenger, multiplayer
-Make code DRY, javascript is currently inefficient and repetitive.

USER STORIES
As a tic-tac-to user I would like to be able to:

Sign Up using email, password, and password confirmation.
Log In using email and password.
Log Out on a button click.
Change Password by already being logged in, and requesting old password and new password.
Store Password.
Select a tic tac toe X or O symbol.
Know if I have won, lost, tied
Select a box and have it correspond to my designated symbol
Trade turns with my opponent.
Know who's turn it is.
Receive feedback when clicking at start/end of each turn.
EDIT: X or O in box is sufficient, more than this is probably stretch
Hide board when not signed in
Be presented with a fresh board following game completion
At minimum review total number of games played.
Stretch: display total wins, losses and ties and streaks.
Stretch: Load a game background photo that appears as the game is played.
Stretch: Select theme within UI
Stretch: See animation with box selections

WIREFRAME IMAGE LOCATION: https://imgur.com/gallery/05GiQrO
