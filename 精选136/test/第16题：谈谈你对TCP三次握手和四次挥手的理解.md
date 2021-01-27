### 第 16 题：谈谈你对TCP三次握手和四次挥手的理解

解析：[第 16 题](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/15)

解答：



```javascript

```

#### 总结：

- [前端理解TCP](https://juejin.cn/post/6844903731704791054)

#### 扩展：

三次握手之所以是三次是保证client和server均让对方知道自己的接收和发送能力没问题而保证的最小次数。

第一次client => server 只能server判断出client具备发送能力
第二次 server => client client就可以判断出server具备发送和接受能力。此时client还需让server知道自己接收能力没问题于是就有了第三次
第三次 client => server 双方均保证了自己的接收和发送能力没有问题

其中，为了保证后续的握手是为了应答上一个握手，每次握手都会带一个标识 seq，后续的ACK都会对这个seq进行加一来进行确认



### 一、三次握手讲解

1. 客户端发送位码为syn＝1,随机产生seq number=1234567的数据包到服务器，服务器由SYN=1知道客户端要求建立联机（客户端：我要连接你）
2. 服务器收到请求后要确认联机信息，向A发送ack number=(客户端的seq+1),syn=1,ack=1,随机产生seq=7654321的包（服务器：好的，你来连吧）
3. 客户端收到后检查ack number是否正确，即第一次发送的seq number+1,以及位码ack是否为1，若正确，客户端会再发送ack number=(服务器的seq+1),ack=1，服务器收到后确认seq值与ack=1则连接建立成功。（客户端：好的，我来了）

### 二、为什么http建立连接需要三次握手，不是两次或四次?

**答：三次是最少的安全次数，两次不安全，四次浪费资源；**

### 三、TCP关闭连接过程

1. Client向Server发送FIN包，表示Client主动要关闭连接，然后进入FIN_WAIT_1状态，等待Server返回ACK包。此后Client不能再向Server发送数据，但能读取数据。
2. Server收到FIN包后向Client发送ACK包，然后进入CLOSE_WAIT状态，此后Server不能再读取数据，但可以继续向Client发送数据。
3. Client收到Server返回的ACK包后进入FIN_WAIT_2状态，等待Server发送FIN包。
4. Server完成数据的发送后，将FIN包发送给Client，然后进入LAST_ACK状态，等待Client返回ACK包，此后Server既不能读取数据，也不能发送数据。
5. Client收到FIN包后向Server发送ACK包，然后进入TIME_WAIT状态，接着等待足够长的时间（2MSL）以确保Server接收到ACK包，最后回到CLOSED状态，释放网络资源。
6. Server收到Client返回的ACK包后便回到CLOSED状态，释放网络资源。

### 四、为什么要四次挥手？

TCP是全双工信道，何为全双工就是客户端与服务端建立两条通道，通道1:客户端的输出连接服务端的输入；通道2:客户端的输入连接服务端的输出。两个通道可以同时工作：客户端向服务端发送信号的同时服务端也可以向客户端发送信号。所以关闭双通道的时候就是这样：

客户端：我要关闭输入通道了。
服务端：好的，你关闭吧，我这边也关闭这个通道。

服务端：我也要关闭输入通道了。
客户端：好的你关闭吧，我也把这个通道关闭。

