### 第 40 题：在 Vue 中，子组件为何不可以修改父组件传递的 Prop

如果修改了，Vue 是如何监控到属性的修改并给出警告的。

解析：[第 40 题](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/60)

解答：

- 不可以修改：单项数据流原则，禁止修改方便追踪数据变化
- 监控修改：大概是用了Proxy()
```js
Proxy(obj, {
  set(tgt, p, value, receiver) {
    Relect.set(tgt, p, value, receiver)
  }
})
```

```javascript

```

#### 总结：



#### 扩展：



