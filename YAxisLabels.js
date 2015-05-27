'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var YAxisLabels = (function (_React$Component) {
  function YAxisLabels() {
    _classCallCheck(this, YAxisLabels);

    _get(Object.getPrototypeOf(YAxisLabels.prototype), 'constructor', this).call(this);
    this.renderLabel = this.renderLabel.bind(this);
  }

  _inherits(YAxisLabels, _React$Component);

  _createClass(YAxisLabels, [{
    key: 'renderLabel',
    value: function renderLabel(label, i) {
      var style = {
        position: 'absolute',
        left: 0,
        right: 0,
        top: label.y + '%',
        fontSize: this.props.fontSize
      };
      return _react2['default'].createElement(
        'div',
        { key: 'label-' + i, style: style },
        label.value
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var style = {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0 };
      var labels = [];
      for (var i = 0; i < this.props.yAxisRules; i++) {
        var value = (this.props.max - this.props.min) * (1 - i / this.props.yAxisRules);
        labels.push({
          value: value,
          y: i / this.props.yAxisRules * 100
        });
      }
      return _react2['default'].createElement(
        'div',
        { style: style },
        labels.map(this.renderLabel)
      );
    }
  }]);

  return YAxisLabels;
})(_react2['default'].Component);

exports['default'] = YAxisLabels;
module.exports = exports['default'];