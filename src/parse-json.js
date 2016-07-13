export default (res) => res.json();

export default function () {
  fetch ('https://card-proxy.herokuapp.com/decks/new')
  .then(parseJson).then((data) => {
  //{console.log(data)};
  }
}
