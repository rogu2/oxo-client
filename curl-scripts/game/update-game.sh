curl --include "https://tic-tac-toe-wdi.herokuapp.com/games/${ID}" \
--request PATCH \
--header "Content-type: application/json" \
--header "Authorization: Token token=${TOKEN}" \
--data '{}'

echo
