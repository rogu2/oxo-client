curl --include "https://tic-tac-toe-wdi.herokuapp.com/${ID}/watch" \
--request GET \
--header "Content-type: application/json" \
--header "Authorization: Token token=${TOKEN}" \
--data '{}'

echo
