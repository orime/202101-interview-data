### 第 9 题：Async/Await 如何通过同步的方式实现异步

公司：头条、微医

解析：[第 9 题](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/156)

解答：



```javascript

```

#### 总结：

Async/Await就是一个**自执行**的generate函数。利用generate函数的特性把异步的代码写成“同步”的形式。

```js
var fetch = require('node-fetch');

function* gen(){  // 这里的*可以看成 async
  var url = 'https://api.github.com/users/github';
  var result = yield fetch(url);  // 这里的yield可以看成 await
  console.log(result.bio);
}
var g = gen();
var result = g.next();

result.value.then(function(data){
  return data.json();
}).then(function(data){
  g.next(data);
});
```

#### 扩展：

async await 用于把异步请求变为同步请求的方式,第一个请求的返回值作为后面一个请求的参数,其中每一个参数都是一个promise对象
例如：这种情况工作中会经常遇到

```js
(async () => {
    var a = await A();
    var b = await B(a);
    var c = await C(b);
    var d = await D(c);
})();
setTimeout 主要用户异步队列的形式，当然其中又分为宏观队列以及微观队列（Promise.then,process.nextTick等），比如隔1000ms执行一段逻辑代码（实际中不一定是1000ms后执行，需要考虑主任务的执行时间）

console.log(1);
setTimeout(() => {
    console.log(2)
}, 0)
setTimeout(() => {
    console.log(3)
}, 1000)
new Promise(resolve => {
    console.log(4)
    resolve()
}).then(() => {
    console.log(5)
})
```

