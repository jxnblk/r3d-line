
import React from 'react';

class YAxis extends React.Component {
  render() {
    var style = {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'currentcolor',
      opacity: 0.25
    }
    return <div style={style} />
  }
}

export default YAxis;

