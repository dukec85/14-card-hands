import parseJson from 'parse-json';

start() {
  fetch("https://card-proxy.herokuapp.com/decks/new")
    .then(parseJson)
}
