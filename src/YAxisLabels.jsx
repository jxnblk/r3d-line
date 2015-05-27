
import React from 'react';

class YAxisLabels extends React.Component {
  constructor() {
    super();
    this.renderLabel = this.renderLabel.bind(this);
  }

  renderLabel(label, i) {
    var style = {
      position: 'absolute',
      left: 0,
      right: 0,
      top: label.y + '%',
      fontSize: this.props.fontSize
    }
    return (
      <div key={'label-'+i} style={style}>
        {label.value}
      </div>
    )
  }

  render() {
    var style = {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    }
    var labels = [];
    for (var i = 0; i < this.props.yAxisRules; i++) {
      var value = (this.props.max - this.props.min) * (1 - (i/this.props.yAxisRules));
      labels.push({
        value: value,
        y: (i/this.props.yAxisRules) * 100
      });
    }
    return (
      <div style={style}>
        {labels.map(this.renderLabel)}
      </div>
    )
  }
}

export default YAxisLabels;

