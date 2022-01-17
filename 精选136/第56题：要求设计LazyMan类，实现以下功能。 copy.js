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
      setTimeout(() => {
          console.log(`等待了${duration}秒`);
          that.next();
      }, duration*1000)
    }
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
    const that = this
    const task = () => {
      setTimeout(() => {
        console.log(`等待了${duration}秒...`)
        that.next()
      }, duration*1000)
    }
    this.taskList.unshift(task);
    return this;
  }
  next() {
    const fn = this.taskList.shift()
    fn && fn()
  }
}

function LazyMan(name) {
  return new LazyManClass(name);
}

LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(4).eat('junk food');
