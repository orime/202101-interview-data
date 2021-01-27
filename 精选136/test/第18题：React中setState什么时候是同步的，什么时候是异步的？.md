### 第 18 题：React 中 setState 什么时候是同步的，什么时候是异步的？

公司：微医

解析：[第 18 题](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/17)

解答：

合成事件，setTimeout回调中是同步的

生命周期钩子事件中是异步的

```javascript

```

#### 总结：

在React中，**如果是由React引发的事件处理（比如通过onClick引发的事件处理），调用setState不会同步更新this.state，除此之外的setState调用会同步执行this.state** 。所谓“除此之外”，指的是绕过React通过addEventListener直接添加的事件处理函数，还有通过setTimeout/setInterval产生的异步调用。

**原因：** 在React的setState函数实现中，会根据一个变量isBatchingUpdates判断是直接更新this.state还是放到队列中回头再说，而isBatchingUpdates默认是false，也就表示setState会同步更新this.state，但是，**有一个函数batchedUpdates，这个函数会把isBatchingUpdates修改为true，而当React在调用事件处理函数之前就会调用这个batchedUpdates，造成的后果，就是由React控制的事件处理过程setState不会同步更新this.state**。

**注意：** setState的“异步”并不是说内部由异步代码实现，其实本身执行的过程和代码都是同步的，只是合成事件和钩子函数的调用顺序在更新之前，导致在合成事件和钩子函数中没法立马拿到更新后的值，形式了所谓的“异步”，当然可以通过第二个参数 setState(partialState, callback) 中的callback拿到更新后的结果。

详细请看 [深入 setState 机制](https://github.com/LuNaHaiJiao/blog/issues/26)

#### 扩展：

### 先说结论

如果是通过 `DOM 事件`(例如：onClick) 的`事件处理函数`调用了 setState 函数，导致 React 进行更新（或者说“调度”scheduleWork），则此时`事件处理函数`中的 setState 的行为是异步的(也就是合并更新)。

上面的评论中说了很多 setState “异步”的情况。我这里补充一下“同步”的情况，下面的例子使用了 setTimeOut，组件最后显示结果是`33`

```js
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleAddCount = this.handleAddCount.bind(this);
  }
  componentDidMount() {
    setTimeout(this.handleAddCount, 1*1000);
  }
  handleAddCount() {
    this.setState({
      count: this.state.count + 11
    });
    this.setState({
      count: this.state.count + 22
    });
  }
  render() {
    return <div>{this.state.count}</div>;
  }
}
```

### 源码：

从源码的角度来说，setState 的行为是“异步”还是“同步”取决于 React 执行 setState 方法时的`执行上下文`①(ExecutionContext)。

如果 ExecutionContext 为 0，表示当前没有正在进行的其他任务，则 setState 是“同步”的。React 源码地址：https://github.com/facebook/react/blob/b53ea6ca05d2ccb9950b40b33f74dfee0421d872/packages/react-reconciler/src/ReactFiberWorkLoop.js#L411

①注意这里的`执行上下文`不是浏览器的，为了更好的控制渲染任务，避免长时间占用浏览器的主线程， React 实现了自己的`执行上下文`。

