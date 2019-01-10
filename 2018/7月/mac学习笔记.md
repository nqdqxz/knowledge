<!-- 2018/7/9 -->

# mac学习笔记

第一次用mac电脑，小结一下mac这方面的知识

## 一、快捷键

1、窗口处理

```shell
command+m 最小化当前窗口
option+command+h 隐藏其他窗口
control+command+f 窗口全屏
```

使用软件 [spectacle](https://www.spectacleapp.com/)

```shell
option+command+f 全屏
option+command+c 中间
option+command+左|右|上|下
```

2、终端

```shell
command+w 关闭标签页
command+t 新建标签页
control+u 抹掉到开头
control+a|e 移动到开头|结尾
```

3、文件夹

```shell
command+o 打开文件夹
command+shift+g 输入路径到达文件夹
command+上 向上打开文件夹
command+delete 删除文件
return 文件重命名
fn+上|下 滚动一页
```

## 二、开发必备

1、brew

作用：下载神器  
安装：`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`  
更新：`brew update && brew upgrade`

显示安装的软件: `brew list`  
查看软件信息: `brew info|home <name>`  
查看需要更新的软件: `brew outdated`  
更新软件: `brew upgrade <name>`  

2、node

`brew install node watchman watchman`

3、git

`brew install git`

## 三、强化软件

1、alfred

作用：快速搜索其他软件  
[download](https://www.alfredapp.com/)  
打开：`command+space`

2、snipaste

作用：截图

3、iterm2

作用：代替终端  
[download](https://www.iterm2.com/)  
[配置](http://huang-jerryc.com/2016/08/11/%E6%89%93%E9%80%A0%E9%AB%98%E6%95%88%E4%B8%AA%E6%80%A7Terminal%EF%BC%88%E4%B8%80%EF%BC%89%E4%B9%8B%20iTerm/)  
快捷键：打开：`command+i`, 变色：`command+u`

4、oh-my-zsh

作用：强化zsh  
使用：先用zsh取代bash，再安装这个软件  

```shell
chsh -s /bin/zsh  
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

给环境变量开机启动: `vim .zshrc`, 最后一行添加

```shell
source /users/ctrip/.bash_profile
source /users/ctrip/.bashrc
```

5、spectacle

作用：桌面软件位置调整

6、snipaste

作用：桌面截图软件  
使用: f1开始截图、f3钉在桌面上，可以用command+s进行保存

## 四、

1、端口占用

```shell
sudo lsof -i tcp:<port>
sudo kill -9 <pidName>
```
