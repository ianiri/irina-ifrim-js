const person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  skills: {
    html: true,
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
      age: 33
    },
    carol: {
      name: 'Carol',
      surname: 'Carolson',
      age: 29
    }
  }
};


console.warn('Folosind Object.keys() pe proprietatea skills, afiseaza abilitatile persoanei.');

Object.keys(person.skills).forEach(function (skillName) {
  console.log(skillName);
});


console.warn('Prin aceeasi metoda, afiseaza o lista cu numele complet al prietenilor.');

Object.keys(person.friends).forEach(function (friendKey) {
  let friend = person.friends[friendKey];
  console.log(`${friend.name} ${friend.surname}`);
});


console.warn('Afiseaza propozitia: “Prietenii mei sunt Larry Larryson, Steven Stevenson si Carol Carolson.” folosind Object.keys()');
const friendsKeysNames = Object.keys(person.friends);
let message = `Prietenii mei sunt `;

friendsKeysNames.forEach(function (friendKey, i, friends) {
  let friendsLenght = friends.length;
  let friend = person.friends[friendKey];
  let separator = i === friendsLenght - 1 ? '.'
                : i === friendsLenght - 2 ? ' si '
                : ', ';
  message += `${friend.name} ${friend.surname}${separator}`;
});
console.log(message);


console.warn('Folosind bucla, afiseaza mai multe propozitii (cate una per console.log()) care sa afiseze: “Larry are xx ani. Steven are …”');

friendsKeysNames.forEach(function (friendKey) {
  let friend = person.friends[friendKey];
  console.log(`${friend.name} are ${friend.age}.`)
});