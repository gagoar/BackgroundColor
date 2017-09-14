'use strict';
/*global window :true*/

// this 16777215 == ffffff in decimal
const FFFFF = 16777215;
// addapted from https://www.paulirish.com/2009/random-hex-color-code-snippets/
const _getRandomColor = () => `#${Math.floor(Math.random() * FFFFF).toString(16)}`;

const _isDomElement = (node = {}) => node.tagName;

export class RandomColor {
  constructor(repeate = false) {
    this.state = {
      repeate,
      usedColors: [],
    };
  }

  canRepeat() {
    return this.state.repeate;
  }

  contains(color) {
    return this.state.usedColors.indexOf(color) !== -1;
  }
  addColor(color) {
    this.state.usedColors.push(color);
  }
  getColor() {
    let color = _getRandomColor();

    if (this.canRepeat()) {
      return color;
    }

    if (this.contains(color)) {
      return this.getColor();
    }

    this.addColor(color);
    return color;
  }
}

export default class BackgrounColor {
  constructor(node) {
    if (!_isDomElement(node)) {
      throw new Error ('Please provide a HTMLElement');
    }
    this.state = {
      node,
      intervalID: null,
      colorGenerator: new RandomColor(),
    };
  }

  start({every = 1 * 1000, till = 10 * 1000}, callback) {
    this.stop();
    this.changeNodeColor(callback);
    let intervalID = window.setInterval(this.changeNodeColor.bind(this, callback), every);
    let timeoutID = window.setTimeout(this.stop.bind(this), till);

    this.setIntervalID(intervalID);
    this.setTimeoutID(timeoutID);
  }
  changeNodeColor(callback) {
    let {colorGenerator, node} = this.state;
    let color = colorGenerator.getColor();

    node.style.backgroundColor = color;

    if (callback) {
      callback(color, node);
    }
  }

  getIntervalID() {
    return this.state.intervalID;
  }

  getTimeoutID() {
    return this.state.timeoutID;
  }

  setTimeoutID(timeoutID) {
    this.state.timeoutID = timeoutID;
  }

  setIntervalID(intervalID) {
    this.state.intervalID = intervalID;
  }
  stop() {
    if (this.getIntervalID()) {
      window.clearInterval(this.getIntervalID());
    }

    if (this.getTimeoutID()) {
      window.clearTimeout(this.getTimeoutID());
    }
  }
}
