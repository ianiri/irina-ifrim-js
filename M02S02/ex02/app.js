// Afiseaza datele persoanei din formular in DOM. 
// In fieldsetul Detalii adauga un input de abilitati numit skills si un buton de + in dreptul sau. La fiecare apasare a butonului, daca in input exista text, afiseaza abilitatea noua intr-o lista neordonata.
// In dreptul fiecarui element din lista adauga un buton de stergere. In momentul in care se apasa sterge elementul.
// https://api.jquery.com/remove/ 

$(document).ready(() => {
  let $form = $('#personForm');
  let $personDetails = $('.person-details');

  $form.on('submit', (event) => {
    let $formFields = $(event.currentTarget).serializeArray();
    let $personFragment = $('<div>');

    $personDetails.empty();

    $formFields.forEach((field) => {
      $personFragment.append($('<p>', {
        text: `${field.name[0].toUpperCase()}${field.name.slice(1)}: ${field.value}`,
      }));
    });

    $personFragment.appendTo($personDetails);
    // $personDetails.empty().append($personFragment);
    
    event.currentTarget.reset();
    event.preventDefault();
  });
});