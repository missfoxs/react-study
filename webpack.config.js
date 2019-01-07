const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, './src/index.html'),
    filename: "index.html"
});

module.exports ={
    mode: "development",  //开发模式或者生产模式
    //在webpack4.x中约定大于配置，约定默认打包文件是src/index.js,输出文件是dist/main.js。
    // 因此这里不用配置入口文件等
    devServer: {
        open: false, //自动打开浏览器
        port: 3002,
        contentBase: "src"
    },
    plugins: [
        htmlPlugin
    ],
    //所有第三方模块的配置
    module: {
        rules: [
            { test: /\.js|jsx$/, use: "babel-loader",
                exclude: /node_modules/},
            { test: /\.css$/,
                use: ["style-loader", "css-loader"]},
            //打包处理字体文件,内部依赖file-loader,也要安装
            { test: /\.ttf|woff|woff2|eot|svg$/, use: "url-loader" },
            // 安装sass-loader, node-sass -D
            // 自己的样式使用scss处理，因此需要启用模块化，外部文件（如bootstrap）是css类型，不使用模块化
            // modules表示为普通的css，启用模块化
            // localIdentName自定义生成类名,可以将默认的名称改变为我们想要的
            // path表示配置的当前路径，name表示文件夹名，local表示文件名,hash防止重复
            // 形如src-css-CommonItem-boxCmt-d4f98
            { test: /\.scss$/, use: ["style-loader",
                    "css-loader?modules&localIdentName=[path][name]-[local]-[hash:5]", "sass-loader"]}
        ]
    },
    resolve: {
        // 扩展名
        extensions: [".js",".jsx",".json", ".vue", ".scss", ".css"], //表示这几种文件的后缀名可以省略，会自动补全
        // 别名
        alias: {
            "@": path.join(__dirname, "./src")   //@表示src这一层
        }
    }
};