### 第 78 题：Vue 的父组件和子组件生命周期钩子执行顺序是什么

解析：[第 78 题](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/128)

解答：



```javascript

```

#### 总结：

1. 父组件： beforeCreate -> created -> beforeMount
1. 子组件： -> beforeCreate -> created -> beforeMount -> mounted
1. 父组件： -> mounted
1. 总结：从外到内，再从内到外

#### 扩展：



