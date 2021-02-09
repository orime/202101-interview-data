### 第 62 题：redux 为什么要把 reducer 设计成纯函数

解析：[第 62 题](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/107)

解答：

可以把redux改一改，不要action、reducer，一样能让你的react响应redux的状态的变化。但是没有reducer的redux就失去了‘状态管理’的功能了，你看不到状态的变跟流，弄不了所谓的‘时间回溯’。为什么框架让你整纯函数，就是要你保证状态的变跟的确定性。异步是没发保证的，先后顺序、值都没法百分白保证，不确定的东西就影响了这个框架所谓的‘基石’；明确的状态变更流、引以为傲的设计初衷，你不写成纯函数可以吗？完全ojbk的，但是这不是好的解决思路。你可以reducer和effect分开，如果你要个参考，dva？或者更直接点，vuex的模式是我个人认为最好的解决方案，effect和reducer在书写结构层面就分离，清晰明了

```javascript

```

#### 总结：

redux三大原则

- 单一数据流
  - 整个应用state都被储存在一个store里面 构成一个Object tree
- State是只读的
  - 唯一改变state的方法就是触发action, action是一个用于描述已发生事件的普通对象
- 使用纯函数来执行修改
  - 为了描述action如何改变state tree， 你需要编写reducers
把reducer设计成纯函数，可以实现时间旅行，记录/回放或者热加载

#### 扩展：

首先命题应当改一下，中文有歧义，可能改为 “redux中的reducer为什么必须（最好）是纯函数“，我想表达的意思是，redux没有强制你reducer是个纯函数，事实上，没有人能通过框架限制判断一个函数是否是纯函数，所以题目中的'设计成'这个短语貌似在说redux已经把reducer强制规定是纯函数了。这回让你怀疑你对redux的认知。

正文如下
然后说一下为什么reducer最好是纯函数，首先你得看看文档怎么说reducer的作用的，‘接收旧的 state 和 action，返回新的 state’，您可得瞧好咯，他就是起一个对数据做简单处理后返回state的作用，为什么只起这个作用，这时用设计这个词回答这个问题才恰当，因为redux把reducer设计成只负责这个作用。很白痴的问答对吧，所以题目的答案也就简单了，reducer的职责不允许有副作用，副作用简单来说就是不确定性，如果reducer有副作用，那么返回的state就不确定，举个例子，你的reducer就做了一个value = value + 1这个逻辑，然后返回state为{value}，ok，这个过程太jr纯了，然后你可能觉得要加个请求来取得value后再加1，那么你的逻辑就是value = getValue() + 1, getValue是个请求函数，返回一个值，这种情况，退一万步讲，如果你的网络请求这次出错，那么getValue就返回的不是一个数值，value就不确定了，所以return的state你也不确定了，前端UI拿到的数据也不确定了，所以就是这个环节引入了副作用，他娘的redux设计好的规范就被你破坏了，redux就没卵用了。到此为止这个问题回答完了，我没有说什么上面几个jr说的教科书的理论，甚至还加了些脏话。请原谅，这只是戏剧需要。

最后我回答下如何解决这个副作用，实际上也很白痴的问题，这里的请求可以放在reducer之前，你先请求，该做出错处理的就做出错处理，等拿到实际数据后在发送action来调用reducer。这样通过前移副作用的方式，使reducer变得纯洁。

