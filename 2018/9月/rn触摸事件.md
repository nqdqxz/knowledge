<!-- 2018/09/05 -->

# rn触摸事件

## 一、自带的直接处理事件的组件

`TouchableOpacity`, `TouchableHighlight`,  
`TouchableNativeFeedback`, `ToucnableWithoutFeedback`  

携带的回调方法：`onPress`, `onPressIn`, `onPressOut`, `onLongPress`

## 二、非事件响应者申请成为事件响应者

```javascript
interface getstureState = {
  stateID,
  moveX, moveY, // 移动时的坐标
  x0, y0, // 响应器坐标
  dx, dy, // 滑动的距离
  vx, vy, // 速度
  numberActiveTouches
}
// evt.nativeEvent
interface nativeEvent {
  changedTouches, identifier,
  locationX, locationY, // 触摸的坐标，相对与该元素
  pageX, pageY, // 触摸的坐标，相对于根元素
  target, // 事件拥有者的node
  timestamp,
  touches
}
const fn = (evt, gestureState) => {}
const fnTrue = (evt, gestureState) => true
```

1、是否愿意成为响应者

`onStartShouldSetPanResponder(fnTrue)`: 触摸开始时，返回true，表示愿意成为响应者  
`onStartShouldSetPanResponderCapture(fnTrue)`  
`onMoveShouldSetPanResponder(fnTrue)`: 触摸的过程中  
`onMoveShouldSetPanResponderCapture(fnTrue)`  

2、申请成功后

`onPanResponderGrant(fn)`: 申请成功，此时滑动的距离为0  
`onRanResponderMove(fn)`: 此时的数据最有用  
`onRanResponderRelease(fn)`

3、申请成功后，其他

`onPanResponderTerminate(fn)`: 另一个组件成为响应者，所以当前手势被取消  
`onPanResponderTerminationRequest(fn)`  
`onShouldBlockNativeResponder(fnTrue)`: 是否阻止原生组件成为js响应者，默认阻止, 返回true，只支持android  

## 三、react-native-swipe-up-down

[swipe-up-down](https://github.com/agiletechvn/react-native-swipe-up-down)
[draggable-view](https://github.com/yaraht17/react-native-draggable-view)
[modal-box](https://github.com/maxs15/react-native-modalbox)
[sliding-up-panel](https://github.com/octopitus/rn-sliding-up-panel)
