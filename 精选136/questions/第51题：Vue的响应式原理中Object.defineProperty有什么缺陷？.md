### 第 51 题：Vue 的响应式原理中 Object.defineProperty 有什么缺陷？

为什么在 Vue3.0 采用了 Proxy，抛弃了 Object.defineProperty？

解析：[第 51 题](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/90)

解答：

```javascript

```

#### 总结：

1. Object.defineProperty 无法监控到数组下标的变化，导致通过数组下标添加元素，不能实时响应；
2. Object.defineProperty 只能劫持对象的属性，从而需要对每个对象，每个属性进行遍历，如果，属性值是对象，还需要深度遍历。Proxy 可以劫持整个对象，并返回一个新的对象。
3. Proxy 不仅可以代理对象，还可以代理数组。还可以代理动态增加的属性。
   [参考资料](https://zhuanlan.zhihu.com/p/35080324)

#### 扩展：

Object.defineProperty 无法监控到数组下标的变化，导致直接通过数组的下标给数组设置值，不能实时响应。 为了解决这个问题，经过 vue 内部处理后可以使用以下几种方法来监听数组

push()
pop()
shift()
unshift()
splice()
sort()
reverse()
由于只针对了以上八种方法进行了 hack 处理,所以其他数组的属性也是检测不到的，还是具有一定的局限性。

Object.defineProperty 只能劫持对象的属性,因此我们需要对每个对象的每个属性进行遍历。Vue 2.x 里，是通过 递归 + 遍历 data 对象来实现对数据的监控的，如果属性值也是对象那么需要深度遍历,显然如果能劫持一个完整的对象是才是更好的选择。

而要取代它的 Proxy 有以下两个优点;

可以劫持整个对象，并返回一个新对象
有 13 种劫持操作

摒弃 Object.defineProperty，基于 Proxy 的观察者机制探索

##### Proxy 的代码演练

```js
let a = [1];

let newA = new Proxy(a, {
    get(target, p, receiver) {
        console.log('get', p);
        return Reflect.get(target, p, receiver);
    },
    set(target, p, value, receiver) {
        console.log('set', p);
        return Reflect.set(target, p, value, receiver);
    }
});

newA.push(1);
console.log('===');
newA[2] = 2;
newA.length;
console.log('===');
newA.length = 100;
console.log('===');
newA.shift();
// 输出

get push
get length
set 1
set length
===
set 2
get length
===
set length
===
get shift
get length
get 0
get 1
set 0
get 2
set 1
set length

```
