<!-- 2017/5/16 -->

# vscode自定义代码段

`configure user snippets` -> 选择要配置的编程语言

## 一、javascript.json

```json
{
    "while1": {
        "prefix": "while1",
        "body": [
            "while(1) {",
            "  if($1) break;",
            "  $2",
            "}"
        ]
    },
    "for": {
        "prefix": "for",
        "body": [
            "for(var ${1:i} = 0${2:, len = ${3:arr}.length}; ${1:i} <${4: len}; ${1:i}++) {",
            "  $5",
            "}"
        ]
    },
    "some": {
        "prefix": "some",
        "body": [
            "${1:array}.some((val${2:, i}) => {",
            "  $3",
            "})"
        ]
    },
    "foreach": {
        "prefix": "foreach",
        "body": [
            "${1:array}.forEach((val${2:, index}) => {",
            "  $3",
            "})"
        ]
    },
    "ifelse": {
        "prefix": "ifelse",
        "body": [
            "if($1) {",
            "  $2",
            "} else {",
            "  $3",
            "}"
        ]
    },
    "ifelseif": {
        "prefix": "ifelseif",
        "body": [
            "if($1) {",
            "  $2",
            "} else if($3) {",
            "  $4",
            "} else {",
            "  $5",
            "}"
        ]
    },
    "binary": {
        "prefix": "binary",
        "body": [
            "while(1) {",
            "  if(low > high) break",
            "  mid = parseInt((low + high) / 2)",
            "  if(arr[mid] > ${1:target}) {",
            "    $2",
            "  } else if(arr[mid] < ${3:target}) {",
            "    $4",
            "  } else {",
            "    $5",
            "  }",
            "}"
        ]
    },
    "log": {
        "prefix": "log",
        "body": [
            "console.log($1)"
        ]
    },
    "creat": {
        "prefix": "creat",
        "body": [
            "/**",
            " * Created by qlzhong on 2018/11/09",
            " * Description:$1",
            " */"
        ]
    }
}

```

## 二、markdown.json

```json
{
    "r": {
        "prefix": "r",
        "body": [
            "[$1](./2018/$2月/$1.${3:md})  "
        ],
        "description": "for write readme quickly"
    },
    "alg": {
        "prefix": "alg",
        "body": [
            "<!-- 2019/01/${1:23} -->",
            "",
            "# ${2:算法名}",
            "",
            "## 一、概念",
            "",
            "1、概念",
            "",
            "2、解题思路",
            "",
            "3、复杂度",
            "",
            "## 二、算法举例",
            "",
            "## 三、参考文档",
            "",
            "[维基百科: ${2:算法名}](${3})",
            ""
        ]
    }
}

```
