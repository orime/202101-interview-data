### 第 69 题： 如何把一个字符串的大小写取反（大写变小写小写变大写），例如 ’AbC' 变成 'aBc' 。

解析：[第 69 题](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/116)

解答：

- 太简单了

```javascript
function transStr(str){
  console.log(str)
  [...str].map((s) => {
    return s.toUppercase() === s ? s.toLowerCase() : s.toUpperCase()
  })
}
const strTest = 'AbC'
console.log(transStr(strTest))
```

#### 总结：



#### 扩展：



