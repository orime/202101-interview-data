### 第 71 题： 实现一个字符串匹配算法，从长度为 n 的字符串 S 中，查找是否存在字符串 T，T 的长度是 m，若存在返回所在位置。

解析：[第 71 题](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/119)

解答：



```javascript
function findStr(S, T){
  return S.includes(T) ? S.indexOf(T) : -1
}
const S1 = 'abcdefg', T1 = 'cde', T2 = 'fgh'
console.log(findStr(S1, T1)) // 2
console.log(findStr(S1, T2)) // -1
```

#### 总结：



#### 扩展：



