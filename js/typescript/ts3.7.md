## 可选链 Optional Chaining
在3.7版本中支持```?.```操作符

```
let x = foo?.bar.baz();

// 相当于
let x = foo === null || foo === undefined ? undefined : foo.bar.baz();
```

因为 ```?.``` 相当于判断 ```null``` 和  ```undefined``` , 所以支持对象、数组和方法等。

* ```obj?.user?.name```
* ```user?.[0]?.name```
* ```user?.getName?.()```

也就是说你可以使用  ```?.``` 代替之前的大量判空操作
```js
// 之前
if (foo && foo.bar && foo.bar.baz) {
  // ...
}

// 现在
if (foo?.bar?.baz) {
  // ...
}
```

## 双问号操作符 Nullish Coalescing

```js
let x = foo ?? bar();

// 相当于
let x = foo !== null && foo !== undefined ? foo : bar();

```

当设置默认值的时候，```??``` 可以取代 ```||```。

```js
let volume = localStorage.volume || 0.5;
// 当 localStorage.volume 为 0， NaN 和 "" 时，|| 会采用判断为false,继而使用后面的0.5，所以在某些情况下就会造成BUG
```
采用 ``` ?? ``` 操作符后，只有 前面的值 等于 ```null``` 或者 ```undefined``` 时，才会使用后面的默认值