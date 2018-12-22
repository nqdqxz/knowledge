<!-- 2017/5/16 -->

# vscode插件

## 一、theme，编辑器风格

选用：dracula official

- dracula official 漂亮的theme color
- one dark pro 漂亮的theme color
- markdown preview github styling

## 二、lint

- stylelint
  - .stylelintrc.json
- eslint
  - .eslintrc.json
  - `npm i -g eslint`
- markdownlint
  - .markdownlint.json
  - `markdown:open preview to the side`：打开侧边预览
  - `markdown:open preview`：打开预览
- tslint
  - tslint.json
  - 先安装全局tslint：`npm i -g tslint typescript`

## 三、工具

- prettify json
  - 命令面板 -> prettify json即可, 要求是json文件里不能有注释，不然用不了这个插件

3、function

- advanced new file
  - 新建文件，`ctrl+alt+n`
  - 设置："newFile.showFullPath": false
- auto rename tag
  - 自动重命名html标签
- beautify - 代码格式化，`ctrl+alt+c` (自)
  - 设置文件: .jsbeautifyrc，[参考](https://github.com/victorporof/Sublime-HTMLPrettify/blob/master/.jsbeautifyrc)
  - 设置快捷键: `open keyboard shortcuts files` -> `{ "key": "ctrl+alt+c", "command": "HookyQR.beautify", "when": "editorFocus" }`
- color highlight
  - 颜色自动高亮
- document this
  - 生成ts的函数注释
  - 快捷键：`ctrl+alt+d` 两次
- filesize: 左下角显示文件大小，点击可显示详细信息
- GBKtoUTF8: 自动把文件编码方式换成utf8
- git history: view file|git|line history
- settings sync
  - 同步vscode的设置，
  - 设置权限：`chmod a+x /home/perhaps/.vscode/extensions/Shan.code-settings-sync-2.8.2/node_modules/opn/xdg-open`
  - 使用：先在github gist中得到token值，vscode命令面板 `sync:upload settings` 上传设置，另一电脑 `sync:download settings` 输入gist值获取设置
  - gist id: 90fdb9b2ca3c41c26e7d5c3c228cd798
  - 出错的话: `sync:reset extension settings`
- view in browser
- vim
- debugger for chrome

4、snippet

- html snippets
  - 设置user: 允许在其他哪些文件使用html代码提醒
- markdown all in one
  - `alt+b|i|c` toggle bold|italic|taskList
  - `ctrl+shift+]` uplevel heading
- reactjs code snippets
  - 1
  - rcc → 标准样式
  - rccp → 标+propType
  - rcfc → 标+生命周期
  - rsc → 函数样式
  - con → constructor函数
  - conc → +context
  - est → state对象
  - 2
  - cwm → componentWillMount
  - cdm → componentDidMount
  - cwr → componentWillReceiveProps
  - scu → shouldComponentUpdate
  - cwup → componentWillUpdate
  - cdup → componentDidUpdate
  - cwun → componentWillUnmount
  - 3
  - sst → setState函数
  - ssf → setState函数+回调函数
  - ren → render函数
  - 4
  - props→this.props
  - state→this.state
  - bnd → binds一个函数
