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

var YAxis = (function (_React$Component) {
  function YAxis() {
    _classCallCheck(this, YAxis);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(YAxis, _React$Component);

  _createClass(YAxis, [{
    key: 'render',
    value: function render() {
      var style = {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'currentcolor',
        opacity: 0.25
      };
      return _react2['default'].createElement('div', { style: style });
    }
  }]);

  return YAxis;
})(_react2['default'].Component);

exports['default'] = YAxis;
module.exports = exports['default'];