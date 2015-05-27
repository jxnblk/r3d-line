
import React from 'react';

class Legend extends React.Component {
  render() {
    var props = this.props;
    var styles = {
      container: {
        fontSize: this.props.fontSize,
        paddingTop: 8,
        paddingBottom: 8
      },
      span: {
        display: 'inline-block',
        marginRight: 16,
        verticalAlign: 'middle',
      },
      chip: {
        display: 'inline-block',
        marginRight: 8,
        width: '1em',
        height: '1em',
        verticalAlign: 'middle',
        backgroundColor: item.color,
      },
      label: {
        verticalAlign: 'middle',
      }
    }
    return (
      <div style={styles.container}>
        {props.data.map(function(item, i) {
          return (
            <span key={'legend-item-'+i}
              style={styles.span}>
              <div style={styles.chip} />
              <span style={styles.label}>
                {item.label}
              </span>
            </span>
          )
        })}
      </div>
    )
  }
}

export default Legend;

