/*global window :true*/
import test from 'ava';
import {JSDOM} from 'jsdom';
import changebackgroundColor from './index';

const HEXADECIMAL_REGEX = /^#[0-9A-F]{6}$/i;

test.before(() => {
  global.window = new JSDOM('<!DOCTYPE html><body><p>Hello Background</p></body>').window;
});

test.afterEach.always(() => global.window.stop());

test.skip('ChangebackgroundColor: throw when no node is provided', (t) => {
  let error = t.throws(() => changebackgroundColor());

  t.is(error.message, 'Please provide a HTMLElement');
});

test.cb('ChangebackgroundColor: change color of given node', (t) => {
  t.plan(4);

  t.falsy(window.document.body.style.backgroundColor);

  changebackgroundColor(window.document.body, (node, color) => {
    t.is(node, window.document.body);
    t.truthy(window.document.body.style.backgroundColor);
    t.true(HEXADECIMAL_REGEX.test(color));
    t.end();
  });
});
