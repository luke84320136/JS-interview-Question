// curry
function tripleAdd(num1) {
  return function(num2) {
    return function(num3) {
      return num1 + num2 + num3
    }
  }
}
console.log(tripleAdd(10)(20)(30))

function tripleAdd1(num1, num2, num3) {
  return num1 + num2 + num3
}
console.log(tripleAdd1(10, 20, 30))

// EX1
let tAdd = (num1, num2, num3) => num1 + num2 + num3
console.log(tAdd(1, 2, 3))

// EX2
let tAdd2 = num1 => num2 => num3 => num1 + num2 + num3
console.log(tAdd2(1)(2)(3))

// EX3
let tAdd3 = num1 => num2 => num3 => num1 + num2 + num3
let number1 = tAdd3(1)
let number2 = number1(2)
console.log(number2(3))