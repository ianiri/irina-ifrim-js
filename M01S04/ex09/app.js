var i = 101;
do {
  console.log(i);
  i++;
} while (i <= 100)


console.warn('Modifica exemplul astfel incat bucla sa numere de la 1 la 99 (dar nu schimba numarul 100).');
var i = 1;
do {
  console.log(i);
  i++;
} while (i < 100)


console.warn('Folosind keywordul break opreste bucla atunci cand numarul este egal cu 50 (dar afiseaza-l).');
var i = 1;
do {
  console.log(i);

  if (i === 50 ) {
    break;
  }
  
  i++;
} while (i < 100)