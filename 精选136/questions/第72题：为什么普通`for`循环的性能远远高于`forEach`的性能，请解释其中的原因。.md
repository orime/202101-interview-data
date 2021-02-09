### 第 72 题： 为什么普通 `for` 循环的性能远远高于 `forEach` 的性能，请解释其中的原因。

![image-20190512225510941](https://ws2.sinaimg.cn/large/006tNc79gy1g2yxbg4ta8j31gh0u048h.jpg)



解析：[第 72 题](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/121)

解答：



```javascript
改为 node发现了不一样的结果

let arrs = new Array(100000);

console.time('for');
for (let i = 0; i < arrs.length; i++) {

};
console.timeEnd('for');

console.time('forEach');
	
arrs.forEach((arr) => {
 
});
console.timeEnd('forEach');

for: 2.263ms
forEach: 0.254ms
在10万这个级别下， forEach 的性能是 for的十倍

for: 2.263ms
forEach: 0.254ms
在100万这个量级下， forEach 的性能是和for的一致

for: 2.844ms
forEach: 2.652ms
在1000万级以上的量级上 ， forEach 的性能远远低于for的性能

for: 8.422ms
forEach: 30.328m
```

#### 总结：

- for 循环没有任何额外的函数调用栈和上下文；

- forEach函数签名实际上是

- array.forEach(function(currentValue, index, arr), thisValue)

- 它不是普通的 for 循环的语法糖，还有诸多参数和上下文需要在执行的时候考虑进来，这里可能拖慢性能；

#### 扩展：

- for循环是常见的循环语句forEach和map是在ES5出的，但是在性能上后者不如前者，在次数少的情况下forEach会比for要快，但是到达了十万次时forEach明显就跟不上了。在大数据量的情况下for循环的兼容性和多环境运行表现比较优秀，forEach的优点是在数据量小时占优势，语义话更简洁。循环时没有返回值。map和forEach差不多但是map循环有返回值

foreach效率比for低主要分2个角度说。
2个地方，一个是.net 1.1之前的对值类型的装箱，一个是每次调用GetEnumator方法的函数调用带来的时间消耗，单一次都不消耗时间，但经过大量循环放大后，时间消耗比较明显。
.net 1.1之后的版本，foreach对值类型已经不装箱，不慢了，因为有了yield关键字。
但函数调用带来的堆栈创建内存分配则不可避免。
绝对意义上，for比foreach快，但从.net 1.1之后，这个差距缩小到多一层函数调用而已，不是特别严格的地方，还是用foreach好一点。因为foreach不止可以访问一个数组或List这样循环时能确定长度的集合，也可以访问可迭代的类型，对于一些不需要最开始就确定长度的，这样甚至效率更高，因为不需要在循环开始之前就准备好要循环的数据，而是每次foreach循环获取下一个数据。
其实也不用记什么情况用，多写写程序，应该不难区分用途
借鉴大佬https://me.csdn.net/wuyazhe

