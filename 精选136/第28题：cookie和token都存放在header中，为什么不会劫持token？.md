### 第 28 题：cookie 和 token 都存放在 header 中，为什么不会劫持 token？

解析：[第 28 题](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/31)

解答：



```javascript

```

#### 总结：

看了大家的回答，又去查了一下，写一下自己的理解，如果哪里不对，还请大家指正~ 谢谢~

cookie
cookie可以存一些用户信息。因为 HTTP 是无状态的，它不知道你有没有登陆过。故可以通过cookie里的信息解决无状态的问题。

而浏览器，会自动带上请求同域的cookie。（AJAX 不会自动携带cookie）

token
后端把用户信息和其他内容放进去，通过 jwt 生成 token，返回给前端。
浏览器是不会自动携带 token。

CSRF 跨站点请求伪造
通过浏览器会自动携带同域cookie的特点。cookie的传递流程是用户在访问站点时，服务器端生成cookie，发送给浏览器端储存，当下次再访问时浏览器会将该网站的cookie发回给服务器端

如果用户登陆了A网站，拿到了cookie，又点击了恶意的网站B。
B收到请求以后，返回一段攻击代码，并且发出一个请求给网站A。
浏览器会在用户不知情的情况下，根据B的请求，带着cookie访问A。
由于HTTP是无状态的，A网站不知道这个请求其实是恶意网站B发出的，就会根据cookie来处理请求，从而执行了攻击代码。

而浏览器不会自动携带 token，所以不会劫持 token。

XSS
跨站脚本工攻击是指通过存在安全漏洞的Web网站注册用户的浏览器内运行非法的HTML标签或者JavaScript进行的一种攻击。

就是说，cookie和token都可能被拿到，所以都废了。

#### 扩展：

cookie是自动在请求中被携带的，而token是可以手动拼接上去的，B网站发起对A网站的强求但是只是请求而没有这个手动拼接token的过程，所以拿不到token


