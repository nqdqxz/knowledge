<!-- 2017/8/1 -->

# vim学习笔记

寝室电脑换成了ubuntu以后，发现学习vim是很必要的，总结一下常用命令。
<!--more-->

## 一. 基本命令

1.1 插入模式

- `iI`: 光标前编辑|行首编辑
- `aA`: 光标后编辑|行末编辑
- `xX`: 删字符|退格
- `oO`: 插入新行
- `cw`: 删除一个单词

1.2 移动光标

- `hjkl`: 左下上右
- `HML`: 屏幕头|中|尾
- `zz|zt|zb|c-d|c-u`: 滚屏到中间|头|尾|上滚半屏|下滚半屏
- `web`: 下个单词，词尾，词头
- `0$`: 行头|行尾
- `<number> G`: 到第几行
- `ggG`: 到第一行|最后一行
- `%`: 匹配括号移动

1.3 复制粘贴

- `dd|D`: 删除当前行|到行末
- `yy|Y`: 复制当前行
- `pP`: 粘贴前|后
- `.`: 重复上次命令
- `<number> <command>`： 重复某个命令多次
- `ggyG`: 复制整个文件

1.4 撤销

- `u`: undo
- `<ctrl+r>`: redo

1.5 保存退出文件

- `e <file>`: 打开文件
- `:w`: 存盘
- `:q!`: 退出不保存
- `:wq`: 存盘+退出
- `saveas <file>`: 另存为
- `:bn`和`:bp`: 切换下个或上个文件

1.6 帮助

- `:help <command>`: 命令帮助
- `:set number`: 显示代码行号

1.7 块操作

- `ctrl+v`: 块选择
- `I`+`esc`: 块操作

1.8 查找替换

- `/word`: 向下搜索单词
- `?word`: 向上搜索单词
- `n`: 查找下一个匹配项
- `N`: 查看上一个匹配项
- `*`: 光标所在单词，向下查找
- `#`: 光标所在单词，向上查找
- `:n1,n2s/src/dest/g`: 在n1到n2之间，将src替换为dest
- `:.,$s/src/dest/g`: 当前行到最后一行

1.9 代码缩进(vistual模式)

- `>`: 右缩进
- `<`: 左缩进

1.10 暂时离开insert模式

- `<ctrl+o>` 操作完normal命令，变成insert模式

## 二、vim配置

vim ~/.vimrc

```.shell
"显示行号
set nu
"启动时隐去援助提示
set shortmess=atI
"语法高亮
syntax on
"使用vim的键盘模式
"set nocompatible
"不需要备份
set nobackup
"没有保存或文件只读时弹出确认
set confirm
"鼠标可用
set mouse=a
"tab缩进
set tabstop=2
set shiftwidth=2
set expandtab
set smarttab
"文件自动检测外部更改
set autoread
"c文件自动缩进
set cindent
"自动对齐
set autoindent
"智能缩进
set smartindent
"高亮查找匹配
set hlsearch
"背景色
set background=dark
"显示匹配
set showmatch
"显示标尺，就是在右下角显示光标位置
set ruler
"去除vi的一致性
set nocompatible
"允许折叠
set foldenable
"""""""""""""""""设置折叠"""""""""""""""""""""
"
"根据语法折叠
set fdm=syntax
"手动折叠
"set fdm=manual
"设置键盘映射，通过空格设置折叠
nnoremap <space> @=((foldclosed(line('.')<0)?'zc':'zo'))<CR>
""""""""""""""""""""""""""""""""""""""""""""""
"不要闪烁
set novisualbell
"启动显示状态行
set laststatus=2
"浅色显示当前行
autocmd InsertLeave * se nocul
"用浅色高亮当前行
autocmd InsertEnter * se cul
"显示输入的命令
set showcmd
"被分割窗口之间显示空白
set fillchars=vert:/
set fillchars=stl:/
set fillchars=stlnc:/
```

## 参考文档

- [vim练级攻略](https://coolshell.cn/articles/541..html)
