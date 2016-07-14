export default class Hand {
  constructor(deckId) {
    this.deckId = deckId;
    this.element = document.createElement('div');
    this.element.classList.add('hand');
  }

  draw() {
    return fetch(`https://card-proxy.herokuapp.com/decks/${this.deckId}/draw?count=5`)
      .then((res) => res.json())
      .then((data) => {
        this.data = data;
      });
  }

  render() {

  }
}
