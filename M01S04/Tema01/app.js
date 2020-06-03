console.warn('Modifica exemplul astfel incat bucla sa numere de la 1 la 89.');
var i;
for (i = 1; i <= 89; i++) {
  console.log(i);
}

console.warn('Modifica exemplul astfel incat bucla sa numere de la 1 la 88.');
var i;
for (i = 1; i < 89; i++) {
  console.log(i);
}

console.warn('Folosind keywordul break opreste bucla atunci cand numarul este egal cu 42.');
var i;
for (i = 1; i < 89; i++) {
  if (i === 42) {
    break;
  }
  console.log(i);
}

console.warn('Folosind keywordul continue, afiseaza doar numele impare intre 1 si 89.');
var i;
for (i = 1; i <= 89; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

console.warn('In mod similar, afiseaza doar numerele care sunt divizibile cu 3.');
var i;
for (i = 1; i <= 89; i++) {
  if (i % 3 !== 0) {
    continue;
  }
  console.log(i);
}

console.warn('fizz buzz');
var i;
for (i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}