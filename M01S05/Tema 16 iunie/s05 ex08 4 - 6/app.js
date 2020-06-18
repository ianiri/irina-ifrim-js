// Adauga un buton nou in document cu id-ul query si folosind addEventListener() ataseaza un eveniment care sa foloseasca metoda prompt() pentru a afla varsta utilizatorului. 
// Salveaza rezultatul metodei prompt intr-o variabila si afiseaza in consola folosind template strings: “Ai aa ani.”.
// Creaza un paragraf cu idul message si folosind getElementById() stocheaza elementul intr-o variabila, apoi folosind innerText, afiseaza mesajul de mai devreme in acest paragraf.

let button = document.getElementById('query');
let infoMessage = document.getElementById('message');
let question = () => {
  let age = window.prompt('Te rog introdu varsta.');
  console.log(`Ai ${age} ani.`);
  infoMessage.innerText = `Ai ${age} ani.`;
};

button.addEventListener('click', question);

