// Foloseste elementul image pentru a afisa intr-un paragraf mesajul “Imaginea s-a incarcat.”, folosind eventul load. 

let image = document.querySelector('.image');
let messagePara = document.querySelector('.message-para');

image.addEventListener('load', () => {
  messagePara.innerText = 'Imaginea s-a incarcat.';

  image.addEventListener('click', () => {
    let urlText = image.getAttribute('src');
    alert(`Imaginea cu URLul: ${urlText} s-a incarcat.`);
  });
});

// Adauga in HTML, in paragraf, textul: “Imaginea se incarca…” si schimba textul din paragraf in “Imaginea s-a incarcat.” atunci cand aceasta s-a incarcat. 
// Atunci cand imaginea s-a incarcat, adauga pe elementul image un eveniment de click care sa afiseze intr-o alerta mesajul: “Imaginea cu URLul: … s-a incarcat.” 
