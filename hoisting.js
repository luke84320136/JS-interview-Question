// var color = 'blue'

// How it works

console.log(color)
var color = 'blue'
console.log(color)

//hoisting function expression EX
// console.log(getFun(2, 5)) //undefined
var getFun = function(num1, num2) {
  return num1 * num2
}
console.log(getFun(2, 5))

//hoisting function declaration EX
console.log(getMulti(2, 3))
function getMulti(num1, num2) {
  return num1 * num2
}

//hoisting block scoped EX
function getTotal() {
  console.log(multiplier)
  // console.log(total)
  let total = 0
  for (var i = 0; i < 10; i++) {
    let valueToAdd = i
    var multiplier = 2
    total += valueToAdd * multiplier
  }
  return total
}
getTotal()
