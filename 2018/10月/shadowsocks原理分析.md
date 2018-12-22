<!-- 2018/10/14 -->

# shadowsocks原理分析

## 一、ssh端口转发

1、概念

ssh链接: 会自动加解密网络数据  
端口转发: 将tcp端口的数据通过ssh链接来转发  
端口转发作用: 加密通讯数据、突破防火墙  

2、本地(远程)端口转发

本地: `ssh -L localPort:remoteHost:remotePort SSHServer`
远程: `ssh -R localPort:remoteHost:remotePort SSHServer`

本地: `ssh -L 7001:localhost:389 LdapServerHost`
远程: `ssh -R 7001:localhost:389 LdapClientHost`

区别: 本地, sshServer端在server端，远程，sshServer端在client端

3、动态转发

`ssh -D localPort:SSHServer`

原理: 利用ssh创建了socks代理

## 参考文档

[实战 SSH 端口转发](https://www.ibm.com/developerworks/cn/linux/l-cn-sshforward/index.html)
