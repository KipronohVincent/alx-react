const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve('./dist'),
  },
  devtool: 'inline-source-map',
  devServer: {
   hot: true,
   open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Dashboad App',
        template: path.resolve(__dirname, '../dist/index.html')
    }),
 ],
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules|bower_components/,
        use: { 
            loader: 'babel-loader',
            options: { 
                presets: ['@babel/preset-env', '@babel/preset-react']
            } 
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true,
            },
          },
        ]
      },
    ]
  }
};
