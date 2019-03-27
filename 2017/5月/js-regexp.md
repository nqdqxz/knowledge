<!-- 2017/5/20  -->

# js正则小结

小结了js的RegExp对象方法和属性，String正则的用法，以及pattern所有语法

## 一、RegExp对象方法

1、`pattern.test(str)`

return: boolean

```javascript
//验证手机号
var pattern = /\d{11}/;
var res = pattern.test('12345678901')
// log: true
```

2、`pattern.exec(str)`

return: `[match, p1, p2]`, 还有index|input属性

```javascript
var str = 'hello world'
var pattern = /(he)(llo)/;
var res = pattern.exec(str);
// log: ['hello', 'he', 'llo', index: 0, input: 'hello world']
```

## 二、RegExp对象属性

基于执行的最近一次正则表达式，`Regexp` 将有下列属性

- input 输入的字符串
- lastMatch 匹配项
- lastParen 捕获组, 以上opera都不支持
- leftContext 输入字符串中lastMatch前的文本
- rightContext
- multiline 返回布尔值，是否使用了多行模式，ie和opera不支持

```javascript
var pattern = /(ll)/gi;
if(pattern.test('hello')) {
  var r = RegExp;
  console.log(r.input); // 'hello'
  console.log(r.lastMatch, r.lastParen); // 'll' 'll'
  console.log(r.leftContext, r.rightContext, r.multiline); //'he' 'o' undefined
}
```

## 三、String正则

包括4个方法: `search, match` 用于查找; `replace, split` 用于str操作

1、`str.search(pattern)`

return: 首次匹配项的索引, 否则-1

2、`str.match(pattern)`

pattern无g标志，return: `[match, p1, p2]`, 还有index|input属性  
pattern有g标志，return: `[match1, match2]`

```javascript
var str = 'hello hello';
var res1 = str.match(/h(e)/); // [ 'he', 'e', index: 0, input: 'hello hello' ]
var res2 = str.match(/h(e)/g); // ['he', 'he']
```

3、`str.replace(pattern, string|function)`

return: 新字符串

第二个参数为string时

```javascript
// 所有'apples'变为'oranges'
var str = "Apples are round, and apples are juicy.";
var res = str.replace(/apples/gi, "oranges");
```

```javascript
// 交换两个单词
var res = "John Smith".replace(/(\w+)\s(\w+)/re, "$2, $1");
// log: 'Smith John'
```

第二个参数为函数时: `function(match, p1, p2, index, input)`。 分别为匹配的子串; 对应$1,$2; 子串在原字符串的偏移量，原字符串

```javascript
// 分割不同类型的字符，得到: 单词非数字 - 单词数字 - p3非单词
var str = 'abc12345#$*%'
var pattern = /^(\D+)(\d+)(\W+)$/
var res = str.replace(pattern, (match, p1, p2, p3) => {
  return [p1, p2, p3].join(' - ');
});
// log: abc - 12345 - #$*%
```

```javascript
// 华氏度转为摄氏度
var str = '98f hello'
var pattern = /(\d+(\.\d+)?)[fF]/ 
var res = str.replace(pattern, (match, p1) => {
    return ((p1 - 32) * 5 / 9) + "C"
})
// log: 36.666666666666664C hello
```

4、`str.split(pattern)`

return: 按pettern拆分的数组

```javascript
// 根据分号得到单词数组，分号前后有空格的阻碍
var names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ";
var nameList = names.split(/\s*;\s*/);
// log: ["Harry Trump", "Fred Barney", "Helen Rigby", "Bill Abel", "Chris Hand "]
```

5、exec()和match()的区别

- exec:返回数组,与第一个匹配相关的信息
- match:没有g属性时同exec(); 有g属性时,返回所有匹配字符串合成的数组

```javascript
var str="web2.0 .net2.0";
var pattern=/(\w+)(\d)\.(\d)/g;
var outCome_exec=pattern.exec(str); // ['web2.0', 'web', 2, 0]
var outCome_matc=str.match(pattern); // ['web2.0', 'net2.0']
What is outCome_exec[1] and outCome_matc[1]? // 'web', 'net2.0
```

## 四、/pattern/flags

flags

- i: 大小写不敏感
- g: global, find all matches
- m: multiline

pattern

1、基本

```shell
.   character except newline
a   character a
ab  string ab
a|b a or b
a*  0 or more a's
\   Escapes a special character
```

2、量词

```shell
?       0 or 1
+       1 or more
*       0 or more
{2}     Exactly 2
{2, 5}  Between 2 and 5
{2,}    2 or more
```

3、组

```shell
(...)   Capturing group
(?:...) Non-capturing group
\Y      back reference, Match the Y'th captured group
```

4、类

```shell
[a-d]  One character of: a, b, c, d
[^a-d] One character except: a, b, c, d
[\b]    Backspace character
\d  One digit
\D  One non-digit
\s  One whitespace
\S  One non-whitespace
\w  One word character, 包括字母和数字
\W  One non-word character
```

5、声明

```shell
^ Start of string
$ End of string
\b  Word boundary
\B  Non-word boundary
(?=...) Positive lookahead
(?!...) Negative lookahead
```

6、特殊字符

```shell
\n  Newline
\r  Carriage return
\t  Tab
\0  Null character
\YYY    Octal character YYY
\xYY    Hexadecimal character YY
\uYYYY  Hexadecimal character YYYY
\cY     Control character Y
```

7、replacement

```shell
$$  Inserts $
$&  Insert entire match
$`  Insert preceding string
$'  Insert following string
$Y  Insert Y'th captured group
```

## 五、参考文档

- javascript高级程序设计
- [领悟javascript中的exec与match方法](http://www.cnblogs.com/xiehuiqi220/archive/2008/12/01/1327487.html)
- [MDN: String.prototype.match()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match)
- [正则表达式规则](http://www.regexlab.com/zh/regref.htm)
- [正则可视化Regulex](https://jex.im/regulex/)
