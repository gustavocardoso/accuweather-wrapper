const join = require('path').join

const include = join(__dirname, 'src')

module.exports = {
  entry: './index',
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'accuWeatherWrapper'
  },
  devtool: 'source-map',
  node: {
    fs: 'empty'
  },
  module: {
    rules: [
      {
        test: /\.js/,
        include,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      }
    ]
  }
}
