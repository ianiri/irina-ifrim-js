let calculateRectangleArea = function (L, l) {
  let surface = L * l;

  return surface;
};

console.warn('Stiind ca un camp dreptunghiular de hamei produce 25kg/m2 . Ce diferenta de productie este intre un teren de 100m pe 250m si unul de 350m pe 200m?');
let firstSurface = calculateRectangleArea(100, 250);
let secondSurface = calculateRectangleArea(350, 200);
const barleyYield = 25;
let firstSurfaceQuantity = firstSurface * barleyYield;
let secondSurfaceQuantity = secondSurface * barleyYield;

console.log(`Diferenta este ${secondSurfaceQuantity - firstSurfaceQuantity}.`);


console.warn('Stiind ca din 10kg de hamei produc 2.5l de bere, cati litri de bere va produce un teren de 400m pe 370m?');
const barleyQty = 10;
const beerYield = 2.5;
let thirdSurface = calculateRectangleArea(400, 370);
let thirdSurfaceQuantity = thirdSurface * barleyYield;
let thirdSurfaceBeer = thirdSurfaceQuantity / barleyQty * beerYield;

console.log(`Cantitatea de bere este ${thirdSurfaceBeer}.`)