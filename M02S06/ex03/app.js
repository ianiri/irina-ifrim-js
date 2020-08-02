// Creaza in director un script node care sa citeasca informatii din fisierul file.txt si sa le afiseze in consola

const fs = require('fs');

const data = fs.readFileSync('./file.txt', 'utf8');
console.log(data);