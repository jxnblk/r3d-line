'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _lodashMax = require('lodash.max');

var _lodashMax2 = _interopRequireDefault(_lodashMax);

var _lodashMin = require('lodash.min');

var _lodashMin2 = _interopRequireDefault(_lodashMin);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PathJsx = require('./Path.jsx');

var _PathJsx2 = _interopRequireDefault(_PathJsx);

var _XAxisJsx = require('./XAxis.jsx');

var _XAxisJsx2 = _interopRequireDefault(_XAxisJsx);

var _YAxisJsx = require('./YAxis.jsx');

var _YAxisJsx2 = _interopRequireDefault(_YAxisJsx);

var _YAxisRulesJsx = require('./YAxisRules.jsx');

var _YAxisRulesJsx2 = _interopRequireDefault(_YAxisRulesJsx);

var _YAxisLabelsJsx = require('./YAxisLabels.jsx');

var _YAxisLabelsJsx2 = _interopRequireDefault(_YAxisLabelsJsx);

var _LegendJsx = require('./Legend.jsx');

var _LegendJsx2 = _interopRequireDefault(_LegendJsx);

var Line = (function (_React$Component) {
  function Line() {
    _classCallCheck(this, Line);

    _get(Object.getPrototypeOf(Line.prototype), 'constructor', this).call(this);
    this.getMinMax = this.getMinMax.bind(this);
  }

  _inherits(Line, _React$Component);

  _createClass(Line, [{
    key: 'getMinMax',
    value: function getMinMax() {
      var min;
      var max;
      if (typeof this.props.min === 'number') {
        min = this.props.min;
      } else {
        min = (0, _lodashMin2['default'])(this.props.data.map(function (d) {
          return (0, _lodashMin2['default'])(d.values);
        }));
      }
      if (typeof this.props.max === 'number') {
        max = this.props.max;
      } else {
        max = (0, _lodashMax2['default'])(this.props.data.map(function (d) {
          return (0, _lodashMax2['default'])(d.values);
        }));
      }
      return {
        min: min,
        max: max
      };
    }
  }, {
    key: 'render',
    value: function render() {

      var styles = {
        container: {},
        inner: {
          position: 'relative',
          boxSizing: 'border-box',
          height: this.props.height },
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
          zIndex: 2 } };

      var props = this.props;

      var _getMinMax = this.getMinMax();

      var min = _getMinMax.min;
      var max = _getMinMax.max;

      var width = props.data[0].values.length - 1;
      var height = max - min;
      var viewBox = [0, 0, width, height].join(' ');

      var xAxis = props.xAxis ? _react2['default'].createElement(_XAxisJsx2['default'], null) : false;
      var yAxis = props.yAxis ? _react2['default'].createElement(_YAxisJsx2['default'], null) : false;
      var yAxisRules = props.yAxisRules ? _react2['default'].createElement(_YAxisRulesJsx2['default'], { rules: props.yAxisRules }) : false;
      var yAxisLabels = props.yAxisLabels ? _react2['default'].createElement(_YAxisLabelsJsx2['default'], _extends({}, props, { min: min, max: max })) : false;
      var legend = props.legend ? _react2['default'].createElement(_LegendJsx2['default'], props) : false;

      return _react2['default'].createElement(
        'div',
        { style: styles.container },
        _react2['default'].createElement(
          'div',
          { style: styles.inner },
          _react2['default'].createElement(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              viewBox: viewBox,
              preserveAspectRatio: 'none',
              style: styles.svg },
            props.data.map(function (line, i) {
              return _react2['default'].createElement(_PathJsx2['default'], _extends({
                key: 'line-' + i
              }, props, line, {
                width: width,
                height: height,
                min: min,
                max: max }));
            })
          ),
          _react2['default'].createElement(
            'div',
            { style: styles.axes },
            xAxis,
            yAxis,
            yAxisRules,
            yAxisLabels
          )
        )
      );
    }
  }]);

  return Line;
})(_react2['default'].Component);

Line.propTypes = {
  data: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.shape({
    label: _react2['default'].PropTypes.string,
    values: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.number),
    color: _react2['default'].PropTypes.string
  }))
};

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
  fontSize: '12px' };

exports['default'] = Line;
module.exports = exports['default'];