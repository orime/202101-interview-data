### 第 74 题： 使用 JavaScript Proxy 实现简单的数据绑定

解析：[第 74 题](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/123)

解答：



```javascript
// * 事件池记录响应事件


```

#### 总结：
```js
<b id="count"></b>
<button onclick="increase()">+</button>
<button onclick="decrease()">-</button>
const data = { count: 0 };
const proxy = new Proxy(data, {
  get(target, property) {
    return target[property];
  },
  set(target, property, value) {
    target[property] = value;
    render(value);
  }
});

render(proxy.count);

function render(value) {
  document.getElementById('count').innerHTML = value;
}

function increase() {
  proxy.count += 1;
}

function decrease() {
  proxy.count -= 1; 
}
```

#### 扩展：



