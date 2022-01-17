/**
 * 忽略重复事件函数 参考地址：https://lequ7.com/guan-yu-qian-duan-you-ya-jie-jue-an-niu-chong-fu-dian-ji-wen-ti.html
 * @param {执行函数} func
 * @param {是否自动解锁，true为手动，false为自动} manual
 */
const ignoreMulti = (func, manual = false) => {
  let lock = false;
  return function (...args) {
    if (lock) return;
    lock = true;
    let done = () => {
      lock = false;
    };
    if (manual) return func.call(this, ...args, done);
    let promise = func.call(this, ...args);
    Promise.resolve(promise).finally(() => done());
    return promise;
  };
};

// * 自动解锁
let clickButton = ignoreMulti(function () {
  // 返回promise
  return new Promise((res, rej) => {
    setTimeout(() => res("OK"), 1000);
  })
    .then(console.log)
    .catch(console.log);
});
// button.addEventListener("click", console.log);
// button.addEventListener("click", clickButton);

// * 手动解锁

let clickButtonManual = ignoreMulti(function (postParams, done) {
  new Promise((res, rej) => {
    setTimeout(() => res("手动解锁 resolve"), 1000);
  })
    .then(
      // 表单提交胜利
      () => done()
    )
    .catch((error) => {
      // 表单提交出错
      console.log(error, "error");
    })
    .finally(); // 申请完结解锁
}, true);
button.addEventListener("click", clickButtonManual);
