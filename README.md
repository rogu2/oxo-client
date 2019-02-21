<!--USER README MANUAL-->
##INSTRUCTIONS
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




##As a tic-tac-to user I would like to be able to:

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
##Stretch: See animation with box selections
##https://imgur.com/gallery/05GiQrO


# Getting Started

Most importantly, remember to **go slowly and be methodical**. That means you
should be testing your changes in-browser as you write each line or so of code.
Always be commiting. Deploy early and often.

Here's a rough sketch of what you should do and in what order:

### Planning

1.  [x] Review [game-project-scope-study](https://git.generalassemb.ly/ga-wdi-boston/game-project-scope-study)
1.  [x] User Stories
1.  [x] Review [project-planning-wireframes-practice](https://git.generalassemb.ly/ga-wdi-boston/project-planning-wireframes-practice)
1.  [x] Wire Frames

### Set Up

1.  [x] [Download Browser Template](https://git.generalassemb.ly/ga-wdi-boston/browser-template)
1.  [x] Create a Github Repository
1.  [x] [Deploy to Github Pages](https://git.generalassemb.ly/ga-wdi-boston/gh-pages-deployment-guide)

### Game UI Round 1

1.  [x] Design a simple game board
1.  [x] Add a click handler for when a space on the game board is clicked
1.  [x] If the user clicks on a valid space then add their X or O
1.  [x] Do not allow users to add an X or O to an invalid space

### Game Engine

1.  [x] Create Empty Board in JS
1.  [x] Create a way to keep track of the current player
1.  [x] Add current player to your JavaScript representation of the board
    -  [x] Current player rotates between X and O
    -  [x] Can not choose already occupied spots
1.  [x] Check Board for Winner

### Game UI Round 2

1.  [x] Update the game engine when the game board is updated
1.  [x] Add messaging for the user when the turn changes
1.  [x] Add messaging for the user when the user clicks on an invalid space
1.  [x] Add messaging for the user when the game is over (win or draw)
1.  [x] Do not allow users to add an X or O to any spaces after the game is over

### Authentication

1.  [x] Review [api-token-auth](https://git.generalassemb.ly/ga-wdi-boston/jquery-ajax-token-auth)
1.  [x] Sign Up (curl then web app)
1.  [x] Sign In (curl then web app)
1.  [x] Change Password (curl then web app)
1.  [x] Sign Out (curl then web page)
1.  [x] All API calls have success or failure messages

### Game API

1.  [x] Review [jquery-ajax-crud](https://git.generalassemb.ly/ga-wdi-boston/jquery-ajax-crud)
1.  [x] Create Game, start new game (curl then web app)
1.  [x] Update Game, play the game (curl then web app)
1.  [x] Get Games (curl then web app)

### Final Touches

1.  [ ] README
1.  [ ] Troubleshoot/Debug
1.  [ ] Style
