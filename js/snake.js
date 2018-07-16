class Snake {
  constructor(length, tilesArray) {
    this.tilesArray = tilesArray;
    this.length = length;
    this.direction = 'right';
    this.start = [];
    this.body = [];
    this.generateSnake();
  }
  generateSnake() {
    var startIndex = this.tilesArray.length / 2 + this.length;
    for (var i = 0; i < (this.length); i++) {
      this.tilesArray[startIndex - i].setSnake();
    }
  }
}
