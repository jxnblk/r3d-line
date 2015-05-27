
import React from 'react';

class XAxis extends React.Component {
  render() {
    var style = {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: 0,
      borderTopWidth: 1,
      borderTopStyle: 'solid',
      borderTopColor: 'currentcolor',
      opacity: 0.25,
    };
    return <div style={style} />
  }
}

export default XAxis;

