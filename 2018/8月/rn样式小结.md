<!-- 2018/08/15 -->

# rn样式小结

## 一、text

`color`

1、font四大家族  
`fontFamily`  
`fontSize`  
`fontStyle`: normal | italic  
`fontWeight`: normal | bold | 100~900

2、对齐  
`lineHeight`  
`textAlign`: auto | left | right | center | justify  
`textAlignVertical`: auto | top | bottom | center **android**

3、阴影  
`textShadowColor`  
`textShadowOffset`: {width, height}  
`textShadowRadius`  

4、ios专属  
`letterSpacing`  
`textDecorationLine`: none | underline | line-through | underline line-through  
`textDecorationColor`  
`textDecorationStyle`: solid | double | dotted | dashed  
`writingDirection`: auto | ltr | rtl

## 二、布局

1、相对和绝对定位

`position`: relative | absolute  
`left` `right` `top` `bottom`  

2、flex布局

`flex`  
`flexDirection`: row | column  
`flexWrap`: wrap | nowrap  
`justifyContent`: flex-start | center | flex-end | space-between | space-around  
`alignItems`: flex-start | center | flex-end | stretch  
`alignSelf`:  auto | flex-start | center | flex-end | stretch  
`flexWrap`: nowrap | wrap(换行)

3、内外边距

`margin` 只有一个值  
`marginHorizontal` 水平  
`marginVertical` 垂直  
`marginLeft` `marginRight` `marginTop` `marginBottom`  
同理 `padding`

4、边框

`borderStyle`: solid | dotted | dashed  
`borderWidth`  
`borderTopWidth` `borderRightWidth` `borderBottomWidth` `borderLeftWidth`  
`borderColor`  
`borderTopColor` `borderRightColor` `borderBottomColor` `borderLeftColor`  
`borderRadius`  
`borderTopLeftRadius` `borderTopRightRadius` `borderBottomRightRadius`  `borderBottomLeftRadius`  
`shadowColor`  
`shadowOffset`: {width, height}  
`shadowRadius`  
`shadowOpacity`: 0~1

## 三、其他

`backgroundColor`  
`opacity`: 0~1  
`overflow`: visible | hidden  
`resizeMode`: cover | contain | stretch  
`overlayColor` 图像有圆角时,角落的颜色 **android**  
`tintColor`: **ios**

## 四、心得

1、只有一种长度单位 `pt` ，定义时不需要带单位

2、默认显示方式是flex。默认定位方式是relative；定义为absolute定位时，不能通过zindex进行调整，所以组件的先后很重要。

3、不存在margin塌陷情况

4、包裹在view中的text表现为block，包裹在text中的text表现为inline

5、只有text中的text，才存在样式继承。但text中的text，无法设置lineHeight

## 五、需求

1、三角形

2、不同大小的text显示在同一高度

## 六、参考文档

[rn样式总结](https://shenbao.github.io/ishehui/html/RN%20%E5%9F%BA%E7%A1%80/React%20Native%20%E6%A0%B7%E5%BC%8F%E8%A1%A8%E6%8C%87%E5%8D%97.html)  
[rn样式个人心得](https://www.cnblogs.com/wonyun/p/5481134.html)  
[rn布局](https://segmentfault.com/a/1190000005976181)  
