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
    this.data.cards.map((item) => {
      const container = document.createElement('div');
      container.classList.add('card-container');
      container.innerHTML = `
        <div class="card">
          <img class="img" src="" ref "">
        </div>
        <div class="value"></div>`;

      container.querySelector('.value').innerText = item.value;
      container.querySelector('.img').src = item.image;

      return container;
    }).forEach((container) => {
      this.element.appendChild(container);
    });
  }
}
