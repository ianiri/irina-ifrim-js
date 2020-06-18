let person = {
  getName: function () {
    return 'Jon Snow';
  },
  getAge: () => {
    return 32;
  }
};

let accessor = (methodSuffix) => {
  let methodName = 'get' + methodSuffix;
  return person[methodName]();
};

// Folosind accesorul afiseaza numele persoanei.
// Afiseaza varsta persoanei.
// Afiseaza anul de nastere al persoanei folosind anul curent.
// Afiseaza propozitia “Ma numesc xxx yyy si am aa ani!”

console.log(accessor('Name'));
console.log(accessor('Age'));

let currentYear = new Date().getFullYear();
console.log(currentYear - accessor('Age'));

console.log(`Ma numesc ${accessor('Name')} si am ${accessor('Age')} ani!`)
