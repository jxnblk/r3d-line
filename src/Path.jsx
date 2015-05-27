
import React from 'react';

class Path extends React.Component {
  render() {
    var {
      values,
      min,
      max,
      width,
      height,
      color,
    } = this.props;
    var styles = {
      path: {
        fill: 'none',
        stroke: color,
        strokeWidth: 2,
        strokeLinejoin: 'round',
        vectorEffect: 'non-scaling-stroke'
      },
      area: {
        fill: color,
        opacity: this.props.areaOpacity,
        mixBlendMode: 'multiply'
      }
    };

    var pathData = 'M0 ' + height + ' ';
    pathData += this.props.values.map(function(val, i) {
      return (i === 0 ? 'M' : 'L') + i + ' ' + (height + min - val);
    }).join(' ');

    var area = false;
    if (this.props.area) {
      var areaPath = [
        pathData,
        'L', width, height,
        'L0', height,
        'z'
      ].join(' ');
      area = <path d={areaPath} style={styles.area} />
    }

    return (
      <g>
        {area}
        <path d={pathData}
          style={styles.path} />
      </g>
    )
  }
}

export default Path

