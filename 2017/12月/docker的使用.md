<!-- 2017/12/10 -->

# docker的使用

- [docker的使用](#docker%E7%9A%84%E4%BD%BF%E7%94%A8)
  - [一、TIM](#%E4%B8%80%E3%80%81tim)
  - [二、thunder](#%E4%BA%8C%E3%80%81thunder)
  - [参考文档](#%E5%8F%82%E8%80%83%E6%96%87%E6%A1%A3)

## 一、TIM

1、安装镜像：`docker pull bestwu/qq:office`

2、允许所有用户访问X11服务: `xhost +`

3、编写脚本：

`vim ~/Documents/script/qq.sh`

```shell
sudo docker run -d --name qq \
--device /dev/snd \
-v /tmp/.X11-unix:/tmp/.X11-unix \
-v $HOME/TencentFiles:/TencentFiles \
-e DISPLAY=unix$DISPLAY \
-e XMODIFIERS=@im=fcitx \
-e QT_IM_MODULE=fcitx \
-e GTK_IM_MODULE=fcitx \
-e AUDIO_GID=`getent group audio | cut -d: -f3` \
-e VIDEO_GID=`getent group video | cut -d: -f3` \
-e GID=`id -g` \
-e UID=`id -u` \
bestwu/qq:office
```

`chmod a+x qq.sh`

4、快捷方式

`vim ~/.bash_aliases`添加：

```shell
alias qqstart='~/Documents/script/qq.sh'
alias qqstop='sudo docker rm -f qq'
```

5、使用

- 启动: `qqstart`
- 停止: `docker stop qq`
- 再启动: `docker start qq`
- 删除容器: `qqstop`

## 二、thunder

1、安装镜像：`docker pull yinheli/docker-thunder-xware:latest`

2、创建下载目录：`cd ~/Downloads`, `mkdir thunder`

3、编写脚本: `vim ~/script/thunder.sh`

```shell
sudo docker run -d --privileged=true \
        --name=xware \
        --net=host \
        -v /home/perhaps/Downloads/thunder:/app/TDDOWNLOAD \
        yinheli/docker-thunder-xware
```

`chmod a+x thunder.sh`

4、快捷方式

`vim ~/.bash_aliases`添加：

```shell
alias thunderstart='~/script/thunder.sh'
alias thunderstop='sudo docker rm -f xware'
```

5、使用

- 查看激活码：`docker logs xware`
- 远程地址：`http://yuancheng.xunlei.com/`

## 参考文档

- [docker:qq](https://hub.docker.com/r/bestwu/qq/)
- [docker:qq教程](http://blog.leanote.com/post/lsxfhao@126.com/%E4%BD%BF%E7%94%A8Docker%E8%A7%A3%E5%86%B3linux%E4%B8%8A%E4%BD%BF%E7%94%A8QQ%E7%9A%84%E9%97%AE%E9%A2%98)
- [docker:thunder](https://hub.docker.com/r/yinheli/docker-thunder-xware/)
