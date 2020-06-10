console.warn('Modifica exemplul astfel incat bucla sa numere de la 1 la 52');
var i = 1;
do {
  console.log(i);
  i++;
} while (i <= 52)

console.warn('Modifica exemplul astfel incat bucla sa numere de la 1 la 51');
var i = 1;
do {
  console.log(i);
  i++;
} while (i < 52)

console.warn('Folosind keywordul break opreste bucla atunci cand numarul este egal cu 12');
var i = 1;
do {
  console.log(i);

  if (i === 12) {
    break;
  }

  i++;
} while (i < 52)

console.warn('Folosind keywordul continue afiseaza doar numerele impare intre 8 si 32');
var i = 8;
do {
  i++;

  if (i % 2 === 0) {
    continue;
  }

  console.log(i);
} while (i < 32)
