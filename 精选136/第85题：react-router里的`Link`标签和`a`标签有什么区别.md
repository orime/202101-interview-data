### 第 85 题：react-router 里的 `<Link>` 标签和 `<a>` 标签有什么区别

> 如何禁掉 `<a>` 标签默认事件，禁掉之后如何实现跳转。

解析：[第 85 题](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/135)

解答：

- link 标签表示的是路由的切换
- a 标签表示的是页面的跳转

- 禁掉跳转`<a href="javascript:void(0)"></a>`
  - 禁掉之后手动绑定 js 事件，借助`window.location`进行跳转

```javascript

```

#### 总结：

- 从最终渲染的 DOM 来看，这两者都是链接，都是 <a> 标签，区别是：

> <Link> 是 react-router 里实现路由跳转的链接，一般配合 <Route> 使用，react-router 接> 管了其默认的链接跳转行为，区别于传统的页面跳转，<Link> 的“跳转”行为只会触发相匹配的 > <Route> 对应的页面内容更新，而不会刷新整个页面。
> 而 <a> 标签就是普通的超链接了，用于从当前页面跳转到 href 指向的另一个页面（非锚点情况）> 。

- 先看 Link 点击事件 handleClick 部分源码

```js
if (_this.props.onClick) _this.props.onClick(event)

if (
  !event.defaultPrevented && // onClick prevented default
  event.button === 0 && // ignore everything but left clicks
  !_this.props.target && // let browser handle "target=_blank" etc.
  !isModifiedEvent(event) // ignore clicks with modifier keys
) {
  event.preventDefault()

  var history = _this.context.router.history
  var _this$props = _this.props,
    replace = _this$props.replace,
    to = _this$props.to

  if (replace) {
    history.replace(to)
  } else {
    history.push(to)
  }
}
```

- Link 做了 3 件事情：

1. 有 onclick 那就执行 onclick
2. click 的时候阻止 a 标签默认事件（这样子点击<a href="/abc">123</a>就不会跳转和刷新页面）
3. 再取得跳转 href（即是 to），用 history（前端路由两种方式之一，history & hash）跳转，此时只是链接变了，并没有刷新页面

#### 扩展：
