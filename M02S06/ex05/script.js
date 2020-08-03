// Folosind ambele metode de citit si de scris, citeste textul scris in my-file.txt si adauga-i data curenta astfel incat sa poti scrie intr-un alt fisier (nume la alegere) “Invat node.js, azi, zz.ll.aaaa!” Atentie la punctuatie. Foloseste template strings.

const fs = require('fs');

  let today = new Date();
  let day = today.getDate() < 10 ? '0' + today.getDate() : today.getDate();
  let month = today.getMonth() < 10 ? '0' + (today.getMonth()+1) : today.getMonth()+1;
  let year = today.getFullYear();
  let currentDate = day + '.' + month + '.' + year;
  let myFileText = fs.readFileSync('./my-file.txt', 'utf8');
  let requiredText = `${myFileText}, azi, ${currentDate}!`;

  fs.writeFileSync('./required-file.txt', requiredText);
