const fs = require('fs');

const genders = ['Male', 'Female'];
const maleNames = [
  'Cooper',
  'Easton',
  'Everett',
  'Nicholas',
  'Kayden',
  'James',
  'Giovanni',
  'Brayden',
  'Calvin',
  'Graham',
];
const femaleNames = [
  'Taytum',
  'Ocean',
  'Zayla',
  'Nyra',
  'Flora',
  'Emberlynn',
  'Clover',
  'Della',
  'Freyja',
  'Arleth',
];
const lastNames = ['Callan', 'Baalham', 'Mabberley', 'Sabby', 'Zogg'];
const people = [];

function randChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

for (i = 0; i < 20; i++) {
  let obj = {
    gender: '',
    name: '',
    lastName: '',
    age: '',
    email: '',
  };

  const randGender = randChoice(genders);

  if (randGender === 'Male') {
    const name = randChoice(maleNames);
    obj.gender = 'Male';
    obj.name = name;
  }
  if (randGender === 'Female') {
    const randName = randChoice(femaleNames);
    obj.gender = 'Female';
    obj.name = randName;
  }
  obj.lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  obj.age = Math.floor(Math.random() * (78 - 18 + 1)) + 18;
  obj.email =
    obj.name.toLowerCase() + '.' + obj.lastName.toLowerCase() + '@gmail.com';
  people.push(obj);
}

const peopleJson = JSON.stringify(people);

fs.writeFile('people.json', peopleJson, (err) => {
  if (err) {
    console.log('Something went wrong');
    throw err;
  }
  console.log('The file has been successfully generated! Check people.json');
});