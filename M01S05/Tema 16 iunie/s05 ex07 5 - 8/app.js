let dateBuilder = [
  () => {
    return '2020';
  },
  () => {
    return 'iunie';
  },
  () => {
    return '18'
  }
];

dateBuilder[3] = () => {
  return 'joi';
};

// Folosind arrayul dateBuilder. Afiseaza anul curent.
// Afiseaza propozitia: “Suntem in luna an”.
// Afiseaza propozitia: “Astazi este zi, data”.
// Afiseaza propozitia: “Data curenta este zi luna an”.

console.log(dateBuilder[0]());
console.log(`Suntem in luna ${dateBuilder[1]()} ${dateBuilder[0]()}.`);
console.log(`Astazi este ${dateBuilder[3]()}, ${dateBuilder[2]()} ${dateBuilder[1]()} ${dateBuilder[0]()}.`);
console.log(`Data curenta este ${dateBuilder[2]()} ${dateBuilder[1]()} ${dateBuilder[0]()}.`); 