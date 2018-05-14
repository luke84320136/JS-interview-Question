// const heroAry = ['Luke', 'Solo', 'Leia'];
// const evilAry = ['Vedar', 'Boba', 'Palpatine'];

// const newAry = [...heroAry, ...evilAry];
// console.log(...newAry);

const newFn = function(a, ...b) {
  console.log(a, b);
  // console.log(arguments);
  // const arg = [...arguments];
  // console.log(arg);
  b.forEach((i) => {
    console.log(i)
  })
};

newFn(1, 2, 3, 4 ,5);
