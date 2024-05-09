var webpack = require('webpack')


// 안에 객체들을 모듈로 만들어 내보내겠다. 다른데에서 이것들을 불러와 쓸 수 있다.
// 웹 팩에서 이 모듈을 가져와 설정으로 쓴다.
// entry : 재귀적으로 들어가서 필요한 모듈들을 가져온다.
// output : 하나로 합친 파일들을 budle.js로 합쳐 저장
// hot : 수정될때마다 로딩
// contentBase : index.js파일의 위/

module.exports = {
  mode: 'development',

  entry: './src/index.js',

  output: {
    path: __dirname + '/public/',
    filename: 'bundle.js'
  },

  devServer: {
    hot: true,
    // inline: true,
    host: '0.0.0.0',
    port: 4000,
    static: __dirname + '/public/',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          cacheDirectory: true,
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
    ]
  },
//
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
