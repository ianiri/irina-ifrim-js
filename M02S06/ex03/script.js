// Creaza in director un alt script node care sa citeasca informatii din fisierul file.txt, sa adauge textului citit (din fisier) propozitia: “This is our node script!”. In final, afiseaza rezultatul in consola. 

const fs = require('fs');

const data = fs.readFileSync('./file.txt', 'utf8');
console.log(`${data} This is our node script! `);