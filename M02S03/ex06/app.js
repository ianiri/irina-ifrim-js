// Folosind codul HTML din exercitiu creeaza un script care atunci cand se apasa butonul, va adauga un paragraf in sectiunea corecta cu textul: “Butonul a fost apasat in aceasta rezolutie.”

let buttonElement = document.getElementsByClassName('btn')[0];
let displayElements = document.getElementsByClassName('display');
let message = 'Butonul a fost apasat in aceasta rezolutie.';

buttonElement.addEventListener('click', () => {
  let windowWidth = window.innerWidth;
  let targetClassName = 'low-res';

  if (windowWidth >= 650) {
    targetClassName = 'mid-res';
  }

  if (windowWidth > 1000) {
    targetClassName = 'high-res';
  }

  for (let i = 0; i < displayElements.length; i++) {
    if (displayElements[i].classList.contains(targetClassName)) {
      let p = document.createElement('p');
      p.innerText = message;
      displayElements[i].append(p);
    }
  }
});
