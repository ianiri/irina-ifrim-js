var number = window.prompt('Introdu numarul care va fi folosit drept multiplu.');
var maxNumber = window.prompt('Introdu un numar maxim.');
var messageElement = document.getElementById('message');
var messageContent = `Multiplii de ${number} intre 5 si ${maxNumber} sunt: `;
var i = 5;

while (i <= maxNumber) {
  if (i % number === 0) {
    var punctuation = i === parseInt(maxNumber) ? '.' : ', ';
    messageContent += i + punctuation;
  }
  i++
}
messageElement.innerText = messageContent;

