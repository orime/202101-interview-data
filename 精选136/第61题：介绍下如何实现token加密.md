### 第 61 题：介绍下如何实现 token 加密

解析：[第 61 题](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/106)

解答：



```javascript

```

#### 总结：

jwt举例

- 需要一个secret（随机数）
- 后端利用secret和加密算法(如：HMAC-SHA256)对payload(如账号密码)生成一个字符串(token)，返回前端
- 前端每次request在header中带上token
- 后端用同样的算法解密

#### 扩展：



