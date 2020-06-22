// Creeaza o functie polimorfica pentru calcularea suprafetelor. Daca primeste un parametru, sa calculeze suprafata unui patrat. Daca primeste doi, a unui dreptunghi. Daca primeste trei, sa calculeze suprafata totala a paralelipipedului. Foloseste structura switch.
// Creeaza o functie numita calculateCircleArea() si afiseaza suprafata unor cercuri cu raza de 2, 20 si 16. 


function calculateSurface (L, l, h) {
  let argumentLength = arguments.length;

  switch (argumentLength) {
    case 1:
      return L * L;
      break;
    case 2:
      return L * l;
      break;
    case 3:
      return (L * h + l * h + L * l) * 2;
      break;
    default:
      console.log('Introdu dimensiunile pentru calcularea ariei.');
  }
};
console.log(`Aria unui patrat: ${calculateSurface(2)}.`);
console.log(`Aria unui dreptunghi: ${calculateSurface(2, 6)}.`);
console.log(`Aria unui paralelipiped: ${calculateSurface(2, 6, 4)}.`);
console.log(calculateSurface());


function calculateCircleArea (r) {
  return (Math.PI * Math.pow(r, 2)).toFixed(2);
}

console.log(calculateCircleArea(2.20));
console.log(calculateCircleArea(16));