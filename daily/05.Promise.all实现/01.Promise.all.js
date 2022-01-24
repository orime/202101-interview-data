Promise.myAll = function (promises) {
  const len = promises.length;
  function check(list, resolve) {
    if (list.length === len) {
      resolve(list);
    }
  }

  const result = [];

  return new Promise((resolve, reject) => {
    for (let i = 0; i < len; i++) {
      promises[i]
        .then((res) => {
          result.push(res);
          check(result, resolve);
        })
        .catch((reason) => {
          reject(reason);
        });
    }
  });
};

const promise1 = new Promise((res, rej) => {
  setTimeout(() => {
    res("1");
  }, 100);
});

const promise2 = new Promise((res, rej) => {
  setTimeout(() => {
    res("2");
  }, 200);
});

const promise3 = new Promise((res, rej) => {
  setTimeout(() => {
    res("3");
  }, 300);
});

Promise.myAll([promise1, promise2, promise3])
  .then((res) => {
    console.log(res);
  })
  .catch((reason) => {
    console.log(reason);
  });
