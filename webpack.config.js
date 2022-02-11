const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      '@actions': path.resolve(__dirname, 'src/actions'),
      '@core': path.resolve(__dirname, 'src/core'),
      '@reducers': path.resolve(__dirname, 'src/reducers'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@containers': path.resolve(__dirname, 'src/containers'),
      '@middleware': path.resolve(__dirname, 'src/middleware'),
      '@models': path.resolve(__dirname, 'src/models'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    }
  },
  output: {
    filename: 'index.js',
    library: {
      name: 'react-usb-barcode-scanner',
      type: 'umd'
    },
    globalObject: 'this',
    path: path.resolve(__dirname, 'dist')
  },
  externals: {
    // Don't bundle react or react-dom
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM',
    },
    'react-redux': {
      commonjs: 'react-redux',
      commonjs2: 'react-redux',
      amd: 'ReactRedux',
      root: 'ReactRedux',
    },
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}
