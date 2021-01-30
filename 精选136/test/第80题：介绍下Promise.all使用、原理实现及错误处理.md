### 第 80 题：介绍下 Promise.all 使用、原理实现及错误处理

解析：[第 80 题](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/130)

解答：



```javascript

```

#### 总结：

const p = Promise.all([p1, p2, p3]);
Promise.all方法接受一个数组作为参数，p1、p2、p3都是 Promise 实例，如果不是，就会先调用下面讲到的Promise.resolve方法，将参数转为 Promise 实例，再进一步处理。（Promise.all方法的参数可以不是数组，但必须具有 Iterator 接口，且返回的每个成员都是 Promise 实例。）

#### 扩展：



