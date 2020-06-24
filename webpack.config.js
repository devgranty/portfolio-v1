const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')


module.exports = {
  mode: 'production',

  entry: './src/index.js',

  devtool: 'inline-source-map',

  resolve: {
    alias: {
        'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },

  module: {
    rules: [
      { test: /\.vue$/, loader: 'vue-loader' }
    ]
  },

  plugins: [
    new VueLoaderPlugin()
  ],

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
}