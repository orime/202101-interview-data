### 第 79 题：input 搜索如何防抖，如何处理中文输入

解析：[第 79 题](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/129)

解答：

- 加防抖函数呗
- 

```javascript

```

#### 总结：

防抖就不说了，主要是这里提到的中文输入问题，其实看过elementui框架源码的童鞋都应该知道，elementui是通过compositionstart & compositionend做的中文输入处理：
相关代码：
```html
<input
  ref="input"
  @compositionstart="handleComposition"
  @compositionupdate="handleComposition"
  @compositionend="handleComposition"
>
```
这3个方法是原生的方法，这里简单介绍下，官方定义如下compositionstart 事件触发于一段文字的输入之前（类似于 keydown 事件，但是该事件仅在若干可见字符的输入之前，而这些可见字符的输入可能需要一连串的键盘操作、语音识别或者点击输入法的备选词）
简单来说就是切换中文输入法时在打拼音时(此时input内还没有填入真正的内容)，会首先触发compositionstart，然后每打一个拼音字母，触发compositionupdate，最后将输入好的中文填入input中时触发compositionend。触发compositionstart时，文本框会填入 “虚拟文本”（待确认文本），同时触发input事件；在触发compositionend时，就是填入实际内容后（已确认文本）,所以这里如果不想触发input事件的话就得设置一个bool变量来控制。


#### 扩展：



