import test from 'ava';
import {JSDOM} from 'jsdom';
import ChangebackgroundColor, {RandomColor} from './index';

const HEXADECIMAL_REGEX = /^#[0-9A-F]{6}$/i;

test.before(() => {
  global.window = new JSDOM('<!DOCTYPE html><body><p>Hello Background</p></body>').window;
});

test.afterEach.always(() => global.window.stop());

test('RandomColor: creates an instance of RandomColor', (t) => {
  let randomColor = new RandomColor();

  t.true(randomColor instanceof RandomColor);
});

test('RandomColor: has a method/Function getColor()', (t) => {
  let randomColor = new RandomColor();

  t.is(typeof randomColor.getColor, 'function');
});

test('RandomColor:repeate: creates an instance with repeate in false', (t) => {
  let randomColor = new RandomColor();

  t.false(randomColor.state.repeate);
});

test('RandomColor:repeate: creates an instance with repeate in true', (t) => {
  let randomColor = new RandomColor(true);

  t.true(randomColor.state.repeate);
});

test('RandomColor:repeate: doesn\'t store colors after every request', (t) => {
  let randomColor = new RandomColor(true);
  let color = randomColor.getColor();

  t.true(randomColor.state.repeate);
  t.false(randomColor.contains(color));
});

test('RandomColor:repeate: store colors after every request', (t) => {
  let randomColor = new RandomColor();
  let color = randomColor.getColor();

  t.false(randomColor.state.repeate);
  t.true(randomColor.contains(color));
});

test('ChangebackgroundColor: throw when no node is provided', (t) => {
  let error = t.throws(() => new ChangebackgroundColor());

  t.is(error.message, 'Please provide a HTMLElement');
});

test('ChangebackgroundColor: has method/function start and stop', (t) => {
  let {window} = new JSDOM('<!DOCTYPE html><body><p>Hello Background</p>/<body>');
  let backgroundColor = new ChangebackgroundColor(window.document.body);

  t.is(typeof backgroundColor.start, 'function');
  t.is(typeof backgroundColor.stop, 'function');
  window.close();
});

test('ChangebackgroundColor: has method/function start and stop', (t) => {
  let {window} = new JSDOM('<!DOCTYPE html><body><p>Hello Background</p>/<body>');
  let backgroundColor = new ChangebackgroundColor(window.document.body);

  t.is(typeof backgroundColor.start, 'function');
  t.is(typeof backgroundColor.stop, 'function');
  window.close();
});

test.cb('ChangebackgroundColor: call callback when start', (t) => {
  t.plan(4);

  let backgroundColor = new ChangebackgroundColor(global.window.document.body);

  t.falsy(global.window.document.body.style.backgroundColor);

  backgroundColor.start({every: 1 * 1000, till: 10 * 1000}, (color, node) => {
    t.is(node, global.window.document.body);
    t.truthy(global.window.document.body.style.backgroundColor);
    t.true(HEXADECIMAL_REGEX.test(color));
    t.end();
  });
});
