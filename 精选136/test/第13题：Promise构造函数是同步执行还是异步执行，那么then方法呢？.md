### 第 13 题：Promise 构造函数是同步执行还是异步执行，那么 then 方法呢？

公司：微医

解析：[第 13 题](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/19)

解答：

Promise是立即执行函数，所以Promise构造函数在被new的时候会同步执行

then方法是在同步函数中的resolve执行的时候才会执行，所以是异步执行

```javascript

```

#### 总结：



#### 扩展：



