### 第 56 题：要求设计 LazyMan 类，实现以下功能。

```js
LazyMan("Tony");
// Hi I am Tony

LazyMan("Tony").sleep(10).eat("lunch");
// Hi I am Tony
// 等待了10秒...
// I am eating lunch

LazyMan("Tony").eat("lunch").sleep(10).eat("dinner");
// Hi I am Tony
// I am eating lunch
// 等待了10秒...
// I am eating diner

LazyMan("Tony")
  .eat("lunch")
  .eat("dinner")
  .sleepFirst(5)
  .sleep(10)
  .eat("junk food");
// Hi I am Tony
// 等待了5秒...
// I am eating lunch
// I am eating dinner
// 等待了10秒...
// I am eating junk food
```

解析：[第 56 题](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/98)

解答：

```javascript
class LazyManClass {
  constructor(name) {
    this.name = name;
    this.taskList = [];
    console.log(`Hi I am ${this.name}`);
    setTimeout(() => {
      this.next();
    }, 0);
  }
  sleep(duration) {
    const that = this;
    const task = () => {
      console.log(`等待了${duration}秒`);
      that.next();
    };
    this.taskList.push(task);
    return this;
  }
  eat(meat) {
    const that = this;
    // * 这里应该是个任务，在sleep对应时间之后执行
    const task = () => {
      console.log(`I am eating ${meat}`);
      that.next();
    };
    this.taskList.push(task);
    return this;
  }
  sleepFirst(duration) {
    const that = this;
    const task = () => {
      console.log(`等待了${duration}秒`);
      that.next();
    };
    this.taskList.unshift(task);
    return this;
  }
  next() {
    const fn = this.taskList.shift();
    fn && fn();
  }
}

function LazyMan(name) {
  return new LazyManClass(name);
}

LazyMan("Tony")
  .eat("lunch")
  .eat("dinner")
  .sleepFirst(5)
  .sleep(4)
  .eat("junk food");
```

#### 总结：

#### 扩展：
