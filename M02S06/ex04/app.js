// In director se afla trei fisiere cu o structura aleatorie. 
// Creaza un script node care sa citeaca din cele trei fisiere, iar in final sa afiseze in consola propozitia:
// “La Pixellab se invata programare si design!”. Atentie la punctuatie. Foloseste template strings pentru a lucra mai usor.

const fs = require('fs');

const firstText = fs.readFileSync('./another.txt', 'utf8');
const middleText = fs.readFileSync('./my-file.txt', 'utf8');
const finalText = fs.readFileSync('./dir/this-other-file.txt', 'utf8');

console.log(`${firstText} ${middleText} ${finalText}!`);