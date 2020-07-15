// Foloseste elementul image pentru a afisa intr-un paragraf mesajul “Imaginea s-a incarcat.”, folosind eventul load. 

let image = document.querySelector('.image');
let messagePara = document.querySelector('.message-para');
let urlText = image.getAttribute('src');

image.addEventListener('load', () => {
  messagePara.innerText = 'Imaginea s-a incarcat.';

  image.addEventListener('click', () => {
    alert(`Imaginea cu URLul: ${urlText} s-a incarcat.`);
  });
});

