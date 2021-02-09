### 第 32 题：Virtual DOM 真的比操作原生 DOM 快吗？谈谈你的想法。

解析：[第 32 题](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/47)

解答：

1. Virtual DOM：render + diff显然比渲染HTML字符串要慢，但是和DOM操作比起来，js计算是极其便宜的
2. Virtual DOM真正的价值不只是性能，而是
   1. 为函数式的 UI 编程方式打开了大门；
   2. 可以渲染到 DOM 以外的 backend，比如 ReactNative。

```javascript

```

#### 总结：

- 框架给你的保证是，你在不需要手动优化的情况下，我依然可以给你提供过得去的性能。
- innerHTML: render html string O(template size) + 重新创建所有 DOM 元素 O(DOM size)
- Virtual DOM: render Virtual DOM + diff O(template size) + 必要的 DOM 更新 O(DOM change)
- Virtual DOM render + diff 显然比渲染 html 字符串要慢，但是！它依然是纯 js 层面的计算，比起后面的 DOM 操作来说，依然便宜了太多。可以看到，innerHTML 的总计算量不管是 js 计算还是 DOM 操作都是和整个界面的大小相关，但 Virtual DOM 的计算量里面，只有 js 计算和界面大小相关，DOM 操作是和数据的变动量相关的。前面说了，和 DOM 操作比起来，js 计算是极其便宜的。这才是为什么要有 Virtual DOM：它保证了 1）不管你的数据变化多少，每次重绘的性能都可以接受；2) 你依然可以用类似 innerHTML 的思路去写你的应用。

- 不要天真地以为 Virtual DOM 就是快，diff 不是免费的，batching 么 MVVM 也能做，而且最终 patch 的时候还不是要用原生 API。在我看来 Virtual DOM 真正的价值从来都不是性能，而是它 1) 为函数式的 UI 编程方式打开了大门；2) 可以渲染到 DOM 以外的 backend，比如 ReactNative。


#### 扩展：

react本身遵循的就是 UI = fn(state) 这样的一个公式，这里的fn 就是函数，通过state去触发fn（在这个过程是有很多复杂的计算操作，比如Virtual DOM对比），最后导致UI的更新

