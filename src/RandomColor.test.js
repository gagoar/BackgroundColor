import test from 'ava';
import {JSDOM} from 'jsdom';
import RandomColor from './RandomColor';

const HEXADECIMAL_REGEX = /^#[0-9A-F]{6}$/i;

test('RandomColor: creates an instance of RandomColor', (t) => {
  let randomColor = new RandomColor();

  t.true(randomColor instanceof RandomColor);
});

test('RandomColor: has a method/Function getColor()', (t) => {
  let randomColor = new RandomColor();

  t.is(typeof randomColor.getColor, 'function');
});

test('RandomColor: store colors after every request', (t) => {
  let randomColor = new RandomColor();
  let color = randomColor.getColor();

  t.true(randomColor.contains(color));
});
