<!-- 2017/6/20  -->

# chrome

## 一、搜索引擎的命令

```shell
1、双引号: 完全匹配搜索。 "谷歌搜索"
2、减号: 搜索不包含减号词的页面。减号前面必须是空格,后面没有空格。eg. 搜索 -引擎
3、星号: 通配符, eg.搜索*擎
4、inurl: 查询词出现在url中的页面。支持中文和英文。eg.inurl:搜索引擎优化
5、allinurl。 eg.allinurl:SEO 搜索引擎优化, 等用于inurl:SEO inurl:搜索引擎优化
6、intitle: 页面title中包含关键词的页面。
7、allintitle:多组关键词。例如 :allintitle:SEO 搜索引擎优化，就相当于:intitle:SEO intitle:搜索引擎优化返回的是标题中中既包含“SEO”,也包含“搜索引擎优化”的页面
8、inanchor: 导入链接锚文字中包含搜索词的页面。
9、filetype: 搜索特定文件格式。eg.filetype:pdf SEO,返回包含SEO关键词的pdf文件
10、site: 搜索某域名下的所有文件。
11、linkdomain: 只适用于雅虎,返回某域名的反向链接。雅虎的反向链接数据还比较准确,是SEO人员研究竞争对手外部链接情况的重要工具之一。
eg.linkdomain:http://cnseotool.com -site:http://cnseotool.com, 得到的就是点石网站的外部链接,因为-site:http://cnseotool.com 已经排除了内部链接
12、related: 只适用于Google,返回的结果是与某个网站有关联的页面。eg.related:http://cnseotool.com, 得到Google所认为的与点石网站有关联的其他页面
```

## 二、URL命令

- chrome://version
- chrome://bookmarks|settings|downloads
- chrome://chrome-urls 可以查看其他命令

## 三、插件

- vue-devtools
- emmet re:view 显示在不同设备下的页面
- whatfont: 查看页面字体的种类
- turn off the light: 看视屏时选择关灯
- stylus:

## 四、开发者工具

4.1 公用快捷键

```shell
ctrl+pageup|down: 左|右边标签
ctrl+shift+i|f2: 打开开发者工具
ctrl+shift+c: 检查元素模式
ctrl++|-|o: 放大|缩小|回复默认大小
ctrl+[: 左面板
ctrl+p: 资源面板
ctrl+shift+p: 命令面板 
ctrl+f: 当前资源寻找
ctrl+shift+f: 全资源寻找
alt+d|f6: 定位到url
text editor:
  ctrl+g: 到指定行
common:
  ctrl+shift+b|o: 显示隐藏书签栏|打开书签管理器
  ctrl+h|j: 新标签页打开'历史记录'|'下载'
  f6: 地址栏，书签栏，页面内容之间切换焦点
  ctrl++|-|o: 放大|缩小|恢复默认大小
  ctrl+u|d: 查看页面源代码|当前网页加入书签
  alt+home: 当前页面打开主页
  alt+左箭头: 页面后退
```

4.2 各种面板

1、elements：无法在Elements面板中通过DOM更改修改源文件，所以可以先跳转到sources面板

2、console

```shell
# 快捷键
shift+enter: 进入多行模式
ctrl+l: 清除控制台历史
ctrl+'->'或tab: 接受代码提醒
# api
console.dir(object); //输入以js形式表示的对象
console.time()和console.timeEnd();//计算代码运行时间
```

3、sources

```shell
工作区的更改映射到源文件:
  sources面板->右键'add folder to workspace'->加入源文件
  ->右键工作区文件'map to file system resource'->选择已在工作区的对应本地文件

调试:
  操作:
    step into|step out|step over|resume 对应快捷键ctrl+;|+shift+;|+'|+\
    pause on exceptions 表:发生异常时，自动暂停执行代码
    deactivate breakpoint 表: 暂时停用所有断点
    async 提高异步函数调用堆栈可视性
  面板:
    call stack: 显示调用堆栈，倒序形式显示将代码带到该断点的执行路径
      restart frame: 返回到当前函数第一行
      copy stack trace: 拷贝堆栈信息
      blackbox script: 对当前js文件黑箱处理
    breakpoints: 显示已有断点
      remove|deactivate|disable|remove all|remove other
    XHR breakpoints:
      可'+'添加string: url包含string则设为断点
    DOM breakpoints:
      DOM调试: 右键元素'检查'->右键'break on subtree modifications'->再触发事件就能找到对应的js代码
        dom调试包括: 子树修改(节点子项)，属性修改，节点移除
    global listeners:
    event listener breakpoints:
    scope: 显示该时刻已定义所有属性(脚本停止时才显示信息)
    watch:
  先添加'event listener breakpoint'可以添加一个事件断点，然后再次触发该事件。点击代码行号在该行添加断点
  有条件断点: 行号右键'add conditional breakpoint' 或者断点行号右键'edit breakpoint'
  黑箱脚本:
    调试时跳过某脚本文件(第三方类库), 该文件右键'blackbox script',或call stack右键'blckbox script',或'setting'进行设置
  非js文件不能直接修改？？
  可以右键代码,'continue to here',比设置断点快多了
```

4、network

5、performance|timeline

6、memory|profiles(轮廓，简况)

7、application：网络应用清单、服务工作线程和服务工作线程缓存

8、security

9、audits

10、drawer

- console
- animations:查看动画
- history
- network conditions
- remote devices
- rendering
- search
- sensors
- quick source

## 五、参考文档

- [谷歌开发者](https://developers.google.com/web)
- [谷歌开发者工具](https://developers.google.com/web/tools/chrome-devtools/)
- [插件商店](https://chrome.google.com/webstore/category/extensions)
- [demo](https://events.google.com/io2016/)
- [demo-debug](https://googlechrome.github.io/devtools-samples/debug-js/get-started)
