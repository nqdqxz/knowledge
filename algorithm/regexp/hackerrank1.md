<!-- 2018/12/05 -->

# hackerrank算法1

## 一、反向捕获

1、[problem](https://www.hackerrank.com/challenges/backreferences-to-failed-groups/problem)

合法字段: 8个数字，或用3个-把8个数字平均分成4份

```js
var p = /^\d\d(-?)(\d\d\1){2}\d\d$/
```

2、[problem](https://www.hackerrank.com/challenges/branch-reset-groups/problem)

合法字段: 用 `-:---.`把8个数字等分为4份

```js
var p = /^\d\d(-|:|---|\.)(\d\d\1){2}\d\d$/
```
