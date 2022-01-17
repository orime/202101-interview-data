### 第 52 题：怎么让一个 div 水平垂直居中

解析：[第 52 题](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/92)

解答：

1. 设置绝对定位

```css
div.parent {
  position: relative;
}
div.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

2. 外层容器设置 display: flex

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

3. grid 布局

```css
div.parent {
  display: grid;
}
div.child {
  justify-self: center;
  align-self: center;
}
```

4. 冷门操作

```css
div.parent {
  display: flex;
}
div.child {
  margin: auto;
}
```

5. table 布局

```css
div.parent {
  display: table;
}
div.child {
  display: table-cell
  vertical-align: middle;
  text-align: center;
}
```

6. table-cell

```css
.parent {
  display: table-cell;
  height: 200px;
  width: 200px;
  background-color: orange;
  text-align: center;
  vertical-align: middle;
}
.child {
  display: inline-block;
  width: 100px;
  height: 100px;
  background-color: blue;
}
```

7. position：absolute定位撑开

```css
    <style>
      #box {
        width: 100px;
        height: 100px;
        background-color: brown;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
      }
    </style>
  </head>
  <body>
    <div id="box"></div>
  </body>
```
#### 总结：

#### 扩展：
