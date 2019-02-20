curl --include "https://tic-tac-toe-wdi.herokuapp.com/games/${ID}" \
--request GET \
--header "Content-type: application/json" \
--header "Authorization: Token token=${TOKEN}" \
--data '{}'

echo
