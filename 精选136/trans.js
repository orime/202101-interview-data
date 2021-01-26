const fs = require('fs')

fs.readFile('./01.带目录和issue链接的题目.md', 'utf8', (err, data) => {
  let pureData = data.split('## 前端面试题及答案汇总')[1]
  console.log(pureData)
  let regExp = /[\n\t\r]*###\s(第\s\d\s题：.+?)\n[\s\S]+<br\/>/g
  pureData.replace(regExp, (content, $1) => {
    console.log($1)
  })
})