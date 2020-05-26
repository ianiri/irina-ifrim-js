var dragos = {
  name: 'Dragos',
  surname: 'Iordache',
  friends: {}
};

var carol = {
  name: 'Carol',
  surname: 'Carolson',
  friends: {}
};

var steven = {
  name: 'Steven',
  surname: 'Stevenson',
  friends: {}
};

var andra = {
  name: 'Andra',
  surname: 'Andrason',
  friends: {}
};

var larry = {
  name: 'Larry',
  surname: 'Larryson',
  friends: {}
};

dragos.friends.larry = larry;
dragos.friends.steven = steven;
dragos.friends.andra = andra;

larry.friends.dragos = dragos;
steven.friends.dragos = dragos;
andra.friends.dragos = dragos;

console.log(dragos);
console.log(dragos.friends);


larry.friends.steven = steven;
steven.friends.larry = larry;

steven.friends.andra = andra;
andra.friends.steven = steven;

carol.friends.andra = andra;
andra.friends.carol = carol;


delete dragos.friends.larry;
delete larry.friends.dragos;

console.warn('Afiseaza numele complet al lui Dragos folosind obiectul Larry.');
console.log(larry.friends.steven.friends.dragos.name + ' ' + larry.friends.steven.friends.dragos.surname);

console.warn('Afiseaza numele complet a lui Larry folosind obiectul Dragos.');
console.log(dragos.friends.steven.friends.larry.name + ' ' + dragos.friends.steven.friends.larry.surname);

console.warn('Folosind obiectul Carol afiseaza numele complet al lui Dragos.');
console.log(carol.friends.andra.friends.dragos.name + ' ' + carol.friends.andra.friends.dragos.surname);

console.warn('Folosind obiectul Andra afiseaza numarul total de caractere al numelui complet al lui Dragos.');
console.log(andra.friends.dragos.name.length + andra.friends.dragos.surname.length);
console.log((andra.friends.dragos.name + andra.friends.dragos.surname).length);
