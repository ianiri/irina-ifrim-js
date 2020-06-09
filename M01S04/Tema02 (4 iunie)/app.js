// S04 Ex06 9 - 16

var person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  skills: [
    'html',
    'javascript',
    'css',
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

var skillLength  = person.skills.length;
var friendsLength = person.friends.length;

console.warn('Folosind obiectul person si un for, afiseaza in consola skillurile pe care le are persoana');
var message = '';
var i       = 0;

for (i = 0; i < skillLength; i++) {
  message += person.skills[i] + ' ';
}
console.log(message.trim());


console.warn('In mod similar, afiseaza skillurile care incep cu c');
var message = '';

for (i = 0; i < skillLength; i++) {
  var skill = person.skills[i]; 

  if (skill.startsWith('c')) {
    message += skill + ' ';
  }
}
console.log(message.trim());


console.warn('Folosind un for afiseaza propozitia: "Numele de familie ale prietenilor mei sunt xxx, xxx , xxx."');
var message = 'Numele de familie ale prietenilor mei sunt ';

for (i = 0; i < friendsLength; i++) {
  var friend      = person.friends[i];
  var punctuation = i === friendsLength - 1 ? '.' : ', ';

  message += friend.surname + punctuation;
}
console.log(message);


console.warn('Folosind un for, afiseaza numarul total de ani pe care il au persoanele din arrayul friends');
message      = 'Numarul total de ani pe care il au persoanele din arrayul friends este ';
var ageTotal = 0;

for (i = 0; i < friendsLength; i++) {
  ageTotal += person.friends[i].age;
}
message += ageTotal + '.';
console.log(message);


console.warn('Folosind un for, afiseaza suma anilor  persoanelor.')
var currentYear     = new Date().getFullYear();
var personBirthYear = currentYear - person.age;
var yearsTotal      = 0;
var message         = 'Suma anilor de nastere al persoanelor (person si friends) este: ';

for (i = 0; i < friendsLength; i++) {
  var friendBirthYear = currentYear - person.friends[i].age;
  yearsTotal += friendBirthYear;
}
message += yearsTotal + personBirthYear + '.';
console.log(message);


console.warn('Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends.');
message = 'Diferenta de varsta dintre persoana si prietenii din arrayul friends este: ';

for (i = 0; i < friendsLength; i++) {
  var friend     = person.friends[i];
  var difference = person.age - friend.age;
  var punctuation = i === friendsLength - 1 ? '.' : ', ';
  message += difference + punctuation;
}
console.log(message);


console.warn('Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... ".');
message = '';

for (i = 0; i < friendsLength; i++) {
  var friend     = person.friends[i];
  var difference = person.age - friend.age;
  message += `Intre ${person.name} si ${friend.name} este o diferenta de ${difference} ani. `;
}
console.log(message.trim());


console.warn('Afiseaza fraza prietenii mei sunt xxx yyy, xxx yyy, xxx yyy in ordine inversa a arrayului de prieteni. (Numarand de la length la 0).');
message = 'Prietenii mei sunt ';

for (i = friendsLength - 1; i >= 0; i--) {
  var friend       = person.friends[i];
  var completeName = friend.name + ' ' + friend.surname;
  var punctuation  = i === 0 ? '.' : ', ';

  message += completeName + punctuation;
}
console.log(message.trim());


// S04 Ex07 4 - 6
var friends = [
  {
    name: 'Dragos',
    surname: 'Iordache',
  },
  {
    name: 'Larry',
    surname: 'Larryson',
  },
  {
    name: 'Steven',
    surname: 'Stevenson',
  },
  {
    name: 'Carol',
    surname: 'Carolson',
  },
  {
    name: 'Andra',
    surname: 'Andrason',
  },
];

console.warn('Folosind o bucla for afiseaza proprietatea name a tuturor obiectelor din arrayul friends.');
var i = 0;
var message = 'Proprietatea name a tuturor obiectelor din arrayul friends este: ';
var arrayLength = friends.length;

for (i = 0; i < arrayLength; i++) {
  var friend = friends[i];
  var punctuation = i === arrayLength - 1 ? '.' : ', ';
  
  message += `${friend.name}${punctuation}`;
}
console.log(message);


console.warn('Afiseaza numele complet al tuturor prietenilor.');
var message = '';

for (i = 0; i < arrayLength; i++) {
  var friend = friends[i];
  var punctuation = i === arrayLength - 1 ? '.' : ', ';

  message += `${friend.name} ${friend.surname}${punctuation}`;
}
console.log(message);


console.warn('Folosind keywordul break, afiseaza numele complet al prietenilor dar opeste bucla la primul surname care are numarul de caractere mai mare sau egal decat 9.');
var message = '';

for (i = 0; i < arrayLength; i++) {
  var friend = friends[i];

  message += `${friend.name} ${friend.surname}`;

  if (friend.surname.length >= 9) {
    message += '.';
    break;
  } else {
    message += ', '
  }
}
console.log(message);