import parseJson from 'parse-json';

export default function() {
  return fetch('https://card-proxy.herokuapp.com/decks/new')
    .then(parseJson);
}
