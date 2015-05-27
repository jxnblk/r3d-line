
import React from 'react';

class YAxisRules extends React.Component {
  constructor() {
    super();
    this.renderRule = this.renderRule.bind(this);
  }

  renderRule(rule, i) {
    var style = {
      position: 'absolute',
      left: 0,
      right: 0,
      top: rule.y + '%',
      borderTopWidth: 1,
      borderTopStyle: 'solid',
      borderTopColor: 'currentcolor',
      opacity: .125
    }
    return (
      <div key={'rule-'+i} style={style} />
    )
  }

  render() {
    var style = {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
    }
    var rules = [];
    for (var i = 0; i < this.props.rules; i++) {
      rules.push({
        y: (i/this.props.rules) * 100
      });
    }
    return (
      <div style={style}>
        {rules.map(this.renderRule)}
      </div>
    )
  }
}

export default YAxisRules;

