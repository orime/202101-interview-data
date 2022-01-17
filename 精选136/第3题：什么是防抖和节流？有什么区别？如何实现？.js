const debounce = (fn, delay) => {
  let timerId = null;
  return function (...args) {
    if (timerId) clearTimeout(timerId); // * 这里每次进来都创建一个新的定时器，达到防抖效果
    timerId = setTimeout(() => {
      fn.call(this, ...args);
      clearTimeout(timerId); // 或者 timerId = null
    }, delay);
  };
};

const obj = {
  age: 20,
  func() {
    console.log(this.age, this.height, this);
  },
};

obj.func.height = 180;

let debounceFunc = debounce(obj.func);

debounceFunc.age = 23;

debounceFunc();
