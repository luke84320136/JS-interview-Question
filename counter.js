function myFun() {
  let count = 0;

  return function() {
    if(count < 4){
      return count ++
    }else {
      return 'error'
    }
  };
}

console.log(myFun())

const instanceOne = myFun()
const instanceTwo = myFun()


console.log('instanceOne: ', instanceOne()) //instaceOne: 0
console.log('instanceOne: ', instanceOne()) //instaceOne: 1
console.log('instanceTwo: ', instanceTwo()) //instaceTwo: 0
console.log('instanceOne: ', instanceOne()) //instaceOne: 1
console.log('instanceTwo: ', instanceTwo()) //instaceTwo: 1
console.log('instanceOne: ', instanceOne()) //instaceOne: 3



