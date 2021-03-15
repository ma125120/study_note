This diagram illustrates how padding relates to viewPadding and viewInsets, shown here in its simplest configuration, as the difference between the two. In cases when the viewInsets exceed the viewPadding, like when a software keyboard is shown below, padding goes to zero rather than a negative value. Therefore, padding is calculated by taking max(0.0, viewPadding - viewInsets)

<img src="https://flutter.github.io/assets-for-api-docs/assets/widgets/media_query.png" alt="A diagram of padding, viewInsets, and viewPadding in correlation with each
other">

padding = viewPadding - viewInsets

没有键盘的时候， 
* ```window.viewInsets.bottom = 0```
* ```window.viewPadding.bottom = 40```
* ```window.padding.bottom = 40```

有键盘的时候， 
* ```window.viewInsets.bottom = 320```
* ```window.viewPadding.bottom = 40```
* ```window.padding.bottom = 0```

判断是否存在键盘：
``` dart
data.padding.bottom == 0.0 && data.viewInsets.bottom != 0.0
```

底部应该留出的间距:
```dart
final MediaQueryData data = MediaQuery.of(context);
EdgeInsets padding = data.padding;
// 底部的留白被键盘（或其他）所使用
if (data.padding.bottom == 0.0 && data.viewInsets.bottom != 0.0 && maintainBottomViewPadding)
  padding = padding.copyWith(bottom: data.viewPadding.bottom);
```

SafeArea 组件的 maintainBottomViewPadding 默认为 false,如果设置为 true，那么当键盘弹起时，键盘上方仍会有一定的留白