### 第 42 题：实现一个 sleep 函数

比如 sleep(1000) 意味着等待 1000 毫秒，可从 Promise、Generator、Async/Await 等角度实现

解析：[第 42 题](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/63)

解答：

- 普通执行函数实现

```javascript
function sleep(delay) {
  const now = new Date();
  while (new Date() - now <= 1000) {}
}

```

- Promise 实现，执行函数放到.then 中

```js
function sleep1(delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res();
    }, delay);
  });
}
// 或者可以简写

const sleep = (delay) => {
  return new Promise((res) => setTimeout(res, delay))
}
```

- Generator 实现，使用生成器

```js
function* sleepGenerator(time) {
  yield new Promise(function(resolve,reject){
    setTimeout(resolve,time);
  })
}
sleepGenerator(1000).next().value.then(()=>{console.log(1)})

```

- Async/Await 实现

```js
const sleep = (time) => {
  return new Promise(resolve => setTimeout(resolve, time))
}

async function sleepAsync() {
  console.log('fuck the code')
  await sleep(1000)
  console.log('fuck the code again')
}

sleepAsync()

```

#### 总结：

#### 扩展：
