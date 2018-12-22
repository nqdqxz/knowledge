<!-- 2017/6/2  -->

# package.json

## 一、package.json

```json
{
  "name": "hello world",
  "version": "0.0.1",
  "author": "perhaps",
  "description": "learn how to write package.json",
  //放简介，方便在node search中搜索
  "keywords": [
    "node.js",
    "javascript"
  ],
  //项目官网url？？？
  "homepage": "",
  "repository": {
    "type": "git",
    "url": "https://github.com/perhaps-yo"
  },
  //包开源协议名称
  "license": "MIT",
  //所需node.js版本
  "engines": {
    "node": "0.10.x"
  },
  //模块入口文件
  "main": "",
  "bugs": {
    "url": "http://path/to/bug",
    "email": "bug@example.com"
  },
  "contributors": [
    {
      "name": "李四",
      "email": "lisi@example.com"
    }
  ],
  //npm命令行的缩写，比如运行"npm run test",就会执行"i am perhaps"命令
  "scripts": {
    "start": "node index.js",
    "test": "i am perhaps"
  },
  //项目运行所依赖的模块
  "dependencies": {
    "express": "latest",
    "mongoose": "~3.8.3",
    "handlebars-runtime": "~1.0.12",
    "express3-handlebars": "~0.5.0",
    "MD5": "~1.2.0"
    /* 版本：遵循“大版本.次要版本.小版本”的格式规定
指定版本：如1.2.2，安装时只安装指定版本。
波浪号+指定版本：如"~1.2.2"，表安装1.2.x的最新版本（不低于1.2.2）。
插入号+指定版本：如"ˆ1.2.2"，表安装1.x.x的最新版本（不低于1.2.2）。如果大版本号为0，则插入号的行为与波浪号相同，这是因为此时处于开发阶段，即使是次要版本号变动，也可能带来程序的不兼容。
latest：安装最新版本。
 */
  },
  //项目开发所需要的模块
  "devDependencies": {
    "bower": "~1.2.8",
    "grunt": "~0.4.1",
    "grunt-contrib-concat": "~0.3.0",
    "grunt-contrib-jshint": "~0.7.2",
    "grunt-contrib-uglify": "~0.2.7",
    "grunt-contrib-clean": "~0.5.0",
    "browserify": "2.36.1",
    "grunt-browserify": "~1.3.0"
  }
}
```

## 二、参考文档

-[官网](https://docs.npmjs.com/how-npm-works/packages)
