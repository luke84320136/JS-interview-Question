let person = {
  firstName: 'Luke',
  lastName: 'Lan',
  getFullName: function() {
    let fullName = this.firstName + ' ' + this.lastName;
    return fullName;
  }
};

let logName = function(loca1, loca2) {
  console.log('Logged: ' + this.getFullName());
  console.log('Arg: ' + loca1 + ' ' + loca2);
}.bind(person);

logName('Taiwan', 'Japan');

// call() 用法
// logName.call(person,'Taiwan', 'Japan');

// apply() 用法
// logName.apply(person,['Taiwan', 'Japan']);
