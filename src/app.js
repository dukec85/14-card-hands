'use strict';
import getOptionsData from 'get-data-options';
import Hand from 'hand';

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
          const hand = new Hand(deck.deck_id);

          // Tell the hand to draw some cards
          hand.draw()
            .then(() => {
              hand.render();
            });

          this.element.appendChild(hand.element);
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
