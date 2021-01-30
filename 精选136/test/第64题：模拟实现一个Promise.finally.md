### 第 64 题：模拟实现一个 Promise.finally

解析：[第 64 题](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/109)

解答：



```javascript
Promise.prototype.finally = function (callback) {
  let P = this.constructor;
  return this.then(
    value  => P.resolve(callback()).then(() => value),
    reason => P.resolve(callback()).then(() => { throw reason })
  );
};
```

#### 总结：



#### 扩展：



