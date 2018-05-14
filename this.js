const house = {
  price: 10000,
  squareFeet: 500,
  owner: 'Luke',
  getPricePerSquareFoot: () => house.price / house.squareFeet
  // getPricePerSquareFoot: function() {
  //   return this.price / this.squareFeet
  // }
};

console.log(house.price);
console.log(house.getPricePerSquareFoot());

// EX
let myRoom = {
  color: 'pink',
  logColor: function() {
    let self = this;
    console.log(this.color);
    (function() {
      console.log(this.color);
      console.log(self.color);
    })();
  }
};

myRoom.logColor();
