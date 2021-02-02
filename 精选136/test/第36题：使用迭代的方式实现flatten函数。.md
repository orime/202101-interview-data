### 第 36 题：使用迭代的方式实现 flatten 函数。

解析：[第 36 题](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/54)

解答：

```javascript
// * 迭代方法一
let arr = [1, 2, [3, 4, 5, [6, 7], 8], 9, 10, [11, [12, 13]]];

const flatten = function (arr) {
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
};

// * 迭代方法二

function flatten(arr) {
  let arrs = [...arr];
  let newArr = [];
  while (arrs.length) {
    let item = arrs.shift();
    if (Array.isArray(item)) {
      arrs.unshift(...item);
    } else {
      newArr.push(item);
    }
  }
  return newArr;
}

// * 递归实现
function flatten(arr) {
  let arrs = [];
  arr.map((item) => {
    if (Array.isArray(item)) {
      arrs.push(...flatten(item));
    } else {
      arrs.push(item);
    }
  });
  return arrs;
}
```

#### 总结：

- 快捷实现

![](https://cdn.jsdelivr.net/gh/Orime112/picbed/img/20210128143215.png)

#### 扩展：
