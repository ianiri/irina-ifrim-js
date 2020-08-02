// Folosind metoda writeFileSync() scrie intr-un fisier numit my-file.txt textul: “Invat node.js”
const fs = require('fs');

fs.writeFileSync('./my-file.txt', 'Invat node.js');
