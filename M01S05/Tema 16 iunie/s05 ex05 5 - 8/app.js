// Afiseaza numele intreg al persoanei folosind metoda getName()
// Afiseaza varsta persoanei folosind metoda getAge()
// Afiseaza anul de nastere al persoanei, folosind anul curent si metoda getName()
// Afiseaza propozita: “Ma numesc xxx yyy m-am nascut acum aa ani in anul zzzz!”

let person = {
  getName: function () {
    return 'Jon Snow';
  },
  getAge: () => {
    return 32;
  }
};

console.log(person.getName());
console.log(person.getAge());

let currentYear = new Date().getFullYear();
let birthYear = currentYear - person.getAge();
console.log(birthYear);

console.log(`Ma numesc ${person.getName()} si m-am nascut acum ${person.getAge()} ani, in anul ${birthYear}.`)
