var count = 1;
var container = document.getElementById("container");

function getUserAction() {
  console.log("this：", this);
  container.innerHTML = count++;
}

// * 打印 e 对象
function getUserAction() {
  console.log("this：", this);
  container.innerHTML = count++;
}

function getUserActionE(e) {
  console.log("this：", this);
  console.log("e：", e);
  container.innerHTML = count++;
}

// * 基础防抖
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait); // ! this 指向了window
  };
}
// * 修复 this 指向 & 正确获取 event 对象
function debounce1(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    const context = this;
    timeout = setTimeout(() => {
      func.apply(context, args); // * this 指向 <div id="container">4</div>
    }, wait);
  };
}

// * 立即执行一次 -> 非常恶心的写法🤮
function debounce3(func, wait, immediate) {
  var timeout;

  return function () {
    var context = this;
    var args = arguments;

    if (timeout) clearTimeout(timeout);
    if (immediate) {
      // * 如果已经执行过，不再执行
      var callNow = !timeout;
      timeout = setTimeout(function () {
        timeout = null;
      }, wait);
      // if (callNow) func.apply(context, args);
      // * 这里指向正确，除非 arguments 传值否则不需要
      if (callNow) func(...args);
    } else {
      timeout = setTimeout(function () {
        func.apply(context, args);
      }, wait);
    }
  };
}

// * 完美方案
function debounce3_1(func, wait, immediate) {
  let timerId;
  return function (...args) {
    const context = this;

    if (immediate) {
      const canCall = !timerId;
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        func.apply(context, args);
      }, wait);
      if (canCall) {
        func(...args);
      }
    } else {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        func.apply(context, args);
      }, wait);
    }
  };
}

// * 带取消
function debounce4(func, wait, immediate) {
  let timerId;
  const debounce = function (...args) {
    const context = this;

    if (immediate) {
      const canCall = !timerId;
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        func.apply(context, args);
      }, wait);
      if (canCall) func(...args);
    } else {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        func.apply(context, args);
      }, wait);
    }
  };

  debounce.cancel = function () {
    // clearTimeout(timerId); // * 不好使，必须要用 timerId = null
    console.log(timerId, 'timerId')

    timerId = null;
  };

  return debounce;
}

// container.onmousemove = debounce(getUserAction, 100);
// container.onmousemove = debounce1(getUserAction, 100);
// container.onmousemove = debounce2(getUserActionE, 100); // * event 对象测试
// container.onmousemove = debounce3(getUserActionE, 100, true); // * immediate 对象测试
// container.onmousemove = debounce3_1(getUserActionE, 500, true); // * immediate 对象测试
// * 带取消测试

var setUseAction = debounce4(getUserAction, 500, true);

container.onmousemove = setUseAction;

document.getElementById("button").addEventListener("click", function () {
  setUseAction.cancel();
});
