## 功能

```js
var object = { 'a': [{ 'b': { 'c': 3 } }] };
 
_.get(object, 'a[0].b.c');
// => 3
 
_.get(object, ['a', '0', 'b', 'c']);
// => 3
 
_.get(object, 'a.b.c', 'default');
// => 'default'
```
该函数的功能是避免取值过程中出现空值，导致程序报错，并提供默认值的功能。

其实这个功能在 ```es2020``` 和 [ts3.7](../../typescript/ts3.7.md) 中已经提供语言层面的支持了，而且更加简洁更加强大，就是 ```?.``` 和 ```?? ```

## 分析
* 第一个参数为对象
* 第二个参数为字符串或者数组，其中 字符串可以解析为数组，依靠 ```split``` 和 ```正则``` 就可以轻松将 字符串 转换为 数组 格式
* 第三个参数为 结果不存在时，返回的默认值
* 从左到右依次求值，后一个结果依赖前一个参数，所以 ```数组的reduce``` 在此处最为简洁

## 正则

匹配 ```res[0]``` 这样的字符串
分析：
  * 有效消息为 ```res``` 和 ```0```
  * 在 ```[]``` 前面的为第一个键值，中间的为 第二个键值
  * 在正则中，通常用 ```()``` 括起来的匹配元素会出现在 ```match``` 返回的结果中的第```index + 1```个元素中

```js
/(\w+)\[(\d+)\]/
```
使用 ```字符串的match``` 方法和正则，```res[0]```就被分解为 ```res``` 和 ```0```