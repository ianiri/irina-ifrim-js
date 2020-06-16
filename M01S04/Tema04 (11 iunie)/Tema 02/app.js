const person = {
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


let i = 0;
let j = 0;
let message = '';

for (i = 0; i < person.friends.length; i++) {

  for (j = 0; j < person.friends.length; j++) {
    if (i === j) {
      continue;
    }
    message = `Intre ${person.friends[i].name} si ${person.friends[j].name} este o diferenta de ${Math.abs(person.friends[i].age - person.friends[j].age)} ani.`;
    console.log(message);
  }
}
