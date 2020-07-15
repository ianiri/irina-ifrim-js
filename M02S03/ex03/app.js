// Folosind elementul stage, adauga un event de mouseover care sa afiseze in elementul paragraf mesajul: “Mouseul este pe scena” atunci cand mouseul face hover pe aceasta.
// Folosind mouseout, afiseaza in paragraf mesajul “Mouseul nu este pe scena”. 
// Afiseaza intr-un alt element de cate ori mouseul a fost pe scena.

let countIn = 0;
let countOut = 0;
let sidesCount = 0;

let createMessage = (mouseIn, mouseOut) => {
  return `In: ${mouseIn}, Out: ${mouseOut}.`;
};

let p = document.createElement('p');
document.body.prepend(p);
p.innerText = 'Mouseul nu este pe scena.';

let stageElement = document.querySelector('.stage');

let p2 = document.createElement('p');
p2.innerText = createMessage(countIn, countOut);
p.after(p2);

let sides = document.createElement('p');
sides.innerText = `Mouseul nu a trecut peste laturi.`;
p2.after(sides);

let createSidesMessage = (mouseIn, mouseOut) => {
  return `Numarul de treceri ale mouseului peste laturi este: ${mouseIn + mouseOut}.`;
};


stageElement.addEventListener('mouseover', () => {
    let message = 'Mouseul este pe scena.';
    countIn++;
    p2.innerText = createMessage(countIn, countOut);
    p.innerText = message;
    sides.innerText = createSidesMessage(countIn, countOut);
});

stageElement.addEventListener('mouseout', () => {
  let message = 'Mouseul nu este pe scena.';
  countOut++;
  p2.innerText = createMessage(countIn, countOut);
  p.innerText = message;
  sides.innerText = createSidesMessage(countIn, countOut);
});

// Afiseaza in al treilea paragraf de cate ori mouseul a trecut peste oricare din laturile patratului. 
