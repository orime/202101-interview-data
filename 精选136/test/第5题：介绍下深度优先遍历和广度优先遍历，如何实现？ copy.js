const dfsCopy = (obj, cur = {}) => {
    const res = cur
    let stack = [obj]
    for(let key in obj){
        const val = obj[key]
        if(typeof val === 'object'){
            dfsCopy(val, res[key])
        }else {
            res[key] = val
        }
    }
    return res
}

const obj = {
    a: 12,
    b: {c: '13'},
    d: '13',
    e: ['1', 3, '5']
}

console.log(dfsCopy(obj))