### 第 44 题：介绍 HTTPS 握手过程

解析：[第 44 题](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/70)

解答：

clientHello
SeverHello
客户端回应
服务器的最后回应


```javascript

```

#### 总结：



#### 扩展：


客户端使用https的url访问web服务器,要求与服务器建立ssl连接
web服务器收到客户端请求后, 会将网站的证书(包含公钥)传送一份给客户端
客户端收到网站证书后会检查证书的颁发机构以及过期时间, 如果没有问题就随机产生一个秘钥
客户端利用公钥将会话秘钥加密, 并传送给服务端, 服务端利用自己的私钥解密出会话秘钥
之后服务器与客户端使用秘钥加密传输
