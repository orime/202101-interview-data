### 第 14 题：情人节福利题，如何实现一个 new

公司：兑吧

解析：[第 14 题](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/12)

解答：

new 操作符作用一个构造器的时候，会先在构造函数内部创建一个空对象；

将this执行该对象，并设置该对象的`__proto__`指向构造函数的prototype；

构造函数执行，为该对象创建属性；

根据执行返回结果决定是否返回该对象；



```javascript
❌
function new(construct, ...args){
    const obj = Object.create(null)
    const res = contruct.call(obj, args)
    return res !== null && typeof res === 'object' ? res : obj
}
```

#### 总结：

先理清楚 new 关键字调用函数都的具体过程，那么写出来就很清楚了

1. 首先创建一个空的对象，空对象的__proto__属性指向构造函数的原型对象
2. 把上面创建的空对象赋值构造函数内部的this，用构造函数内部的方法修改空对象
3. 如果构造函数返回一个非基本类型的值，则返回这个值，否则上面创建的对象

```js
function _new(fn, ...arg) {
    var obj = Object.create(fn.prototype);
    const result = fn.apply(obj, ...arg);
    return Object.prototype.toString.call(result) == '[object Object]' ? result : obj;
}
```

#### 扩展：



```js
function __new__(_Contructor,...args) {
	let obj = new Object();
	obj.__proto__ = _Contructor.prototype;
	_Contructor.apply(obj,args);
	return obj;
}
```

*new*运算符都做了哪些操作呢？
1、创建了一个**新对象**（是Object类型的数据）
2、将this指向新对象
3、将创建的对象的原型指向构造函数的原型
4、返回一个对象（如果构造函数本身有返回值且是对象类型，就返回本身的返回值，如果没有才返回新对象）

下面就写一个实现new功能的函数：

```js
function mynew () {
     // 1、创建一个新对象
     const obj = Object.create({});    // 也可以写成 const obj = {}
     // 2、将this指向该对象
     let Fn = [].shift.call(arguments);    // 把构造函数分离出来
     let returnObj = Fn.apply(obj, arguments);     // 通过apply将this指向由Fn变为obj
     
     // 3、将新对象的原型指向构造函数的原型
     obj.__proto__ = Fn.prototype
     
    // 4、返回对象（如果构造函数有返回对象，那么就返回构造函数的对象，如果没有就返回新对象）
    return Object.prototype.toString.call(returnObj) == '[object Object]' ? returnObj : obj;
}
```