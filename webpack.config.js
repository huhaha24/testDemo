module.exports = {
  mode: 'development',                      //规定运行模式为development
  entry: {
    father: './src/index.js'
  } ,                // webpack打包的入口文件
  output: {
    publicPath: 'dist/',
    filename: '[name].js'   // 输出之后的文件名
  },
  devtool: 'eval-source-map',
  devServer: {
    inline: true//实时刷新
  } , 
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'         // babel的loader，jsx文件使用babel-loader处理
      }, {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style!css'              // css和styleloader，对css后缀的文件进行处理
      }
    ]
  }
  
}

