console.log(
  (new Date()).getHours() + ':' +
  (new Date()).getMinutes() + ':' +
  (new Date()).getSeconds() + ':' +
  (new Date()).getMilliseconds(),
  'Am ajuns la Pixellab.'
);

// console.warn('Stocheaza valoarea pentru ora intr-o variabila numita hours./Apeleaza din consola (nu editor) variabila hours.');
let hours = (new Date()).getHours();

// console.warn('Stocheaza valoarea pentru minute intr-o variabila numita minutes.');
let minutes = (new Date()).getMinutes();

// console.warn('Stocheaza valoarea pentru secunde intr-o variabila numita seconds. ');
let seconds = (new Date()).getSeconds();

console.warn('Creeaza si afiseaza in consola un mesaj: “hh:mm:ss, am ajuns la Pixellab.”.');
console.log(`${hours}:${minutes}:${seconds}, am ajuns la Pixellab.`)

// console.warn('Adauga si milisecundele intr-o variabila numita milliseconds.');
let milliseconds = (new Date()).getMilliseconds();

console.warn('Schimba mesajul astfel incat sa afiseze si milisecundele. ');
console.log(`${hours}:${minutes}:${seconds}:${milliseconds}, am ajuns la Pixellab.`)

console.warn('Creeaza o functie numita getTime care sa salveze intr-o variabila exactTime ora, minutele si secundele curente. Foloseste keywordul return pentru a elimina nevoia de variabila');
function getTime () {
  let hours = (new Date()).getHours();
  let minutes = (new Date()).getMinutes();
  let seconds = (new Date()).getSeconds();
  let milliseconds = (new Date()).getMilliseconds();
  
  return `${hours}:${minutes}:${seconds}:${milliseconds}, am ajuns la Pixellab.(functia)`;
}
