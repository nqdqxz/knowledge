<!-- 2018/09/08 -->

# rn动画小结

## 一、rn动画步骤

1、使用animated组件，包括: `Animated.View`, `Animated.Text`, `Animated.Image`, `Animated.ScrollView`  
2、用`Animated.Value()`在state里设置初始值  
3、初始值绑定到animated组件上(style)  
4、通过`Animated.timing()`设置动画参数  
5、调用`start`启动动画

## 二、数值处理

1、初始值

```js
constructor() {
  this.state = {
    value: new Animated.Value(0)
  }
}
```

2、插值函数

动态值转化为不同种类的数值

单位值: `['0deg', '360deg']`等

```js
<Animated.View
  style={{
    opacity: this.state.value.interpolate({
      inputRange: [0, 1],
      outputRange: [0.5, 0.7]
    })
  }}
/>
```

3、事件数值绑定到动态值

`Animated.event(argMapping: any[], config?: object)`

通过结构化的映射语法，将手势或其他事件绑定到动态值

```js
// gestureState.dx绑定到this.state.value
onPanResponderMove = Animated.event(
  [
    null, // 忽略原生事件event方法
    // 将dx的值映射到this.state.value
    // 此过程是通过调用Animated.Value.prototype.setValue方法实现的
    {dx: this.state.value}
  ],
  // config对象，包括listener异步回调，useNativeDriver
  {
    listener: (e, gestureState) => {}, // 原来的监听函数
    useNativeDriver: false // 默认为false
  }
)

// e.nativeEvent.contentOffset.x 绑定到 this._scrollX
onScroll = Animated.event(
  [{
    nativeEvent: {
      contentOffset: {
        x: this._scrollX
      }
    }
  }]
)
```

## 三、动画类型

1、timing

从时间范围映射到渐变的值

```js
componentDidMount() {
  const temp = Animated.timing(
    this.state.value,
    {
      toValue: 1,
      duration: 500, // 动画时长，默认为500ms
      delay: 0, // 动画延迟执行
      easing: Easing.inOut(Easing.ease), // 曲线的渐变函数
      isInteraction: true, // 动画执行完，再考虑其他的，默认为true？
      useNativeDriver: false // 启动原生驱动, 默认不启动
    }
  )
  // 启动动画
  temp.start({finished: boolean} => {
    // 动画结束后会调用此函数
    // 动画正常结束，则finished值为true，若被stop停止，则finished: false
  })
}
```

2、spring

基础的单次弹跳物理模型

```js
componentDidMount() {
  Animated.spring(
    this.state.value,
    {
      toValue: 1,
      friction: 7, // 摩擦力
      tension: 40 // 张力
    }
  )
}
```

3、decay

以初始速度开始并逐渐减慢停止

```js
componentDidMount() {
  Animated.decay(
    this.state.value,
    {
      toValue: 1,
      velocity: {x, y}, // 初始速度，必填
      deceleration: 0.997 // 速度衰减比例
    }
  )
}
```

4、动画流程控制

通过`Animated.parallel([temp, temp1])`，接受动画类型的数组，来组合动画效果，最后通过`start()`开启动画

组合动画类型: `parallel`同时执行，`sequence`顺序执行，`stagger`错峰执行，相当于插入了delay的parallel

配合`Animated.delay(400)`生成延迟时间

```js
const tempAll = Animated.stagger(
  200, // 每200ms顺序执行数组里的动画
  []
)
tempAll.start()
```

## 四、需求

1、动画循环

利用start的回调函数，实现动画循环

```js
startAnimation() {
    this.state.value.setValue(0);
    Animated.timing(this.state.value, {
        toValue: 1,
        duration: 800,
        easing: Easing.linear,
        isInteraction: false
    }).start(() => this.startAnimation());
}

<Animated.Image
  style={{
    transform: [{
      rotate: this.state.value.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
      })
    }]
  }}
/>
```

## 五、心得

1、依赖相同动画值的驱动必须使用同一种驱动方式。

## 六、参考文档

[rn官网--动画](https://reactnative.cn/docs/animations/)  
[腾讯全端团队--rn动画详解](http://www.alloyteam.com/2016/01/reactnative-animated/)  
