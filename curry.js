function getProduct(num1, num2) {
  return num1 * num2
}
getProduct(10, 20)

function getProduct(num1) {
  return function(num2) {
    return num1 * num2
  }
}
console.log(getProduct(10)(20))

// EX3
let getTravelTime = (distance, speed) => distance / speed

console.log(getTravelTime(600, 50))
console.log(getTravelTime(400, 60))


// EX4
let getTravelTime = distance => speed => distance / speed
const travelTimeTpeTay = getTravelTime(400)

console.log(travelTimeTpeTay(5))