const house = {
  price: 10000,
  squareFeet: 500,
  owner: 'Luke',
  getPricePerSquareFoot: function() {
    return this.price / this.squareFeet
  }
}

console.log(house.price)
console.log(house.getPricePerSquareFoot())