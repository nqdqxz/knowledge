<!-- 2018/12/08 -->

# hanckerrank算法2

## 一、Detect the Domain Name

[problem](https://www.hackerrank.com/challenges/detect-the-domain-name/problem)

```js
function processData(input) {
    var arr = input.split('\n')
    var pattern = /https?:\/\/(ww[w2]\.)?([-\w.]+\.[a-z]+)/ig
    var result = new Set()
    arr.slice(1).forEach((item) => {
        item.replace(pattern, (match, p1, p2) => {
            result.add(p2)
        })
    })
    var res = Array.from(result).sort().join(';')
    console.log(res)
}
```

## 二、Detecting Valid Latitude and Longitude Pairs

[problem](https://www.hackerrank.com/challenges/detecting-valid-latitude-and-longitude/problem)

```js
function processData(input) {
    var arr = input.split('\n')
    var pattern = /\(([-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)),\s([-+]?((1[0-7]\d|[1-9]?\d)(\.\d+)?)|[-+]?180(\.0+)?)\)/g
    var result = []
    arr.slice(1).forEach((item) => {
        result.push(item.search(pattern) === 0 ? 'Valid' : 'Invalid')
    })
    var res = result.join('\n')
    console.log(res)
}
```
