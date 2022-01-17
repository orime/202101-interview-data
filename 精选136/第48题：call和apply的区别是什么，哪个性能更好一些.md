### 第 48 题：call 和 apply 的区别是什么，哪个性能更好一些

解析：[第 48 题](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/84)

解答：

- call第一个参数是this绑定的对象，第二个参数之后是正常参数
- apply第一个参数是this绑定的对象，第二个参数是一个数组，是函数执行的参数

```javascript

```

#### 总结：

1. Function.prototype.apply和Function.prototype.call 的作用是一样的，区别在于传入参数的不同；
2. 第一个参数都是，指定函数体内this的指向；
3. 第二个参数开始不同，apply是传入带下标的集合，数组或者类数组，apply把它传给函数作为参数，call从第二个开始传入的参数是不固定的，都会传给函数作为参数。
4. call比apply的性能要好，平常可以多用call, call传入参数的格式正是内部所需要的格式，参考[call和apply的性能对比](https://github.com/noneven/__/issues/6)

#### 扩展：

尤其是es6 引入了 Spread operator (延展操作符) 后，即使参数是数组，可以使用 call

let params = [1,2,3,4]
xx.call(obj, ...params)

