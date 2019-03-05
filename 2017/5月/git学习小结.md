<!-- 2017/5/29  -->

# git学习小结

## 一、安装配置

1.1 安装

[win](https://git-scm.com/downloads)  
linux: `sudo apt-get install git`  
mac: `brew install git`

1.2 基本配置

配置文件 `.gitconfig` 在用户目录下

```shell
# 用户名和密码
git config --global user.name "perhaps"
git config --global user.email "perhapszql@gmail.com"
# 设置代理
git config --local http.proxy 'socks5://127.0.0.1:1080'
git config --local https.proxy 'socks5://127.0.0.1:1080'
# 取消代理
git config --local --unset http.proxy
git config --local --unset https.proxy
# 生成ssh密钥对在用户目录，公钥打开全选复制到github中
ssh-keygen -t rsa -C "perhapszql@gmail.com"
```

1.3 配置别名

打开 `.gitconfig` 文件进行添加

```shell
[user]
  email = perhapszql@gmail.com
  name = perhaps
[http]
  proxy = socks5://127.0.0.1:1080
[https]
  proxy = socks5://127.0.0.1:1080
[alias]
  st = status -sb
  ad = add
  ci = commit
  br = branch
  co = checkout
  df = diff
  cp = cherry-pick
  lg = log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit
  alias = config --get-regexp 'alias.*'
```

1.4 初始化

- 本地初始化`git init`  
- 拉取远程库`git clone git@github.com:perhaps-yo/knowledge.git`

1.5 原理分析

工作区: 当前工程，不包括`.git`  
暂存区和分支区: `.git`文件  
忽略指定的文件: `.gitignore`

## 二、远程库

```shell
git remote add origin URL # 添加远程库origin
git remote rm origin # 移除远程库origin
git remote -v  # 显示origin远程库信息
```

## 三、场景总结

不管任何场景，每执行一个命令，都需要`git st`查看代码状态

1、最常用的

```shell
git ad * # 工作区 -> 暂存区
git ci -m 'message' # 暂存区 -> 分支区
git pull origin <remote-branch> --rebase # 以rebase的形式合并代码，这里可能会merge失败
git br # 查看当前分支
git push origin <remote-branch> # 提交到远程库
```

若rebase自动合并失败，会提示：`auto-merging conflict` 和 `conflict: merge conflict in FILE_NAME`  
解决思路：自动merge成功后的代码，会放在暂存区，而merge失败的代码，会放在工作区，可先利用`git df`查看失败的代码，手动修改并保存到暂存区后，就可以继续rebase了

```shell
git df # 工作区和暂存区比较，加--cached的话，就是暂存区和分支区的比较
git ad <file-name> # 手动解决冲突后，添加文件到暂存区
git rebase --continue
```

2、分支合并

```shell
git br # 查看本地所有分支，加-r可以查看远程所有分支
git co master # 切换到master分支
git merge dev # 合并dev分支到master分支
git push origin master
```

若自动merge失败，会提示：`conflict`和`automatic merge failed`  
解决思路：手动解决冲突，`git ad *`保存到暂存区，然后`git merge --continue`

3、命令撤销

撤销add: `git reset HEAD`  
撤销commit: `git reset --soft HEAD~`  
修改commit: `git ci --amend`  
撤销push(危险操作): 本地撤销commit和add，再强制push到远程: `git push origin master --force`

4、版本回滚(危险操作)

```shell
git lg # 查看要回退的commit-id
git reset --hard <commit-id> # 若commit-id为HEAD~，则回退到上个版本
git push origin master --force # 这里本该是先pull，但push force的话，可以强制修改远程库分支
```

撤销上面的操作

```shell
git reflog # 查看回滚前的commit-id
git reset --hard <commit-id>
```

5、移动文件夹

```shell
git mv -fr <source> <destination> # 相对目录
```

6、分支操作

查看所有分支: `git br -a`  
新建分支: `git br <br-name>`  
删除分支: `git br -d <br-name>`, 若换成-D，则强制删除  
删除远程分支: `git push origin -d <br-name>`, 危险操作

7、储藏代码状态

```shell
git stash # 储藏工作区和暂存区的代码
git stash list
git stash pop # 应用储藏的代码
```

## 四、git提交风格

1、提交示例

`git ci -m 'feat:页面删除'`

2、变更类型

```shell
feat：增加新功能
fix：问题修复
docs：文档变更
style：代码风格变更（不影响功能）
refactor：既不是新功能也不是问题修复的代码变更
perf：改善性能
test：增加测试
chore：开发工具（构建，脚手架工具等）
```

3、获取指定类型的log

获取feat类型的log: `git lg --grep feat`
