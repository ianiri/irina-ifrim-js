// In mod similar creaza un script numit dreptunghi.js care sa poata calcula suprafata unui dreptunghi din parametrii dati 

let length = process.argv[2];
let width = process.argv[3];

console.log(`Suprafata dreptunghiului este ${length * width}`);

// pentru un dreptunghi cu laturi de 100 si 20 se ruleaza node quad.js 100 20