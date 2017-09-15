// this 16777215 == ffffff in decimal
const FFFFF = 16777215;
// addapted from https://www.paulirish.com/2009/random-hex-color-code-snippets/
const _getRandomColor = () => `#${Math.floor(Math.random() * FFFFF).toString(16)}`;

export default class RandomColor {
  constructor() {
    this.usedColors = new Set();
  }
  contains(color) {
    return this.usedColors.has(color);
  }
  addColor(color) {
    this.usedColors.add(color);
  }
  getColor() {
    let color = _getRandomColor();

    if (this.contains(color)) {
      return this.getColor();
    }

    this.addColor(color);
    return color;
  }
}
