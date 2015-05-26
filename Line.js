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

      var xAxis = props.xAxis ? _react2['default'].createElement(XAxis, null) : false;
      var yAxis = props.yAxis ? _react2['default'].createElement(YAxis, null) : false;
      var yAxisRules = props.yAxisRules ? _react2['default'].createElement(YAxisRules, { rules: props.yAxisRules }) : false;
      var yAxisLabels = props.yAxisLabels ? _react2['default'].createElement(YAxisLabels, _extends({}, props, { min: min, max: max })) : false;
      var legend = props.legend ? _react2['default'].createElement(Legend, props) : false;

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
              return _react2['default'].createElement(Path, _extends({
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

var Path = (function (_React$Component2) {
  function Path() {
    _classCallCheck(this, Path);

    if (_React$Component2 != null) {
      _React$Component2.apply(this, arguments);
    }
  }

  _inherits(Path, _React$Component2);

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

var XAxis = (function (_React$Component3) {
  function XAxis() {
    _classCallCheck(this, XAxis);

    if (_React$Component3 != null) {
      _React$Component3.apply(this, arguments);
    }
  }

  _inherits(XAxis, _React$Component3);

  _createClass(XAxis, [{
    key: 'render',
    value: function render() {
      var style = {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        borderTopWidth: 1,
        borderTopStyle: 'solid',
        borderTopColor: 'currentcolor',
        opacity: 0.25 };
      return _react2['default'].createElement('div', { style: style });
    }
  }]);

  return XAxis;
})(_react2['default'].Component);

var YAxis = (function (_React$Component4) {
  function YAxis() {
    _classCallCheck(this, YAxis);

    if (_React$Component4 != null) {
      _React$Component4.apply(this, arguments);
    }
  }

  _inherits(YAxis, _React$Component4);

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

var Legend = (function (_React$Component5) {
  function Legend() {
    _classCallCheck(this, Legend);

    if (_React$Component5 != null) {
      _React$Component5.apply(this, arguments);
    }
  }

  _inherits(Legend, _React$Component5);

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

var YAxisRules = (function (_React$Component6) {
  function YAxisRules() {
    _classCallCheck(this, YAxisRules);

    _get(Object.getPrototypeOf(YAxisRules.prototype), 'constructor', this).call(this);
    this.renderRule = this.renderRule.bind(this);
  }

  _inherits(YAxisRules, _React$Component6);

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

var YAxisLabels = (function (_React$Component7) {
  function YAxisLabels() {
    _classCallCheck(this, YAxisLabels);

    _get(Object.getPrototypeOf(YAxisLabels.prototype), 'constructor', this).call(this);
    this.renderLabel = this.renderLabel.bind(this);
  }

  _inherits(YAxisLabels, _React$Component7);

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

exports['default'] = Line;
module.exports = exports['default'];
