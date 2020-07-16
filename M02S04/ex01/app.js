let box = document.querySelector('.box');
let animationClass = 'animate-class';
let toggleButton = document.getElementById('apply-style');
let isClassApplied = false;

let darkenButton = document.getElementById('darken');


setTimeout(() => {
  box.classList.add(animationClass);
  isClassApplied = true;

  setTimeout(() => {
    box.classList.remove(animationClass);
    isClassApplied = false;
    
  }, 2000);
}, 2000);

// toggleButton.addEventListener('click', (event) => {
//   let btn = event.currentTarget;

//   if (box.classList.contains(animationClass)) {
//     box.classList.remove(animationClass);
//     btn.innerText = 'Aplica';
//   } else {
//     box.classList.add(animationClass);
//     btn.innerText = 'Elimina';
//   }
// });


// Imbunatateste codul folosind metoda toggle al classList

toggleButton.addEventListener('click', (event) => {
  let btn = event.currentTarget;
  box.classList.toggle(animationClass);
  isClassApplied = !isClassApplied;

  btn.innerText = isClassApplied === true ? 'Elimina' : 'Aplica';
});

// Adauga alt buton cu textul “Intuneca”, care atunci cand este apasat nu va aplica o clasa, ci va aplica direct valoarea #000 pentru background-color, folosind 
// https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute 

darkenButton.addEventListener('click', () => {
  // box.style.backgroundColor = '#000';
  box.setAttribute('style', 'background-color: #000;');
});
