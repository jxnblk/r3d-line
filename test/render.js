
var fs = require('fs');
var path = require('path');
var React = require('react');
var Line = require('..');
var data = require('./data');
console.log(data);

var html = React.renderToStaticMarkup(React.createElement(Line, data));

console.log(html);

fs.writeFileSync(path.join(__dirname, './line.html'), html);

