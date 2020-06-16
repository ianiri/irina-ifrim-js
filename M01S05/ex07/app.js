let dateBuilder = [
  () => {
    return '2020';
  },
  () => {
    return 'iunie';
  },
  () => {
    return '16'
  }
];

dateBuilder[3] = () => {
  return 'marti';
};


console.warn('Folosind arrayul dateBuilder. Afiseaza luna curenta.');
console.log(dateBuilder[1]());


console.warn('Afiseaza propozitia: “Suntem in anul an.”.');
console.log(`Suntem in anul ${dateBuilder[0]()}.`);


console.warn('Afiseaza propozitia: “Suntem in luna ll in anul aa.”.');
console.log(`Suntem in luna ${dateBuilder[1]()} in anul ${dateBuilder[0]()}.`)


console.warn('Afiseaza propozitia: “Astazi este zz”.');
console.log(`Azi este ${dateBuilder[3]()}, ${dateBuilder[2]()} ${dateBuilder[1]()}.`)