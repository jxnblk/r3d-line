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

var Path = (function (_React$Component) {
  function Path() {
    _classCallCheck(this, Path);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Path, _React$Component);

  _createClass(Path, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var values = _props.values;
      var min = _props.min;
      var max = _props.max;
      var width = _props.width;
      var height = _props.height;
      var color = _props.color;

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
      pathData += this.props.values.map(function (val, i) {
        return (i === 0 ? 'M' : 'L') + i + ' ' + (height + min - val);
      }).join(' ');

      var area = false;
      if (this.props.area) {
        var areaPath = [pathData, 'L', width, height, 'L0', height, 'z'].join(' ');
        area = _react2['default'].createElement('path', { d: areaPath, style: styles.area });
      }

      return _react2['default'].createElement(
        'g',
        null,
        area,
        _react2['default'].createElement('path', { d: pathData,
          style: styles.path })
      );
    }
  }]);

  return Path;
})(_react2['default'].Component);

exports['default'] = Path;
module.exports = exports['default'];