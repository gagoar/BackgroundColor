import changebackgroundColor from '../../index';
import React, {Component} from 'react';

const withChangingbackgroundColor = (WrappedComponent) => {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        color: null,
      };
      changebackgroundColor(null, this.handleChangeColor.bind(this));
    }
    handleChangeColor(node, color) {
      this.setState({color});
    }
    render() {
      const {color} = this.state;
      let {style = {}} = this.props;

      style = {...style, backgroundColor: color};

      const extraProps = {...this.props, ...{style}};

      return (
        <WrappedComponent {...extraProps} />
      );
    }
  };
};

export default withChangingbackgroundColor;
