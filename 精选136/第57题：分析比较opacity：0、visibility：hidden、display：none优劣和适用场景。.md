### 第 57 题：分析比较 opacity: 0、visibility: hidden、display: none 优劣和适用场景。 

解析：[第 57 题](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/100)

解答：

- opacity: 0，只是设置了透明度为0，但是元素还在，
- visibility: hidden，设置了元素不可见，但元素也还在
- display: none，直接把元素从页面移除，频繁切换回引起回流，影响页面性能

```javascript

```

#### 总结：

display: none (不占空间，不能点击)（场景，显示出原来这里不存在的结构）
visibility: hidden（占据空间，不能点击）（场景：显示不会导致页面结构发生变动，不会撑开）
opacity: 0（占据空间，可以点击）（场景：可以跟transition搭配）


#### 扩展：

总结一下：
结构：
display:none: 会让元素完全从渲染树中消失，渲染的时候不占据任何空间, 不能点击，
visibility: hidden:不会让元素从渲染树消失，渲染元素继续占据空间，只是内容不可见，不能点击
opacity: 0: 不会让元素从渲染树消失，渲染元素继续占据空间，只是内容不可见，可以点击

继承：
display: none和opacity: 0：是非继承属性，子孙节点消失由于元素从渲染树消失造成，通过修改子孙节点属性无法显示。
visibility: hidden：是继承属性，子孙节点消失由于继承了hidden，通过设置visibility: visible;可以让子孙节点显式。

性能：
displaynone : 修改元素会造成文档回流,读屏器不会读取display: none元素内容，性能消耗较大
visibility:hidden: 修改元素只会造成本元素的重绘,性能消耗较少读屏器读取visibility: hidden元素内容
opacity: 0 ： 修改元素会造成重绘，性能消耗较少

联系：它们都能让元素不可见



