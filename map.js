const obj = [
  {
    name: 'Luke',
    id: '001'
  },
  {
    name: 'siman',
    id: '002'
  }
];

const person = obj.map(staff => staff.name + '-' + staff.id);
console.log(person);
