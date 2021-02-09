function mergeArr(arr1, arr2){
  const res = []
  let j = 0
  for(let i = 0; i < arr1.length; i++){
    const val1 = arr1[i]
    if(val1.startsWith(arr2[j])){
      res.push(val1)
    } else {
      res.push(arr2[j++])
      i--
    }
  }
  res.push(arr2[j])
  return res
}
const ar1 = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'];
const ar2 = ['A', 'B', 'C', 'D']
console.log(mergeArr(ar1, ar2))



