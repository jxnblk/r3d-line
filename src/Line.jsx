

import _max from 'lodash.max';
import _min from 'lodash.min';
import React from 'react';
import Path from './Path.jsx';
import XAxis from './XAxis.jsx';
import YAxis from './YAxis.jsx';
import YAxisRules from './YAxisRules.jsx';
import YAxisLabels from './YAxisLabels.jsx';
import Legend from './Legend.jsx';

class Line extends React.Component {

  constructor() {
    super();
    this.getMinMax = this.getMinMax.bind(this);
  }

  getMinMax() {
    var min;
    var max;
    if (typeof this.props.min === 'number') {
      min = this.props.min;
    } else {
      min = _min(this.props.data.map(function(d) { return _min(d.values) }));
    }
    if (typeof this.props.max === 'number') {
      max = this.props.max;
    } else {
      max = _max(this.props.data.map(function(d) { return _max(d.values) }));
    }
    return {
      min: min,
      max: max
    }
  }

  render() {

    var styles = {
      container: {},
      inner: {
        position: 'relative',
        boxSizing: 'border-box',
        height: this.props.height,
      },
      svg: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 1,
        maxHeight: '100%',
        display: 'block'
      },
      axes: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 2,
      },
    };

    var props = this.props;

    var { min, max } = this.getMinMax();
    var width = props.data[0].values.length - 1;
    var height = max - min;
    var viewBox = [ 0, 0, width, height ].join(' ');

    var xAxis = props.xAxis ? <XAxis /> : false;
    var yAxis = props.yAxis ? <YAxis /> : false;
    var yAxisRules = props.yAxisRules ? <YAxisRules rules={props.yAxisRules} /> : false;
    var yAxisLabels = props.yAxisLabels ? <YAxisLabels {...props} min={min} max={max} /> : false;
    var legend = props.legend ? <Legend {...props} /> : false;

    return (
      <div style={styles.container}>
        <div style={styles.inner}>
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            viewBox={viewBox}
            preserveAspectRatio="none"
            style={styles.svg}>
            {props.data.map(function(line, i) {
              return (
                <Path
                  key={'line-'+i}
                  {...props}
                  {...line}
                  width={width}
                  height={height}
                  min={min}
                  max={max} />
              )
            })}
          </svg>
          {
          <div style={styles.axes}>
            {xAxis}
            {yAxis}
            {yAxisRules}
            {yAxisLabels}
          </div>
            }
        </div>
      </div>
    )

  }

}

Line.propTypes = {
  data: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        label: React.PropTypes.string,
        values: React.PropTypes.arrayOf(React.PropTypes.number),
        color: React.PropTypes.string
      })
    )
}

Line.defaultProps = {
  data: [],
  height: 256,
  min: false,
  max: false,
  legend: true,
  xAxis: true,
  xAxisRules: false,
  xAxisLabels: true,
  yAxis: false,
  yAxisRules: 4,
  yAxisLabels: true,
  area: false,
  areaOpacity: 0.125,
  fontSize: '12px',
}

export default Line;

