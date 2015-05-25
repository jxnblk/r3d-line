
module.exports = {

  entry: './src/Line.jsx',

  output: {
    filename: 'Line.js',
    path: __dirname,
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
    ]
  },

  externals: {
    'react': 'React'
  }

};

