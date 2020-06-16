// let button = document.getElementById('clicker');

// button.addEventListener('click', () => {
//   alert('Ai apasat butonul!');
// });




// Folosind codul de la exercitiul 08, numeste functia care ruleaza la click clickHandler si foloseste-i numele ca parametru al metodei addEventListener in locul celei anonime. 
let button = document.getElementById('clicker');
let clickHandler = () => {
    alert('Ai apasat butonul!');
};

// calback
button.addEventListener('click', clickHandler);


//   Adauga un buton pe care scrie Elimina Evenimentul. 
// La click pe acest buton nou, foloseste metoda removeEventListener al variabilei button si foloseste numele clickHandler ca parametru.
let removeButton = document.getElementById('remover');

removeButton.addEventListener('click', () => {
  button.removeEventListener('click', clickHandler);
});