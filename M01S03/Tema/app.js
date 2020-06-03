var person = {
  firstName: 'Jon',
  lastName: 'Snow',
  email: 'jonsnow@castleblack.com',
  birthYear: 1980,
  pets: [
    {
      name: 'Ghost',
      species: 'lup',
      age: 2,
    },
    {
      name: 'Kitty',
      species: 'pisica',
      age: 3,
    },
    {
      name: 'Boo',
      species: 'peste',
      age: 1
    },
  ],
  zipCode: 1155887
};

console.warn('Afiseaza propozitia: “Numele meu este: xxx si yyy si am x animale”. Nu uita de proprietatea length a arrayului pets.');
console.log(`Numele meu este: ${person.firstName} ${person.lastName} si am ${person.pets.length} animale.`);

console.warn('Afiseaza propozitia: “Am acelasi email din copilarie: xxx”.');
console.log(`Am acelasi email din copilarie: ${person.email}.`)

console.warn('Afiseaza propozitia: “Unul din cele x animale ale mele este species si are age ani.”');
console.log(`Unul din cele ${person.pets.length} animale ale mele este ${person.pets[0].species} si are ${person.pets[0].age} ani.`);

console.warn('Calculeaza si afiseaza (folosind anul curent) anul de nastere al animalului de pe pozitia 2.');
console.log(new Date().getFullYear() - person.pets[1].age);

console.warn('Calculeaza si salveaza in variabila difference diferenta de ani dintre persoana si animalul de pe pozitia 0. Foloseste anul curent.');
var difference = new Date().getFullYear() - person.birthYear - person.pets[0].age;
console.log(difference); 

console.warn('Salveaza numele animalului de pe pozitia 0 intr-o variabila numita petName.');
var petName = person.pets[0].name;
console.log(petName);

console.warn('Afiseaza propozitia: “Intre firstName si petName este o diferenta de difference ani”.');
console.log(`Intre ${person.firstName} si ${petName} este o diferenta de ${difference} ani.`);

console.warn('Folosind metoda document.getElementById() afiseaza urmatoarele 4 afirmatii despre obiectul person.');
var messageProp01 = document.getElementById('prop01');
var messageProp02 = document.getElementById('prop02');
var messageProp03 = document.getElementById('prop03');
var messageProp04 = document.getElementById('prop04');
var currentYear   = new Date().getFullYear();

messageProp01.innerText = `${person.firstName}, ${person.pets[0].name}, ${person.pets[1].name}, ${person.pets[2].name} locuiesc impreuna in aceeasi casa.`;
messageProp02.innerText = `${person.pets[0].age - person.pets[2].age} (este diferenta de varsta dintre animalul de pe pozitia 0 si cel de pe pozitia 2).`;
messageProp03.innerText = `Ma numesc ${person.firstName} ${person.lastName}, m-am nascut in ${person.birthYear} si codul meu postal este: ${person.zipCode}.`;
messageProp04.innerText = `Animalele mele s-au nascut in ${currentYear - person.pets[0].age}, ${currentYear - person.pets[1].age}, respectiv ${currentYear - person.pets[2].age}.`;