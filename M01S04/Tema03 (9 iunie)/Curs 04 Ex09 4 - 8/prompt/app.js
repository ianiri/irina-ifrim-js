var number = window.prompt('Introdu numarul care va fi folosit drept multiplu.');
var minNumber = window.prompt('Introdu un numar minim.');
var maxNumber = window.prompt('Introdu un numar maxim.');
var messageElement = document.getElementById('message');
var messageContent = `Multiplii de ${number} intre ${minNumber} si ${maxNumber} sunt: `;
var i = parseInt(minNumber);

do {
  if (i % number === 0) {
    var punctuation = i === parseInt(maxNumber) ? '.' : ', ';
    messageContent += i + punctuation;
  }
  i++
} while (i <= maxNumber)
messageElement.innerText = messageContent;
