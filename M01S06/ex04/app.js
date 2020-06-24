(() => {
  let showMessage = (message) => {
    let messageParagraph = document.createElement('p');

    messageParagraph.innerText = message;
    messageParagraph.classList.add('message');

    document.body.appendChild(messageParagraph);

    setTimeout(() => {
      messageParagraph.remove();
    }, 600);
  }

  document.addEventListener('DOMContentLoaded', () => {
    let stage = document.querySelector('.stage');

    stage.addEventListener('mouseover', () => {
      console.log('Mouseul este pe scena.');
      showMessage('Mouseul este pe scena.');
    });

    stage.addEventListener('mouseout', () => {
      console.log('Mouseul nu este pe scena.');
      showMessage('Mouseul nu este pe scena.');
    });
  });
})();

// Folosind exemplul de la exercitiul 2, afiseaza mesajul intr-un paragraf in loc de consola. Inainte de a adauga elementul in DOM adauga-i clasa message.
// Creaza o functie numita showMessage() pe care sa o chemi de fiecare data cand vrei sa afisezi un paragraf in DOM
