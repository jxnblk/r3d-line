'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Legend = (function (_React$Component) {
  function Legend() {
    _classCallCheck(this, Legend);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Legend, _React$Component);

  _createClass(Legend, [{
    key: 'render',
    value: function render() {
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
          verticalAlign: 'middle' },
        chip: {
          display: 'inline-block',
          marginRight: 8,
          width: '1em',
          height: '1em',
          verticalAlign: 'middle',
          backgroundColor: item.color },
        label: {
          verticalAlign: 'middle' }
      };
      return _react2['default'].createElement(
        'div',
        { style: styles.container },
        props.data.map(function (item, i) {
          return _react2['default'].createElement(
            'span',
            { key: 'legend-item-' + i,
              style: styles.span },
            _react2['default'].createElement('div', { style: styles.chip }),
            _react2['default'].createElement(
              'span',
              { style: styles.label },
              item.label
            )
          );
        })
      );
    }
  }]);

  return Legend;
})(_react2['default'].Component);

exports['default'] = Legend;
module.exports = exports['default'];