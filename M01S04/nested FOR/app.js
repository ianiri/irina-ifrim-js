let person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
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

function pluralize (count, words) {
  if (count > 1) {
    return words.plural || '';
  } else {
    return words.singular || '';
  }
}

for (let i = 0; i < person.friends.length; i++) {
  let outerFriend = person.friends[i];
  let ageDiff = Math.abs(outerFriend.age - person.age);

  console.log(`Intre ${outerFriend.name} si ${person.name} este o diferenta de ${ageDiff} ${pluralize(ageDiff, {singular: 'an', plural: 'ani'})}.`)

  for (let j = 0; j < person.friends.length; j++) {
    let innerFriend = person.friends[j];
    let ageDiff = Math.abs(outerFriend.age - innerFriend.age);

    if (i !== j) {
      console.log(`Intre ${outerFriend.name} si ${innerFriend.name} este o diferenta de  ${ageDiff} ${pluralize(ageDiff, {singular: 'an', plural: 'ani'})}.`);
    }
  }
}