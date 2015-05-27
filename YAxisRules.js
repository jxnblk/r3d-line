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

var YAxisRules = (function (_React$Component) {
  function YAxisRules() {
    _classCallCheck(this, YAxisRules);

    _get(Object.getPrototypeOf(YAxisRules.prototype), 'constructor', this).call(this);
    this.renderRule = this.renderRule.bind(this);
  }

  _inherits(YAxisRules, _React$Component);

  _createClass(YAxisRules, [{
    key: 'renderRule',
    value: function renderRule(rule, i) {
      var style = {
        position: 'absolute',
        left: 0,
        right: 0,
        top: rule.y + '%',
        borderTopWidth: 1,
        borderTopStyle: 'solid',
        borderTopColor: 'currentcolor',
        opacity: 0.125
      };
      return _react2['default'].createElement('div', { key: 'rule-' + i, style: style });
    }
  }, {
    key: 'render',
    value: function render() {
      var style = {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0 };
      var rules = [];
      for (var i = 0; i < this.props.rules; i++) {
        rules.push({
          y: i / this.props.rules * 100
        });
      }
      return _react2['default'].createElement(
        'div',
        { style: style },
        rules.map(this.renderRule)
      );
    }
  }]);

  return YAxisRules;
})(_react2['default'].Component);

exports['default'] = YAxisRules;
module.exports = exports['default'];