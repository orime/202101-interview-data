### 第 58 题：箭头函数与普通函数（function）的区别是什么？构造函数（function）可以使用 new 生成实例，那么箭头函数可以吗？为什么？

解析：[第 58 题](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/101)

解答：

- 区别
  - this：箭头函数没有自身this，this指向上层作用域的this；普通函数的this执行调用时的主体
  - arguments：普通函数有arguments，是个类数组对象，保存了传入的参数；箭头函数没有arguments
  - 声明方式：箭头函数只能通过函数表达式声明，普通函数可以进行函数声明或函数表达式声明

```javascript

```

#### 总结：

引入箭头函数有两个方面的作用：更简短的函数，并且不绑定this。箭头函数与普通函数不同之处有：

- 箭头函数没有 this，它会从自己的作用域链的上一层继承 this（因此无法使用 apply / call / bind 进行绑定 this 值）；
- 不绑定 arguments，当在箭头函数中调用 aruguments 时同样会向作用域链中查询结果；
- 不绑定 super 和 new.target；
- 没有 prototype 属性，即指向 undefined；
- 无法使用 new 实例化对象，因为普通构造函数通过 new 实例化对象时 this 指向实例对象，而箭头函数没有 this 值，同时 箭头函数也没有 prototype。

#### 扩展：



