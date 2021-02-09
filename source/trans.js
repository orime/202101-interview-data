const fs = require('fs')

fs.readFile('./01.带目录和issue链接的题目.md', 'utf8', (err, data) => {
  let pureData = data.split('## 前端面试题及答案汇总')[1]
  // console.log(pureData.slice(0, 1000))

  const dat = `

### 第 1 题：写 React / Vue 项目时为什么要在列表组件中写 key，其作用是什么？

公司：滴滴、饿了么

解析：[第 1 题](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/1)

<br/>



### 第 2 题：['1', '2', '3'].map(parseInt) what & why ?

解析：[第 2 题](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/4)

<br/>



### 第 3 题：什么是防抖和节流？有什么区别？如何实现？

公司：挖财

解析：[第 3 题](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/5)

<br/>


`
  const regExp = /.*###\s(第\s\d\s题：.+?)\n[\s\S]+?<br\/>/g
  pureData.replace(/.*###\s(第\s\d+\s题：.+)\s+([\s\S]+?)<br\/>/g, (content, $1, $2) => {
    console.log('content', $1, { $2 })
    fs.rmdir('./test', () => {
      fs.mkdir('./test', () => {
        $1 = $1.replace(/[\s|\?|<|>]/g, '')
        $1 = $1.replace(/\//g, '或')
        $1 = $1.replace(/:/g, '：')
        fs.writeFile(`./test/${$1}.md`, `${content.replace(/<br\/>/, '')}解答：



\`\`\`javascript

\`\`\`

#### 总结：



#### 扩展：



`, (err) => {
          if (err) {
            console.log(err)
            return
          };
        })
      })
    })

  })
})