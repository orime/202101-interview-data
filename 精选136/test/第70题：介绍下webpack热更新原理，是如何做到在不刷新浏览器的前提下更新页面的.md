### 第 70 题： 介绍下 webpack 热更新原理，是如何做到在不刷新浏览器的前提下更新页面的

解析：[第 70 题](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/118)

解答：

- 每个模块都有个名称，当文件内容改变时，通过建立好的socket通知浏览器；
- 然后页面端的webpack脚手架代码会重载这个模块文件。


```javascript
1. 修改代码，触发webpack打包
1. webpack将新模块通过websocket推送到浏览器
1. 浏览器使用新模块替换旧模块
```

#### 总结：

1. 当修改了一个或多个文件；
2. 文件系统接收更改并通知webpack；
3. webpack重新编译构建一个或多个模块，并通知HMR服务器进行更新；
4. HMR Server 使用webSocket通知HMR runtime 需要更新，HMR运行时通过HTTP请求更新jsonp；
5. HMR运行时替换更新中的模块，如果确定这些模块无法更新，则触发整个页面刷新。

#### 扩展：

关于webpack的热更新原理，面试官比较想听到的是工作流程和关键点，非“流水账”式的源码分析。我认为可以这样的介绍：

首先，介绍webpack-dev-server:
webpack-dev-server 主要包含了三个部分：
1. webpack: 负责编译代码
2. webpack-dev-middleware: 主要负责构建内存文件系统，把webpack的 OutputFileSystem 替换成 InMemoryFileSystem。同时作为Express的中间件拦截请求，从内存文件系统中把结 果拿出来。
3. express：负责搭建请求路由服务。

其次，介绍工作流程:
1. 启动dev-server，webpack开始构建，在编译期间会向 entry 文件注入热更新代码；
2. Client 首次打开后，Server 和 Client 基于Socket建立通讯渠道；
3. 修改文件，Server 端监听文件发送变动，webpack开始编译，直到编译完成会触发"Done"事件；
4. Server通过socket 发送消息告知 Client；
5. Client根据Server的消息（hash值和state状态），通过ajax请求获取 Server 的manifest描述文件；
6. Client对比当前 modules tree ，再次发请求到 Server 端获取新的JS模块；
7. Client获取到新的JS模块后，会更新 modules tree并替换掉现有的模块；
8. 最后调用 module.hot.accept() 完成热更新；

