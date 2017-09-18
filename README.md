# BackgroundColor
super ultra micro tiny module that changes the background color of any given node


# Install

0. Clone repository `git clone git@github.com:gagoar/BackgroundColor.git`
0. `yarn install`


#use

```js

import changebackgroundColor from './index';

changebackgroundColor(document.body, (node, color) => console.log(`color used: ${color}` ));
```

# Example

navigate to `example/` and ran the steps described at `example/README.md`


# tests

`yarn test`
