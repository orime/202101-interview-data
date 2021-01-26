const observerQueue = new Set()

const observe = (fn) => observerQueue.add(fn)

const observable = (obj) =>
  new Proxy(obj, {
    set(tgt, key, val, receiver) {
      const result = Reflect.set(tgt, key, val, receiver)
      observerQueue.forEach((v) => v())
      return result
    },
  })

const person = observable({ age: 25, name: "Mike" })
const print = () => console.log(`${person.name} is ${person.age} years old`)
observe(print)

person.name = "LiHua"
// Lihua is 25 years old
person.age = 45
// Lihua is 45 years old
