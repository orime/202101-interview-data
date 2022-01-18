var count = 1;
var container = document.getElementById("container");

function getUserAction() {
  console.log("this：", this);
  container.innerHTML = count++;
}

function getUserAction() {
  console.log("this：", this);
  container.innerHTML = count++;
}

// * 打印 e 对象
function getUserActionE(e) {
  console.log("this：", this);
  console.log("e：", e);
  container.innerHTML = count++;
}

// * 时间戳节流
// ! 缺点，鼠标移入会立即执行一次
function throttle(func, wait) {
  let previous = new Date();
  return function (...args) {
    const now = +new Date();
    if (now - previous > wait) {
      func(...args);
      previous = now;
    }
  };
}

// * 定时器节流
// ! 缺点：结束之后还会执行一次
function throttle1(func, wait) {
  let timerId;
  return function (...args) {
    const context = this;

    if (timerId) return;
    timerId = setTimeout(() => {
      func.apply(context, args);
      timerId = null;
    }, wait);
  };
}

// * 负负得正，缺点结合成优点
// ! 初始进入执行一次；结束之后还要执行一次
function throttle2(func, wait) {
  var timeout, context, args, result;
  var previous = 0;

  var later = function () {
    previous = +new Date();
    timeout = null;
    func.apply(context, args);
  };

  var throttled = function () {
    var now = +new Date();
    //下次触发 func 剩余的时间
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    // 如果没有剩余的时间了或者你改了系统时间
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      func.apply(context, args);
    } else if (!timeout) {
      timeout = setTimeout(later, remaining);
    }
  };
  return throttled;
}

// * 终极版 -> 支持配置
// 第四版
function throttle3(func, wait, options) {
  var timeout, context, args, result;
  var previous = 0;
  if (!options) options = {};

  var later = function () {
    previous = options.leading === false ? 0 : new Date().getTime();
    timeout = null;
    func.apply(context, args);
    if (!timeout) context = args = null;
  };

  var throttled = function () {
    var now = new Date().getTime();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
  };
  return throttled;
}

// container.onmousemove = throttle(getUserActionE, 1000);
// container.onmousemove = throttle1(getUserActionE, 500);
container.onmousemove = throttle2(getUserActionE, 500);
