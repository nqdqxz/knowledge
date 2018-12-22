<!-- 2018/10/03 -->

# 服务器安装shadowsocks

## 一、安装shadowsocks

1、安装依赖

```shell
apt-get install python-pip
pip install shadowsocks
```

2、ss配置

```shell
vim /etc/ss.json # ss配置
```

```json
{
  "local_port":1080,
  "server":"<server-ip>",
  "port_password":{
    "<port>": "<password>"
   },
  "timeout":600,
  "method":"aes-256-cfb"
}
```

3、设置快捷键

普通模式: `vim ~/.bash_aliases`  

```shell
alias ss="ssserver -c /etc/ss.json -d"
```

fish模式: `vim ~/.config/fish/config.fish`

```shell
function ss
  ssserver -c /etc/ss.json -d $argv
end
```

4、启动关闭

开启：`ss start`  
 关闭：`ss stop`  
重新启动：`ss restart`  

5、遇到的问题

错误：`unsupported locale setting`  
解决：`export LC_ALL=C`

## 二、安装kcptun

1、安装依赖

```shell
mkdir /root/kcptun
cd /root/kcptun
wget https://github.com/shadowsocks/kcptun/releases/download/v20170718/kcptun-linux-amd64-20170718.tar.gz
tar -zxvf kcptun-linux-amd64-20170718.tar.gz
```

2、编写脚本

启动脚本：`vim /root/kcptun/start.sh`

```shell
cd /root/kcptun
./server_linux_amd64 -t <server-ip>:<ss-port> -l <kcp-port> -mode fast2 > /dev/null 2>&1 &
echo 'kcptun start success'
```

关闭脚本：`vim /root/kcptun/stop.sh`

```shell
killall server_linux_amd64
echo 'kcptun stop success'
```

脚本授权：`chmod a+x *.sh`

3、快捷键

普通模式：`vim ~/.bash_aliases`

```js
alias kcpstart="/root/kcptun/start.sh"
alias kcpstop="/root/kcptun/stop.sh"
```

fish模式: `vim ~/.config/fish/config.fish`

```shell
function kcpstart
  sh /root/kcptun/start.sh
end

function kcpstop
  sh /root/kcptun/stop.sh
end
```

4、启动关闭

启动: `kcpstart`  
关闭: `kcpstop`

## 三、参考文档

- [kcptun加速shadowsocks](http://k162.space/kcptun/)
- [kcptun windows客户端配置管理](https://github.com/xtaci/kcptun/issues/161)
- [kcptun给shadowsocks加速](http://blog.csdn.net/elegance_zf/article/details/54090963)
