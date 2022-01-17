### 第 47 题：双向绑定和 vuex 是否冲突

解析：[第 47 题](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/81)

解答：

```javascript

```

#### 总结：

在严格模式中使用 Vuex，当用户输入时，v-model 会试图直接修改属性值，但这个修改不是在 mutation 中修改的，所以会抛出一个错误。当需要在组件中使用 vuex 中的 state 时，有 2 种解决方案：
1、在 input 中绑定 value(vuex 中的 state)，然后监听 input 的 change 或者 input 事件，在事件回调中调用 mutation 修改 state 的值
2、使用带有 setter 的双向绑定计算属性。见以下例子（来自官方文档）：

```js
<input v-model="message">
computed: { message: { get () { return this.$store.state.obj.message }, set (value) { this.$store.commit('updateMessage', value) } } }
```

#### 扩展：

