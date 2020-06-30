class Car {
  constructor (
    make,
    color,
    wheels,
    speed
  ) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
    this.topSpeed = 160;
    this.reverseTopSpeed = -50;
  }

  isTrunkOpen = false;
  areLightsOn = false;

  accelerate () {
    this.speed++;
  }

  decelerate () {
    this.speed--;
  }

  stop () {
    this.speed = 0;
    console.log(this.speed);
  }

  setSpeed (speed) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;
      return;
    }

    if (speed < this.reverseTopSpeed) {
      this.speed = this.reverseTopSpeed;
      return;
    }

    this.speed = speed;
  }

  toggleTrunk () { 
    this.isTrunkOpen = !this.isTrunkOpen;
    return this.isTrunkOpen;
  }

  turnLightsOn () {
    this.areLightsOn = true;
  }

  turnLightsOff () {
    this.areLightsOn = false;
  }

  flashLights () {
    this.turnLightsOn();

    setTimeout(() => {
      this.turnLightsOff();
    }, 3000);
  }
}

let audi = new Car('Audi', 'black', 4, 50);

// Instantiaza o alta masina (Opel, red, cu 4 roti si viteza 3). O poti salva intr-o variabila numita opel.
let opel = new Car('Opel', 'red', 4, 3);

// Adauga o metoda numita stop() care sa faca proprietatea speed 0, apoi afiseaza viteza.
opel.stop();

// Adauga o proprietate numita topSpeed si asigneaza-i valoarea 160.
// Adauga o proprietate numita topReverseSpeed si asgineaza-i valoarea -50.
// Adauga  o metoda numita setSpeed() care sa poata primi un parametru fix pentru viteza. Metoda trebuie sa verifice ca nu se depasesc limitele inferioare si superioare, caz in care se folosesc proprietatile topSpeed si topReverseSpeed
opel.setSpeed(200);
console.log(opel.speed);

// Adauga o proprietate booleana numita isTrunkOpen si asigneaza-i valoarea false. 
// !inlocuit cu toggle - Adauga metode numite openTrunk() si closeTrunk() care sa seteze proprietatea isTrunkOpen pe true, respectiv false.
// Adauga o proprietate booleana numita areLightsOn si asigneaza-i valoarea false. 
// Adauga metode numite turnLightsOn() si turnLightsOff() care sa manipuleze valoarea. 
// Adauga o metoda numita flashLights() care sa apeleze cele doua metode in succesiune, folosind metoda window.setTimeout().


// Adauga cele doua variabile (opel si audi) intr-un array numit cars. (var cars = [opel, audi])
// Ruleaza o bucla prin forEach si afiseaza propozitiile (pentru fiecare din masini)
// “Masina era marca make si se deplasa cu speed km/h”
// In fiecare iteratie, decelereaza masina cu 5 unitati, apoi afiseaza: “Viteza noua este speed km/h”

let cars = [audi, opel];
cars.forEach((car) => {
  console.log(`Masina era marca ${car.make} si se deplaseaza cu ${car.speed} km/h.`);
  car.setSpeed(car.speed - 5);
  console.log(`Viteza noua este de ${car.speed}`);
});