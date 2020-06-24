(() => {
  document.addEventListener('DOMContentLoaded', () => {
    let showButton = document.querySelector('#showButton');
    let toggleEventButton = document.querySelector('#toggleEventButton');
    let removeButton = document.querySelector('#removeButtons');
    let eventBound = true;

    let showAlert = () => {
      alert('Butonul a fost apasat');
    }

    showButton.addEventListener('click', showAlert);

    toggleEventButton.addEventListener('click', (event) => {
      let toggleEventButton = event.target;
      let paragraphElement = document.createElement('p');
      if (eventBound === true) {
        showButton.removeEventListener('click', showAlert);
        eventBound = false;
        toggleEventButton.innerText = 'Porneste afisarea';
        paragraphElement.innerText = 'Alerta nu va fi afisata.';
      } else {
        showButton.addEventListener('click', showAlert);
        eventBound = true;
        toggleEventButton.innerText = 'Opreste afisarea';
        paragraphElement.innerText = 'Alerta va fi afisata.';
      }

      document.body.appendChild(paragraphElement);
    });

    removeButton.addEventListener('click', () => {
      let confirmation = confirm('Esti sigur ca vrei sa elimini butoanele?');

      if (confirmation === true) {
        showButton.remove();
        toggleEventButton.remove();
      }
    });
  });
})();

// In functia adaugata ca parametru la addEventListener keywordul this face referinta la elementul de DOM al butonului. Folosind proprietatea innerText schimba mesajul Opreste Afisarea in Porneste Afisarea in functie de statusul evenimentelor. 
// Folosind metode deja cunoscute, adauga un paragraf in DOM care contine textul: “Alerta va fi afisata”, respective “Alerta nu va fi afisata” in functie de statusul evenimentelor. 
// Adauga un buton in document pe care cand apesi, sunt eliminate celelate butoane cu metoda .remove()
// Folosind metoda confirm(), modifica codul de la punctul anterior astfel incat utilizatorul sa confirme eliminarea elementelor din DOM: “Esti sigur ca vrei sa stergi butoanele din DOM?”.
// https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm