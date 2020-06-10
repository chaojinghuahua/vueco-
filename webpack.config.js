const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); //打包带着html文件
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); //每次打包自动清理dist
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  // entry: "./src/index.js",
  // 使用@babel/polyfill来解析es7,8的语法，也可以是在此处修改入口
  entry: ["@babel/polyfill", "./src/index.js"],

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: "/", // 引入打包的文件时路径以/开头
  },

  //   配置所有loader
  module: {
    rules: [
      // es6转为es5
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      // css
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"], //使用loader的时候有顺序，从后往前
      },
      //打包图片
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192 * 10000,
              name: "[hash:8].[ext]",
            },
          },
        ],
      },
      // 处理vue文件
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      // // 字体文件
      // {
      //   test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
      //   loader: "file-loader",
      // },
    ],
  },

  //   配置插件
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/public/index.html",
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new CopyPlugin([
      //为了把public下除了index.html文件外的其余所有，给dist目录下拷贝一份
      {
        from: path.resolve(__dirname, "src/public"),
        to: path.resolve(__dirname, "dist"),
        ignore: ["index.html"],
      },
    ]),
  ],

  mode: "development",

  devServer: {
    port: 8080,
    open: true,
    quiet: true,
    historyApiFallback: true, // 任意的 404 响应都被替代为 index.html
  },

  devtool: "cheap-module-eval-source-map",

  resolve: {
    extensions: [".js", ".json", ".vue"], //解决导入省略后缀名称
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
};
