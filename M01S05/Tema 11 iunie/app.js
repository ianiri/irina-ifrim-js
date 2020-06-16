let calculateRectangleArea = function (L, l) {
  let surface = L * l;

  return surface;
};

console.warn('Stiind ca un camp dreptunghiular de grau produce 32kg/m2  de faina. Afla si afiseaza cate kilograme de paine produce un camp de 300 pe 200 metri stiind ca dintr-un kilogram de faina ies 2.5 kg de paine.');
const flourQty = 32;
const breadQty = 2.5;
let firstSurface = calculateRectangleArea(300, 200);
let firstSurfaceFlourQty = firstSurface * flourQty;

console.log(`Cantitatea de paine produsa de teren este de ${firstSurfaceFlourQty * breadQty} kg.`);


console.warn('Dar doua campuri de 150 pe 200 si 500 pe 300 in total?');
let secondSurface = calculateRectangleArea(150, 200);
let secondSurfaceFlourQty = secondSurface * flourQty;
let secondSurfaceBreadQty = secondSurfaceFlourQty * breadQty;
let thirdSurface = calculateRectangleArea(500, 300);
let thirdSurfaceFlourQty = thirdSurface * flourQty;
let thirdSurfaceBreadQty = thirdSurfaceFlourQty * breadQty;

console.log(`Cantitatea totala de paine produsa de cele 2 campuri, este ${secondSurfaceBreadQty + thirdSurfaceFlourQty} kg.`)