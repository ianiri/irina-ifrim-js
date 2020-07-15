class Car {
  constructor(
    make,
    color,
    wheels,
    speed
  ) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
  }

  displaySpeed () {}

  accelerate () {
    this.speed++;

    displaySpeed();

    return this;
  }

  decelerate () {
    this.speed--;

    displaySpeed();

    return this;
  }
}

let audi = new Car('Audi', 'black', 4, 50);

// audi.accelerate();
// audi.accelerate();
// audi.accelerate();
// audi.accelerate();

// Optimizeaza codul din exercitiu astfel incat sa folosesti chaining pentru a accelera
audi.accelerate().accelerate().accelerate().accelerate();

// Converteste si metoda decelerate la metoda chainable.
// Adu instanta masinii la viteza 55 apoi redu la 52, folosind chaining.
audi.accelerate().decelerate().decelerate().decelerate();

console.log(audi.speed);

// Afiseaza in DOM (prin orice metoda) viteza instantei dupa lantul de metode.
let p = document.createElement('p');
p.innerText = `Masina are viteza de ${audi.speed} km/h.`;

document.body.appendChild(p);

// //   decelerate (param) {
//   this.speed = this.speed - param;

//   return this;
// }
