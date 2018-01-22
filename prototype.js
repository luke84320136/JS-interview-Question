const food = {
  init: function(type) {
    this.type = type
  },
  eat: function() {
    console.log("你正在吃" + this.type)
  }
}

const rice = Object.create(food)
rice.init("飯")

const carrot = Object.create(food)
carrot.init("紅蘿波")

console.log("rice is food", food.isPrototypeOf(rice))
console.log("int is food", food.isPrototypeOf(1234556))
console.log("")
food.isPrototypeOf(carrot)
