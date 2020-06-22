// Creeaza un obiect numit pet cu urmatoarele metode: getName, getSpecies si getAge.

let pet = {
  getName: function () {
    return 'Ghost';
  },
  getSpecies: function () {
    return 'lup';
  },
  getAge: function () {
    return 4
  }
};

// Folosind metodele obiectului pet afiseaza propozitia: “nnnn este ssss si are aaaa ani”
console.log(`${pet.getName()} este ${pet.getSpecies()} si are ${pet.getAge()} ani.`)

// Folosind metoda getAge calculeaza si salveaza intr-o variabila numita petAge varsta animalului si afiseaza propozitia: “Animalul meu are petAge ani”
let petAge = pet.getAge();
console.log(`Animalul meu are ${petAge} ani.`)
