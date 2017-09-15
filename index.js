/*global window :true*/
import RandomColor from './src/RandomColor';

const _changeNodeColor = (node, randomColor, callback) => {
  const color = randomColor.getColor();

  node.style.backgroundColor = color;

  if (callback) {
    callback(node, color);
  }
};

const changebackgroundColor = (node, callback) => {
  const timers = {every: 1 * 1000, till: 10 * 1000};
  const randomColor = new RandomColor();
  const intervalID = window.setInterval(_changeNodeColor.bind(null, node, randomColor, callback), timers.every);

  window.setTimeout(() => clearInterval(intervalID), timers.till);
};

export default changebackgroundColor;
