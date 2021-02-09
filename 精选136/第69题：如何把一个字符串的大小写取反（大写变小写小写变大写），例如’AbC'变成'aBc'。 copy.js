function transStr(str){
  console.log(str)
  return [...str].map((s) => {
    console.log(s)
    return s.toUpperCase() === s ? s.toLowerCase() : s.toUpperCase()
  }).join('')
}
const strTest = 'AbC'
console.log(transStr(strTest))