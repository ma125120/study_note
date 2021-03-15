## showModalBottomSheet 底部弹窗，可用于分享界面或从底部弹出的新页面

## 1. 圆角效果，需两个属性配合使用
``` dart
shape: RoundedRectangleBorder(borderRadius: BorderRadius.only(topLeft: const Radius.circular(12), topRight: const Radius.circular(12),)),

clipBehavior: Clip.antiAlias,
```

## 2. 取消最大高度的限制

sheet 默认最大高度 9.0 / 16.0，如果想要全屏的效果，就需要设置 isScrollControlled 为 true
``` dart
isScrollControlled: true
```
```dart
/// 这个参数被用来指定是否为需要被拖拽的可滚动列表。
/// 如果你想让该 sheet 的子节点，比如 [ListView] 或者 [GridView] 被拖拽，你应该设置这个参数为 true

/// The `isScrollControlled` parameter specifies whether this is a route for
/// a bottom sheet that will utilize [DraggableScrollableSheet]. If you wish
/// to have a bottom sheet that has a scrollable child such as a [ListView] or
/// a [GridView] and have the bottom sheet be draggable, you should set this
/// parameter to true.
```

## 3. Clip 的 几个选项
```dart
[Clip] options:
  ///  * [hardEdge], 裁剪最快，但是保真度较低
  ///  * [antiAlias], 比 [hardEdge] 略慢，但是边缘更为平滑
  ///  * [antiAliasWithSaveLayer], 比 [antiAlias] 更慢, 应该很少使用。

[Clip] options:
  ///  * [hardEdge], which is the fastest clipping, but with lower fidelity.
  ///  * [antiAlias], which is a little slower than [hardEdge], but with smoothed edges.
  ///  * [antiAliasWithSaveLayer], which is much slower than [antiAlias], and should
  ///    rarely be used.
```