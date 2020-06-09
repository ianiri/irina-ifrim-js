var myObject = {
  key1: 'Key 1 value',
  key2: 'Key 2 value',
  key3: 'Key 3 value',
  key4: true,
  key5: [1, 2, 3]
};
Object.keys(myObject).forEach(function (keyName) {
  console.log(myObject[keyName]);
});


var person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
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

console.warn('Folosind Object.keys() pe proprietatea skills, afiseaza abilitatile persoanei daca acestea sunt true.');
var message = '';

Object.keys(person.skills).forEach(function (skillName) {
  if (person.skills[skillName] === true) {
    message += `${skillName} `;
  }
});
console.log(message.trim());

console.warn('Prin aceeasi metoda, afiseaza o lista inversata cu numele complet al prietenilor.');
message = '';
var friendsKeysNames = Object.keys(person.friends);
friendsKeysNames.reverse();

friendsKeysNames.forEach(function (friendKey, i, friendsKeyN) {
  var friend = person.friends[friendKey];
  var punctuation = ', ';
  
  message += `${friend.name} ${friend.surname}`;

  if (i === friendsKeyN.length - 1) {
    punctuation = '.';
  }

  message += punctuation;
});
console.log(message);


console.warn('Afiseaza propozitia: “Prietenii mei sunt Larry Steven si Carol.” folosind Object.keys()');
