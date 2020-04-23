## process.cwd()与__dirname区别

* process.cwd()方法返回 Node.js 进程当前工作的目录
* __dirname,Node全局变量，标识被执行的js文件的目录

https://cloud.tencent.com/developer/article/1363471

npm i -g clinic
npm i -g autocannon

使用的时候，先开启服务进程：
```js
clinic doctor -- node server.js
```

然后我们可以用任何压测工具跑一次压测，比如使用同一个作者的 autocannon（当然你也可以使用 ab、curl 这样的工具来进行压测。）：
```js
autocannon http://localhost:3000
```

压测完毕后，我们 ctrl + c 关闭 clinic 开启的进程，就会自动生成报告。比如下面就是我们一个中间件服务的性能报告：

下面我们使用 clinic bubbleprof 来检测 I/O 问题：
```js

clinic bubbleprof -- node server.js
```


对于这样的应用，我们可以继续使用 clinic flame 来确定到底是哪里出现了密集计算：

```js
clinic flame -- node app.js
```
压测后，我们得到了火焰图（这里把空转次数减少到了100万次，让火焰图看起来不至于那么极端）：

## 高并发问题处理
https://zhuanlan.zhihu.com/p/45701773

https://www.jianshu.com/p/3cc4dd32a89a