<!-- 2017/6/15  -->

# mongodb学习笔记

MongoDB是跨平台、面向文档的数据库。MongoDB的运行基于集合（collection）与文档（document）。linux和windows环境下的安装，和基本的shell命令操作数据库

## 一、基本概念

mongodb:MongoDB是跨平台、面向文档的数据库。MongoDB的运行基于集合（collection）与文档（document)</br>
数据库:数据库是集合的容器。一个MongoDB服务器有多个数据库</br>
集合:是一组MongoDB文档。相当于关系型数据库中表的概念。集合不能执行模式（schema）。存储在集合中的数据都是BSON格式。BSON是一种类json的一种二进制形式的存储格式,简称Binary JSON。</br>
文档:一组键值对,有着动态的模式</br>

## 二、安装使用

1、windows安装

```shell
官网下载: https://www.mongodb.com/
添加path: D:\software\work\mongodb\bin
创建数据目录: mongod --dbpath c:\data\db
写日志:  mongod --logappend --logpath 'mongodb.log'
指定监听端口打开服务器: mongod --port 8080 #默认是27017
启动: mongod
shell连接数据库: mongo
```

2、linux安装

```shell
curl -O https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-3.0.6.tgz  #下载
tar -zxvf mongodb-linux-x86_64-3.0.6.tgz #解压
mv  mongodb-linux-x86_64-3.0.6/ /usr/local/mongodb #将解压包拷贝到指定目录
rm  mongodb-linux-x86_64-3.0.6.tar.gz /usr/local/mongodb
vim /etc/profile #添加到path
  export PATH=/usr/local/mongodb/bin:$PATH #文件最后一行添加
source /etc/profile
mkdir -p /data/db #创建数据库目录
mongod #启动mongodb
mongo #js交互
mongod --rest #启用http用户界面，进行测试
#ip地址:27017 即可访问
```

## 三、shell操作数据库

1、基本命令

```shell
显示已有数据库: show dbs
显示当前数据库名字: db
创建数据库: use db-name
删除数据库: db.dropDatabase()
显示集合: show tables
删除集合: db.collection-name.drop()
插入文档: db.col-name.insert(对象文档)
查看文档: db.col-name.find()
更新文档: db.col-name.update(<query>,<update>,upsert,multi,writeConcern)//writeConcern:抛出异常的级别
替换文档: db.col-name.save(<document>,writeConcern)
删除文档: db.col-name.remove(<query>,<justOne>,writeConcern)//justOne:1|true,只删除一条记录
查询文档: db.col-name.find(query.projection).pretty()//查询条件，返回的键
索引: db.col-name.ensureIndex({k1: 1}) //1位升序，-1位降序
```

2、插入文档

```shell
> perhaps=({
  title: 'MongoDB 教程', 
  description: 'MongoDB 是一个 Nosql 数据库',
  by: '菜鸟教程',
  url: 'http://www.runoob.com',
  tags: ['mongodb', 'database', 'NoSQL'],
  likes: 100
});
> db.zly.insert(perhaps)
```

3、查询文档

```shell
and条件: db.zly.find({k1: v1, k2: v2}).pretty()
or条件: db.zly.find($or:[{k1: v1}, {k2: v2}]).pretty()
and和or: db.zly.find({k1: v1, $or:[{k2: v2}, {k3: v3}]}).pretty()
条件操作符: $gt|gte|lt|lte: greater than equal|less than
  db.zly.find({k1: {$gt: 100, $lte: 200}}).pretty()
数据类型: $type: double|string|object|array|'binary data'|boolean|date|null|'regular expression'|javascript|symbol|timestamp|32-bit integer|'64-bit integer'|'min key'|'max key'
  db.zly.find({k1: {$type: 'string'}}).pretty()
读取指定数量的数据: limit(num)
  db.zly.find({}, {'title':1, _id: 0}).pretty().limit(1)
跳过指定数量数据: skip(num)
  db.zly.find({}, {'title':1, _id: 0}).pretty().limit(1).skip(1)
排序: sort({k1: 1}) 1位升序，-1位降序
  db.zly.find().pretty().sort({k1: -1})
```

## 四、参考文档

- [入门](http://www.runoob.com/mongodb/mongodb-tutorial.html)
- [mongodb+nodejs](http://mongodb.github.io/node-mongodb-native/2.2/tutorials/main/)
- [mongoose](https://github.com/alsotang/node-lessons/tree/master/lesson15)
