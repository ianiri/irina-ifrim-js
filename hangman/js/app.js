let words = ['spinach', 'tomato', 'crocodile', 'keyboard'];
let tries = 5;
let word = words[Math.floor(Math.random() * words.length)];
let guesedLetters = [];
let gameEnded = false;
let wordGuesed = false;
let keyboard = document.querySelector('.keyboard');
let message = document.querySelector('.message');
let resetButtons = document.querySelector('.tries-control');

let renderTries = () => {
  let triesElement = document.getElementById('js-tries');

  triesElement.innerText = tries;
};

let renderWord = () => {
  let wordContainerElement = document.getElementById('js-word');
  let wordLength = word.length;
  let okIterationCount = 0;
  wordContainerElement.innerHTML = '';

  word.split('').forEach((letter) => {
    let button = document.createElement('button');
    
    button.classList.add('btn', 'btn-info', 'm-1');
    
    if (guesedLetters.includes(letter)) {
      okIterationCount++;
      button.innerText = letter;
    }

    wordContainerElement.appendChild(button);
  });

  if (okIterationCount === wordLength) {
    wordGuesed = true;
  } else {
    wordGuesed = false;
  }
};

let checkGameState = () => {
  let keyboardButtons = keyboard.querySelectorAll('.btn-secondary');
  if (tries === 0) {
    gameEnded = true;
    keyboardButtons.forEach((button) => {
      button.disabled = true;
    });  
  } else {
    gameEnded = false;
  }

  if (gameEnded && wordGuesed) {
    message.innerText = 'Yaaaay, ai castigat!';
    keyboardButtons.forEach((button) => {
      button.disabled = true;
    });  
    return;
  }

  if (wordGuesed) {
    message.innerText = 'Yaaaay, ai castigat!';
    keyboardButtons.forEach((button) => {
      button.disabled = true;
    });  
    return;
  }

  if (gameEnded) {
    message.innerText = 'Uff, ai pierdut!';
    keyboardButtons.forEach((button) => {
      button.disabled = true;
    });  
    return;
  }
};

let renderFace = () => {
  let face = document.getElementById('js-face');
  let eyes = face.querySelectorAll('.eye');
  let classNames = '';

  eyes.forEach((eye) => {
    eye.classList.remove('eye--worried', 'eye--annoyed');
  })

  if (tries >= 2 && tries <= 3) {
    classNames += 'eye--annoyed';
  }
  
  if (tries === 1) {
    classNames += 'eye--worried';
  }

  if (classNames.length < 1) {
    return;
  }

  eyes.forEach((eye) => {
    eye.classList.add(classNames);
  });
};

renderTries();
renderWord();
renderFace();

keyboard.addEventListener('click', (event) => {
  if (event.target && event.target.nodeName === 'BUTTON') {
    let letter = event.target.innerText.toLowerCase();

    guesedLetters.push(letter);
    event.target.disabled = true;

    if (word.includes(letter)) {
      event.target.classList.add('btn-success');
    } else {
      tries--;
      event.target.classList.add('btn-danger');
    }

    renderTries();
    renderWord();
    checkGameState();
    renderFace();
  }
});

let resetGame = (triesNumber) => {
  tries = triesNumber;
  word = words[Math.floor(Math.random() * words.length)];
  guesedLetters.length = 0;
  let buttons = document.querySelectorAll('[disabled]');

  buttons.forEach((button) => {
    button.classList.remove('btn-danger', 'btn-success');
    button.disabled = false;
  });

  message.innerText = 'Ok, hai sa incercam cu un cuvant nou.';
  setTimeout (() => {
    message.innerText = '';
  }, 6000);

  renderTries();
  renderWord();
}

  resetButtons.addEventListener('click', () => {
    let target = event.target;

    if (target && target.classList.contains('reset-standard')) {
      resetGame(5);
      return;
    }

    if (target && target.classList.contains('reset-extra1')) {
      resetGame(6);
      return;
    }

    if (target && target.classList.contains('reset-extra2')) {
      resetGame(7);
      return;
    }
  });
