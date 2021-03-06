class Tile {
  constructor(width) {
    this.div;
    this.width = width;
    this.type = 'empty';
    this.create();
  }
  create() {
    this.div = document.createElement('div');
    this.div.className = 'tile empty';
    this.div.style.width = `${this.width}%`;
    this.div.style.height = `${this.width}%`;
  }
  setFood() {
    this.div.classList.replace('empty', 'food');
    this.div.classList.replace('snake', 'food');
    this.type = 'food';
  }
  setSnake() {
    this.div.classList.replace('empty', 'snake');
    this.div.classList.replace('food', 'snake');
    this.type = 'snake';
  }
  setEmpty() {
    this.div.classList.replace('snake', 'empty');
    this.div.classList.replace('food', 'empty');
    this.type = 'empty';
  }
}
