<!-- 2017/5/16 -->

# vscode自定义代码段

`configure user snippets` -> 选择要配置的编程语言

## 一、javascript.json

```json
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
    "for(var ${1:i} = 0${2:, len = ${3:arr}.length}; ${1:i} < ${4:len}; ${1:i}++) {",
    "  $5",
    "}"
  ]
},
"some": {
  "prefix": "some",
  "body": [
    "${1:array}.some((val${2:, index}) => {",
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
}
```

## 二、
