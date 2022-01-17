### 第 84 题：请实现一个 add 函数，满足以下功能。

> ```js
> add(1); 			// 1
> add(1)(2);  	// 3
> add(1)(2)(3)；// 6
> add(1)(2, 3); // 6
> add(1, 2)(3); // 6
> add(1, 2, 3); // 6
> ```

解析：[第 84 题](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/134)

解答：

- 函数柯理化

```javascript
// * 柯理化函数
let concatArgs = []
function add(...args) {
  concatArgs = concatArgs.concat(args)
  return add
}
add.toString = function () {
  const res = concatArgs.reduce((pre, cur) => pre + cur, 0)
  concatArgs = []
  return res
}

console.log(add(1)(2)(3) + "") // 6
console.log(add(1)(2, 3) + "") // 6
console.log(add(1, 2)(3) + "") // 6
console.log(add(1, 2, 3) + "") // 6
console.log(add(1).toString()) // 1
console.log(add(1)(2).toString()) // 3
console.log(add(1)(2)(3).toString()) // 6
console.log(add(1)(2, 3).toString()) // 6
console.log(add(1, 2)(3).toString()) // 6
console.log(add(1, 2, 3).toString()) // 6
```

#### 总结：

- 参照题解自己实现的箭头函数写法

```js
const add = (...args) => {
  const _add = (...args1) => {
    return add(...args, ...args1)
  }
  _add.toString = () => {
    return args.reduce((pre, cur) => pre + cur)
  }
  return _add
}

console.log(add(1).toString()) // 1
console.log(add(1)(2).toString()) // 3
console.log(add(1)(2)(3).toString()) // 6
console.log(add(1)(2, 3).toString()) // 6
console.log(add(1, 2)(3).toString()) // 6
console.log(add(1, 2, 3).toString()) // 6
```

#### 扩展：

- 相同思路使用 apply 实现，无需外部保存参数列表

```js
function add() {
  let args = [].slice.call(arguments)
  let fn = function () {
    let fn_args = [].slice.call(arguments)
    return add.apply(null, args.concat(fn_args))
  }
  fn.toString = function () {
    return args.reduce((a, b) => a + b)
  }
  return fn
}
```
