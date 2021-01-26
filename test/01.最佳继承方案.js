function Parent(){
  this.name = 'parent'
  this.age = [1,2,3,4]
}

Parent.prototype.say = function(){
  console.log('parent say')
}

function Child(){
  Parent.call(this)
}

Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child

var child1 = new Child()
var child2 = new Child()

child1.age.push(4)

console.log(child1.age)
console.log(child2.age)