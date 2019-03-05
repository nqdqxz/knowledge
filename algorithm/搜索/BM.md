<!-- 2019/03/03 -->

# BM算法

## 一、概念

1、目的: 字符串S内查找词W的出现位置。

2、算法特点: 不需要对被搜索字符串的字符进行逐一比较。搜索关键字越长，算法速度越快。

3、算法思路: 从W的尾部开始匹配，下次匹配的位置遵循 `坏字符规则`或`好后缀规则`，取规则计算后的比较值  
坏字符规则: 后移位数 = 坏字符位置 - 搜索词上次出现在W的位置(若无则为-1)  
好后缀规则: 后移位数 = 好后缀位置(lenW - 1) - 好后缀在W上次出现的位置  

4、复杂度

5、跟KMP比较: KMP实际中用的不多，BM用于文本编辑器的"查找"功能。BM比KMP效率高。

## 二、参考文档

[维基百科:BM](https://zh.wikipedia.org/wiki/Boyer-Moore%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%90%9C%E7%B4%A2%E7%AE%97%E6%B3%95)  
[阮一峰:BM](http://www.ruanyifeng.com/blog/2013/05/boyer-moore_string_search_algorithm.html)  
[csdn:KMP](https://blog.csdn.net/v_july_v/article/details/7041827)  
