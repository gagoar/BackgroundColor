/*global document :true*/

import changebackgroundColor from '../../index';

changebackgroundColor(document.body, (node, color) => console.log(`color: ${color}`));
