<!-- 2018/10/03 -->

# 客户端安装shadowsocks

## 一、安装shadowscocks

[windows](https://github.com/shadowsocks/shadowsocks-windows/releases)  
[mac](https://github.com/shadowsocks/ShadowsocksX-NG/releases)  
[ubuntu](https://github.com/shadowsocks/shadowsocks-qt5/releases)  
[android](https://github.com/shadowsocks/shadowsocks-android/releases)  
[ios:wingy](https://itunes.apple.com/us/app/wingy-http-s-socks5-proxy-utility/id1178584911)  

[ss-kcptun](https://github.com/shadowsocks/kcptun/releases)  
[kcptun-android](https://github.com/shadowsocks/kcptun-android/releases)  

## 二、ss配置

1、shadowsocks配置

加密: `aes-256-cfb`  
插件: `kcptun`  
插件选项: `-mode=fast2`  
本地代理端口: `1080`  

2、kcptun位置

kcptun放在shadowsocks.exe同级目录下

## 三、chrome插件: SwitchyOmega

1、proxy

socks:127.0.0.1:1080

2、auto switch

规则列表: proxy
默认: 直连

3、规则列表

格式: AutoProxy  
地址: `https://raw.githubusercontent.com/gfwlist/gfwlist/master/gfwlist.txt`
