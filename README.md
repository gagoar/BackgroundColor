# BackgroundColor
super ultra micro tiny module that changes the background color of any given node


# Install

0. Clone repository `git clone git@github.com:gagoar/BackgroundColor.git`
0. `yarn install`


#use

```js

import ChangebackgroundColor from './index';

const changeNodeColor = new ChangebackgroundColor(document.body);

changeNodeColor.start({every: 30000, till: 50000});

```

# Example

navigate to `example/` and ran the steps described at `example/README.md`


# tests

`yarn test`
