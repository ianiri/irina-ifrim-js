let paragraphLog = (message) => {
  let logContainer = document.querySelector('.logs');
  let messageParagraph = document.createElement('p');

  if (!logContainer) {
    logContainer = document.createElement('div');
    logContainer.classList.add('logs');
    document.body.appendChild(logContainer);
  }

  messageParagraph.innerText = message;

  logContainer.appendChild(messageParagraph);
};
// console.log = paragraphLog;
// console.log('Apar in document, nu in consola');

// In loc de a suprascrie metoda log() a consolei, adauga alta numita console.domLog() si asigneaza functia la ea, apoi foloseste-o in consola.
console.domLog = paragraphLog;