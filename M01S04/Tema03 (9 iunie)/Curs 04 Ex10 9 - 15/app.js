var person = {
  name: 'Jon',
  surname: 'Snow',
  age: 32,
  petOwner: true,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node.js',
    'jquery'
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29
    }
  ]
};

console.warn('Folosind obiectul person si forEach, afiseaza in consola skillurile pe care le are persoana.');
var message = '';

person.skills.forEach(function (skill, i, skills) {
  var punctuation = i === skills.length - 1 ? '.' : ', ';
  message += skill + punctuation;
});
console.log(message);


console.warn('In mod similar, afiseaza skillurile care nu incep cu j.');
var message = '';

person.skills.forEach(function (skill, i, skills) {
  if (!skill.startsWith('j')) {
    var punctuation = i === skills.length - 1 ? '.' : ', ';
    message += skill + punctuation;  
  }
});
console.log(message);


console.warn('Folosind forEach afiseaza propozitia: "Numele mari ale prietenilor mei sunt xxx, xxx, xxx."');
var message = 'Numele mare ale prietenilor mei sunt ';

person.friends.forEach(function (friend, i, friends) {
  var punctuation = i === friends.length - 1 ? '.' : ', ';
  message += friend.surname + punctuation;
});
console.log(message);


console.warn(' Folosind forEach, afiseaza numarul total de ani pe care il au persoanele din arrayul friends');
var totalAge = 0;

person.friends.forEach(function (friend) {
  totalAge += friend.age;
});
console.log(totalAge);


console.warn('Folosind forEach, afiseaza suma anilor de nastere a persoanelor');
var totalYears = 0;

person.friends.forEach(function (friend) {
  var friendAge = friend.age;
  var currentYear = new Date().getFullYear();
  totalYears += currentYear - friendAge;
});
console.log(totalYears);


console.warn('Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends.');
var ageDifference = '';

person.friends.forEach(function (friend, i, friends) {
  var punctuation = i === friends.length - 1 ? '.' : ', ';
  ageDifference += person.age - friend.age + punctuation;
});
console.log(ageDifference);


console.warn(' Folosind metoda reverse si apoi forEach, afiseaza in ordine inversa numele complet al prietenilor din arrayul friends.');
message = '';
person.friends.reverse();

person.friends.forEach(function (friend, i, friends) {
  var punctuation = i === friends.length - 1 ? '.' : ', ';
  message += `${friend.name} ${friend.surname}${punctuation}`;
});
console.log(message);
person.friends.reverse();
