
console.warn('Folosind un bloc if si keywordul continue, afiseaza mesajul "Acest numar este multiplu de 7." atunci cand este cazul.');
var i;
for (i = 0; i <= 100; i++) {
  if (i % 7 === 0) {
    console.log('Acest numar este multiplu de 7.');
    continue;
  }
  console.log(i);
}

console.warn('Folosind metoda prompt cere utilizatorului numarul pentru care trebuie sa gasesti multipli si afiseaza mesajul: “Acest numar este multiplu de x.” ');
var i;
var testNumber = window.prompt('Introdu un numar');

for (i = 0; i <= 100; i++) {
  console.log(i);
  if (i % testNumber !== 0) {
    continue;
  }
  console.log(`Acest numar este multiplu de ${testNumber}.`);
}

console.warn('Folosind metoda prompt cere utilizatorului numarul pentru care trebuie sa gasesti multipli si afiseaza mesajul: “Acest numar este multiplu de x.” Afla multiplii pentru acest numar intre 1 si 1000. ');
var i;
var testNumber = window.prompt('Introdu un numar');

for (i = 0; i <= 1000; i++) {
  console.log(i);
  if (i % testNumber !== 0) {
    continue;
  }
  console.log(`Acest numar este multiplu de ${testNumber}.`);
}

console.warn('Folosind inca o metoda prompt, cere utilizatorului si limita superioara pana la care sa numere bucla si sa afiseze multipli. ');
var i;
var testNumber = window.prompt('Introdu un numar') || 2;
var upperLimit = window.prompt('Introdu si limita') || 10;

for (i = 0; i <= upperLimit; i++) {
  console.log(i);
  if (i % testNumber !== 0) {
    continue;
  }
  console.log(`Acest numar este multiplu de ${testNumber}.`);
}