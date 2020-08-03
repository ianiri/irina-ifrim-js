// Creaza un script numit cerc.js care sa calculeze suprafata unui cerc folosind parametrii de intrare in consola

let radius = process.argv[2];
let circleSurface = (Math.PI * Math.pow(radius, 2)).toFixed(0)

console.log(`Suprafata cercului este ${circleSurface}`);
