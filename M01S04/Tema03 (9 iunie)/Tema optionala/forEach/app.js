var friends = [
  {
    name: 'Larry',
    surname: 'Larryson',
  },
  {
    name: 'Steven',
    surname: 'Stevenson',
  },
  {
    name: 'Carol',
    surname: 'Carolson',
  },
  {
    name: 'Andra',
    surname: 'Andrason',
  },
];

var messageElement = document.getElementById('message');
var messageContent = `Prietenii mei sunt `;
var i = 0;
var arrayLength = friends.length;

if (arrayLength === 0) {
  messageContent = `Nu am prieteni.`;
}

friends.forEach(function (friend, i) {
  var punctuation = i === arrayLength - 2 ? ' si '
                  : i === arrayLength - 1 ? '.'
                  : ', ';

  messageContent += `${friend.name} ${friend.surname}${punctuation}`

  if (arrayLength === 1) {
    messageContent = `Prietenul meu e ${friend.name} ${friend.surname}${punctuation}`;
  }
});
messageElement.innerText = messageContent;
