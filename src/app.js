'use strict';
import parseJson from 'parse-json';
import getOptionsData from 'get-data-options';
import getHand from 'get-hand';



export default class App {
  constructor(element) {
    this.element = element;
  }
    getOptions () {
      return getOptionsData ()
        .then((data) => {
          this.data = data;
      });
    }

  }
