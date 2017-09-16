/*global document :true*/
import React from 'react';
import {render} from 'react-dom';
import withChangingbackgroundColor from './WrappedComponent';

const View = (props) => ( <div {...props} /> );

const EnhancedView = withChangingbackgroundColor(View);

const style = {borderColor: 'blue'};

render(
  <EnhancedView className="maria" style={style}/>,
  document.getElementById('app')
);
