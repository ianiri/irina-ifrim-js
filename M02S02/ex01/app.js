// var p = document.createElement('p');
// p.innerText = 'Textul care trebuie sa apara in paragraf';
// p.id = 'myParagraph';
// p.classList.add('clase', 'de', 'css');

// document.body.appendChild(p);


let $p = $('<p>', {
  id: 'myparagraph',
  text: 'Textul care trebuie sa apara in paragraf.',
  class: 'clase de css'
});

$p.appendTo($('body'));


// Salveaza obiectul jQuery $('body') intr-o variabila numita $body si foloseste-o in metoda appendTo().
// https://api.jquery.com/appendTo/ 
// Creaza inca un paragraf cu idul message care sa contina textul: “Parola nu trebuie sa fie mai mica de 5 caractere.”.
// Folosind metoda append a obiectului $body, adauga noul obiect in DOM. 
// https://api.jquery.com/append/ 
// Dupa ce l-ai adaugat, foloseste dupa 5 secunde metoda addClass a noului obiect pentru a ii adauga clasa error.
// https://api.jquery.com/addClass/ 

let $body = $('body');
let $p2 = $('<p>', {
  id: 'message',
  text: 'Parola nu trebuie sa fie mai mica de 5 caractere.',
});

// $p2.appendTo($body);
$body.append($p2);

setTimeout(() => {
  $p2.addClass('error');
}, 5000);


// Selecteaza paragraful anterior (#myParagraph) si schimba textul sau in textul: “Am schimbat dinamic acest paragraf.” Folosind metoda .text() 
// https://api.jquery.com/text/
// Creeaza un element de tip span cu idul example si cu textul “ParolaMea” si adauga-l la cel de-al doilea paragraf folosind metoda .appendTo()
// Creeaza un element de tip div cu clasa container apoi imbraca cele doua paragrafe cu el folosind metoda .wrap() 
// https://api.jquery.com/wrap/ 
// Creeaza un element de tip h2 cu textul “Mesaje” si adauga-l la inceputul div-ului cu clasa container folosind metoda .prependTo()
// https://api.jquery.com/prependTo/

$p.text('Am schimbat dinamic acest paragraf.');

let $extraElement = $('<span>', {
  id: 'example',
  text: ' ParolaMea',
}).appendTo($p2);

// $extraElement.appendTo($p2);

let $wrappingDiv = $('<div>', {
  class: 'container'
});

// $p.wrap($wrappingDiv);
// $p2.wrap($wrappingDiv);

// $('p').wrap($wrappingDiv);

// $().add($p).add($p2).wrap($wrappingDiv);

$body.append($wrappingDiv);
$p.appendTo($wrappingDiv);
$p2.appendTo($wrappingDiv);

let $msgElement = $('<h2>', {
  text: 'Mesaje',
})

$msgElement.prependTo($wrappingDiv);

// Creaza un div cu clasa navigation si adauga-l dupa divul anterior, folosind metoda .after() https://api.jquery.com/after/ 
let $navigationDiv = $('<div>', {
  class: 'navigation'
});
$wrappingDiv.after($navigationDiv);

// Creeaza un element de tip ancora cu textul Primul Link si clasa nav-link si adauga-l la divul cu clasa navigation.
let $navigationAnchor = $('<a>', {
  href: '#',
  class: 'nav-link',
  text: 'Primul link',
}).appendTo($navigationDiv);

// Creeaza un element h2 cu textul “Navigatie” si folosind metoda .before() adauga-l la divul cu clasa navigation. Selectorul lui before va trebui sa fie selectorul ancorei pentru a functiona corect.
// Exemplu: .navigation .nav-link
// https://api.jquery.com/before/
let $navigationTitle = $('<h2>', {
  text: 'Navigatie'
});
$navigationAnchor.before($navigationTitle);

// Creeaza un element de tip sup cu textul 1 si folosind metoda .prepend() adauga-l in ancora .nav-link
// https://api.jquery.com/prepend
$navigationAnchor.prepend(`<sup>1</sup>`);

// Creeaza un element de tip h1 cu textul: “Invat jQuery” si folosind metoda .before() adauga-l deasupra divului .container 
$wrappingDiv.before(`<h1>Invat jQuery</h1>`);

// Adauga prin orice metoda un paragraf cu textul “Documentatia jQuery poate fi gasita aici.” Cuvantul aici va fi o ancora care va deschide intr-o pagina noua documentia jQuery. Atributele target si href pot fi setate in acelasi fel cum sunt setate cele text sau class.
let $documentationInfo = $(`<p>Documentatia se afla <a href="https://jquery.com/">aici</a>.</p>`).appendTo($navigationDiv);

let $documentationInfo2 = $('<p class="err">Documentatia jQuery se afla <span>aici</span>.</p>').appendTo($navigationDiv);
$('p span').empty()
           .replaceWith($('<a>', {
             href: '//jquery.com',
             text: 'aici',
           }));