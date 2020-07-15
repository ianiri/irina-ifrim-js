// Folosind evenimentul resize al obiectului window, afiseaza o alerta care sa contina mesajul: “Fereastra si-a schimbat dimensiunea.” 
// Folosind evenimentul resize si proprietatea innerWidth al obiectului window, afiseaza intr-un paragraf in DOM noua latime a ferestrei dupa fiecare eveniment de resize. 
// Folosind evenimentul resize si proprietatea innerWidth al obiecutului window, afiseaza in alt paragraf mesajul: “Fereastra si-a schimbat dimensiunea orizontala.”

let p = document.querySelector('.message');
let p2 = document.querySelector('.second-message');
let initialWidth = window.innerWidth;
let initialHeight = window.innerHeight;
let surface = document.createElement('p');

let calculateSurface = (L, l) => {
  return `Fereastra are acum suprafata de ${L * l} pixeli.`;
};

window.addEventListener('DOMContentLoaded', () => {
  p2.after(surface);
  surface.innerText = calculateSurface(initialWidth, initialHeight);
})


window.addEventListener('resize', () => {
  console.log('Fereastra si-a schimbat dimensiunea.');
  let newWidth = window.innerWidth;
  let newHeight = window.innerHeight;
  p.innerText = newWidth;

  if (newWidth !== initialWidth) {
    p2.innerText = 'Fereastra si-a schimbat latimea.';
  } else {
    p2.innerText = '';
  }
  surface.innerText = calculateSurface(newWidth, newHeight);

  initialWidth = newWidth;
});

// Folosind evenimentul resize al obiectului window si proprietatile innerWidth si innerHeight, la fiecare redimensionare a ferestrei, afiseaza intr-un paragraf mesajul: “Fereastra are acum suprafata de xxx pixeli.”.
// Folosind evenimentul de DOMContentLoaded si o functie reutilizabila afiseaza suprafata ferestrei si la momentul incarcarii site-ului. 
