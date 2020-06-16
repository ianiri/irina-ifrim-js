const person = {
  firstName: 'Dragos',
  lastName: 'Iordache',
  birthYear: 1987, 
  pets: [{
    name: 'Twix',
    species: 'papagal',
    age: 4
  }, {
    name: 'Mars',
    species: 'caine',
    age: 2, 
  }, {
    name: 'Bounty',
    species: 'hamster',
    age: 4,
  }, {
    name: 'Lion',
    species: 'pisica',
    age: 10
  }]
};

console.warn('Afiseaza in consola folosind metoda forEach() numele fiecarui animal.');
person.pets.forEach(function (pet) {
  console.log(pet.name);
});


console.warn('Folosind o bucla for afiseaza suma anilor animalelor.');
let i = 0;
let ageTotal = 0;
let petsLength = person.pets.length;

for (i = 0; i < petsLength; i++) {
  ageTotal += person.pets[i].age;
}
console.log(ageTotal);


console.warn('Folosind forEach() afiseaza cate una pe linie propozitiile: “Twix este papagal si are 4 ani. Mars este caine si are… etc”.');
person.pets.forEach(function (pet) {
  console.log(`${pet.name} este ${pet.species} si are ${pet.age} ani.`)
});


console.warn('Folosind o bucla for afiseaza cate una pe linie propozitiile: “Intre Dragos si Twix este o diferenta de xx ani. Intre Dragos si Mars… ” (repeta pentru toate intrarile din array).');
for (i = 0; i < petsLength; i++) {
  let pet = person.pets[i];
  let personAge = new Date().getFullYear() - person.birthYear;
  console.log(`Intre ${person.firstName} si ${pet.name} este o diferenta de ${personAge - pet.age} ani.`)
}


console.warn('Folosind o bucla for afiseaza in ordine inversa numele animalelor din array.');
for (i = petsLength - 1; i >= 0; i--) {
  console.log(person.pets[i].name);
}


console.warn('La fel si cu forEach()');
let personPets = person.pets;
personPets.reverse();

personPets.forEach(function (pet) {
  console.log(pet.name);
});
personPets.reverse();


console.warn('Folosind o bucla for afla care este cel mai in varsta animal si afiseaza propozitia: “xxx este cel mai batran animal pe care il am si este cu y ani mai mic decat mine.”');
let oldestPet = 0;
let oldestPetName = '';
let personAge = new Date().getFullYear() - person.birthYear;

for(i = 0; i < petsLength; i++) {
  let petAge = personPets[i].age;

  if (petAge > oldestPet) {
    oldestPet = petAge;
    oldestPetName = personPets[i].name;
  }
}
console.log(`${oldestPetName} este cel mai batran animal pe care il am si este cu ${personAge - oldestPet} ani mai mic decat mine.`)


console.warn('Folosind o bucla forEach afiseaza propozitia: “Am papagal, caine, hamster si pisica.”.');
message = 'Am ';

personPets.forEach(function (pet, i, pets) {
  let separator = i === pets.length - 1 ? '.'
                : i === pets.length - 2 ? ' si '
                : ', ';

  message += pet.species + separator;
});
console.log(message);