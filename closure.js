const globalVar = 'global var'

function outterFun(param1) {
  const var1 = 'var one'

  function innerFun(param2) {
    const var2 = 'var two'

    console.log('全域變數:', globalVar)
    console.log('變數１:', var1)
    console.log('變數２:', var2)
    console.log('參數１:', param1)
    console.log('參數２:', param2)
  }
  innerFun('param two')
}
outterFun('param one')

//MDN 範例1
function makeFun() {
  var name = 'Luke'
  function displayNmae() {
    console.log(name)
  }
  return displayNmae
}

var myFun = makeFun()
myFun()

//MDN 範例2
function makeAdder(x) {
  return function(y) {
    return x + y
  }
}

var add5 = makeAdder(5)
var add10 = makeAdder(10)
console.log(add5(2))
console.log(add10(2))

// EX
var me = 'Bruce Wayne'
function greetMe() {
  console.log('Hello, ' + me + '!')
}
greetMe()
