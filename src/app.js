'use strict';
import getOptionsData from 'get-data-options';

export default class App {
  constructor(element) {
    this.element = element;
  }

  start() {
    this.getNewDeck()
      // Update what the user sees after getting the new deck
      .then(() => {
        const deck = this.data;
        // Lets do something three times
        for (let i = 0; i < 3; i++) {
          // Looking for a few hands of cards
          const hand = new Hand();

          this.element.appendChild(li)
        }
      });
  }

  getNewDeck() {
    return getOptionsData()
      .then((data) => {
        this.data = data;
      });
  }

}
