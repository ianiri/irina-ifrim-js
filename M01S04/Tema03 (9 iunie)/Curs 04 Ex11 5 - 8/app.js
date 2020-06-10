var person = {
  name: 'Jon',
  surname: 'Snow',
  age: 32,
  petOwner: true,
  skills: {
    htm: true,
    css: true,
    javaScript: false
  },
  friends: {
    larry: {
      name: 'Larry',
      surname: 'Larryson',
      age: 31
    },
    steve: {
      name: 'Steve',
      surname: 'Stevenson',
      age: 31
    },
    carol: {
      name: 'Carol',
      surname: 'Carolson',
      age: 29
    }
  }
};


console.warn('Folosind Object.keys() pe proprietatea skills, afiseaza abilitatile persoanei.');
var message = '';

Object.keys(person.skills).forEach(function (skillName, i, skills) {
  var punctuation = i === skills.length - 1 ? '.' : ', ';
  message += skillName + punctuation;
});
console.log(message);


console.warn('Prin aceeasi metoda, afiseaza o lista cu numele complet al prietenilor.');
var message = '';

Object.keys(person.friends).forEach(function (friendKey, i, friends) {
  var friend = person.friends[friendKey];
  var punctuation = i === friends.length - 1 ? '.' : ', ';

  message += `${friend.name} ${friend.surname}${punctuation}`;
});
console.log(message);


console.warn('Afiseaza propozitia: “Prietenii mei sunt Larry Larryson, Steven Stevenson si Carol Carolson.” folosind Object.keys()');
var message = 'Prietenii mei sunt ';

Object.keys(person.friends).forEach(function (friendKey, i, friends) {
  var friend = person.friends[friendKey];
  var punctuation = ', ';

  message += `${friend.name} ${friend.surname}`;

  if (i === friends.length - 2) {
    punctuation = ' si ';
  }

  if (i === friends.length - 1) {
    punctuation = '.';
  }

  message += punctuation;
});
console.log(message);


console.warn('Folosind bucla, afiseaza mai multe propozitii (cate una per console.log()) care sa afiseze: “Larry are xx ani. Steven are …”');
Object.keys(person.friends).forEach(function (friendKey) {
  var friend = person.friends[friendKey];
  console.log(`${friend.name} are ${friend.age} ani.`);
});