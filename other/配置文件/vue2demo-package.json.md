# vue2demo-package.json

```json
{
  "name": "vue-demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    //开发环境
    "dev": "node server",
    //代码打包到测试服务器
    "dev:dist": "cross-env NODE_ENV=production gulp devDist",
    //代码打包到正式服务器
    "dev:test": "gulp devTest"
  },
  "author": "",
  "license": "ISC",
  //开发环境依赖模块
  "devDependencies": {
/*S=webpack相关模块*/
    "webpack": "^1.13.3",//构建打包程序
    "webpack-dev-server": "^1.16.2",//开发环境下，设置代理服务器
    /*S=html,图片，字体*/
    "html-webpack-plugin": "^2.24.0",//html文件编译
    "url-loader": "^0.5.7",//图片，转化为base64格式
    "file-loader": "^0.9.0",//字体，将字体文件打包
    /*E=html,图片，字体*/
    /*S=css*/
    "less": "^2.7.1",//预处理器less
    "less-loader": "^2.2.3",//预处理器less的webpack插件
    "autoprefixer-loader": "^3.2.0",//css浏览器兼容性问题处理
    "css-loader": "^0.25.0",//css生成
    "style-loader": "^0.13.1",//css插入到style标签
    /*E=css*/
    /*S=es6*/
    "babel-core": "^6.18.0",//es6代码转化器
    "babel-loader": "^6.2.7",//es6代码转化器，webpack插件
    "babel-preset-es2015": "^6.18.0",//eS6代码编译成现在浏览器支持的ES5
    "babel-preset-stage-0": "^6.16.0",//eS7要使用的语法阶段
    "babel-plugin-transform-object-assign": "^6.8.0",//Object.assign方法做兼容处理
    /*E=es6*/
    /*S=vue*/
    "babel-plugin-syntax-jsx": "^6.18.0",//jsx语法编译
    "babel-plugin-transform-vue-jsx": "^3.1.1",//jsx语法编译
    "babel-helper-vue-jsx-merge-props": "^2.0.1",//jsx语法编译
    "vue-loader": "^9.7.0",//vue组件编译
    /*E=vue*/
/*E=webpack相关模块*/
/*S=gulp相关模块*/
    "gulp": "^3.9.1",//构建自动化工作流
    "gulp-sftp": "^0.1.5",//将代码自动部署到服务器上
    "del": "^2.2.2",//代码部署成功后，删除本地编译代码
/*E=gulp相关模块*/
/*S=其他模块*/
    "cross-env": "^3.1.3"//解决跨平台设置NODE_ENV的问题
/*E=其他模块*/
  },
  //生产环境依赖模块
  "dependencies": {
    "vue": "^2.1.4",//构建用户界面
    "vue-router": "^2.1.1",//路由
    "vuex": "^2.0.0"//组件状态管理
  }
}
```
