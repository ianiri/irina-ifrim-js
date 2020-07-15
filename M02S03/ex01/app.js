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

  displaySpeed () {
    console.log(`Viteza masinii este: ${this.speed}.`);
  }

  accelerate (num) {
    if (typeof num === 'undefined') {
      this.speed++;
    } else {
      this.speed = this.speed + num;
    }
    

    this.displaySpeed();

    return this;
  }

  decelerate (num) {
    if (typeof num === 'undefined') {
      this.speed--;
    } else {
      this.speed = this.speed - num;
    }

    this.displaySpeed();

    return this;
  }

  setSpeed (num) {
    this.speed = num;

    this.displaySpeed();

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

// Modifica metodele accelerate si decelerate astfel incat sa primeasca un coeficient cu care sa mareasca sau sa reduca viteza si pastreaza conceptele de chaining.  Daca metodele nu sunt invocate cu un parametru explicit, sa incrementeze sau sa decrementeze cu o unitate.
// Ridica viteza cu 12 apoi coboar-o cu 3 si apoi inca o data cu 4. 
// Afiseaza viteza noua in DOM.
// Creeaza o metoda chainable noua, numita setSpeed() care sa seteze viteza la o anumita valoare (fara limite superioare sau inferioare pentru simplitate).
// Folosind noua metoda seteaza viteza la 4, apoi accelereaza la 5 folosind chaining.
// Afiseaza noua valoare in DOM.

audi.accelerate(12).decelerate(3).decelerate(4);

audi.setSpeed(4).accelerate(5);

let p2 = document.createElement('p');
p2.innerText = `Masina are viteza finala de ${audi.speed} km/h.`;

p.after(p2);

