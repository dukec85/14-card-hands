const template = `
<div class="card-container">
  <div class="card"><img class="img" src="http://placekitten.com/200/300" ref""></div>
  <div class="value">8</div>
</div>`;

export default class getHand {
  constructor(data) {
    this.data = data;

    this.element = document.createElement('hand');
    this.element.innerHTML = template;

    this.selectors = {
      card: this.element.querySelector('.img'),
      value: this.element.querySelector('.value'),
    };
  }
  render() {
    this.selectors.img.innerText = this.data.img;
    this.selectors.value.innerText = this.data.value;
}
}
