<!-- 2019/03/02 -->

# KMP算法(克努斯-莫里斯-普拉特算法)

## 一、概念

1、目的: 字符串S内查找词W的出现位置。

2、算法特点: 通过对词W在不匹配时已包含的足够信息，来确定下一个匹配将在哪里开始，避免重新检查先前匹配的字符。

3、算法思路:  
先计算`部分匹配表`，得到下一次匹配移动的位数，进行匹配比较  
`移动位数 = 已匹配的字符数 - 部分匹配值`  

4、通过搜索词W计算部分匹配表:  
概念: 部分匹配值就是`前缀`和`后缀`的最长共有元素的长度  
前缀: 字符串的全部头部组合  
后缀: 字符串的全部尾部组合  

5、复杂度: `时间O(log(lenS + lenW))`

## 二、算法举例

1、暴力破解法  
S匹配i位置，W匹配j位置  
匹配成功(S[i] === W[j])，则i++,j++，继续匹配  
匹配失败，则 i = i - j + 1, j = 0，即i回溯，j置0  

```js
function violentMatch(s, w) {
    var i = 0
    var j = 0
    while (i < s.length && j < w.length) {
        if (s[i] === w[j]) {
            i++
            j++
        } else {
            i = i - j + 1
            j = 0
        }
    }
    if (j === w.length) {
        return i - j
    }
    return -1
}
var r = violentMatch('BBC ABCDAB ABCDABCDABDE', 'ABCDABD')
console.log(r, r === 15)
```

2、KMP

`DABCDABDE`

next数组求解  
k =    -1 0 0 0 0 1 2 3 1 0
j =     0 1 2 3 4 5 6 7 8 9
next = -1 0 0 0 0 1 2 3 1 0

```js
function getNext(w) {
    var next = [-1]
    var j = 0
    var k = -1
    while (j < w.length - 1) {
        if (k === -1 || w[j] === w[k]) {
            j++
            k++
            next[j] = k
        } else {
            k = next[k]
        }
    }
    return next
}
```

```js
// var next = [-1, 0, 0, 0, 0, 1, 2] // ABCDABD的next数组值，难点是next数组的计算
function kmpSearch(s, w) {
    var i = 0
    var j = 0
    var next = getNext(w)
    while (i < s.length && j < w.length) {
        if (j === -1 || s[i] === w[j]) { // 区别1
            i++
            j++
        } else {
            j = next[j] // 区别2
        }
    }
    if (j === w.length) {
        return i - j
    }
    return -1
}
var r = kmpSearch('BBC ABCDAB ABCDABCDABDE', 'ABCDABD')
console.log(r, r === 15)
```

## 三、参考文档

[维基百科:KMP](https://zh.wikipedia.org/wiki/%E5%85%8B%E5%8A%AA%E6%96%AF-%E8%8E%AB%E9%87%8C%E6%96%AF-%E6%99%AE%E6%8B%89%E7%89%B9%E7%AE%97%E6%B3%95)  
[阮一峰:KMP](http://www.ruanyifeng.com/blog/2013/05/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm.html)  
[csdn:理解KMP](https://blog.csdn.net/v_july_v/article/details/7041827)  
