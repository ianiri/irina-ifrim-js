let car = {
  make: 'Audi',
  color: 'black',
  wheels: 4,
  speed: 50,
  isTrunkOpen: false,
  areLightsOn: false,
  topSpeed: 160,
  topReverseSpeed: -50,
  accelerate: function () {
    this.speed++;
  },
  decelerate: function () {
    this.speed--;
  },
  stop: function () {
    this.speed = 0;
  },
  setSpeed: function (x) {
    if (x <= this.topSpeed & x >= this.topReverseSpeed) {
      return this.speed = x;
    } else {
      return 'Speed not good';
    }
  },
  openTrunk: function () {
    this.isTrunkOpen = true;
  },
  closeTrunk: function () {
    this.isTrunkOpen = false;
  },
  turnLightsOn: function () {
    this.areLightsOn = true;
  },
  turnLightsOff: function () {
    this.areLightsOn = false;
  },
  flashLights: function () {
    this.turnLightsOn();

    window.setTimeout(() => {
      this.turnLightsOff();
    }, 3000);
  }
};

// Afiseaza propozitia: "Masina era marca make si se deplasa cu speed km/h".
console.log(`Masina are marca ${car.make} si se deplaseaza cu ${car.speed} km/h.`)
// Decelereaza masina cu 5 unitati apoi afisaza propozitia: "Viteza noua este speed km/h".
car.decelerate();
car.decelerate();
car.decelerate();
car.decelerate();
car.decelerate();

console.log(`Viteza noua este ${car.speed} km/h.`);
// Adauga o metoda numita stop() care sa faca proprietatea speed 0, apoi afiseaza viteza.
car.stop();
console.log(`Viteza noua e ${car.speed} km/h.`);
// Adauga o proprietate numita topSpeed si asigneaza-i valoarea 160.
// Adauga o proprietate numita topReverseSpeed si asigneaza-i valoarea -50.
// Adauga  o metoda numita setSpeed() care sa poata primi un parametru fix pentru viteza. Metoda trebuie sa verifice ca nu se depasesc limitele inferioare si superioare, caz in care se folosesc proprietatile topSpeed si topReverseSpeed
console.log(car.setSpeed(100));
console.log(car.setSpeed(-90));
console.log(car.setSpeed(170));

