class Car {
  constructor(
    left = 100,
    top = 100,
    color,
    topColor,
    wheelColor,
  ) {
    this.left = left;
    this.top = top;
    this.color = color;
    this.topColor = topColor ? topColor : color;
    this.wheelColor = wheelColor ? wheelColor : color;
  }

  areLightsOn = false;
  areHazardsOn = false;

  frame = document.createElement('div');
  car = document.createElement('div');
  carTop = document.createElement('div');
  carBody = document.createElement('div');
  lightBack = document.createElement('div');
  lightFront = document.createElement('div');
  wheelBack = document.createElement('div');
  wheelFront = document.createElement('div');
  wheelCapBack = document.createElement('div');
  wheelCapFront = document.createElement('div');

  turnLightsOn () {
    this.areLightsOn = true;

    this.lightFront.classList.add('light--on');
  }

  turnLightsOff () {
    this.areLightsOn = false;

    this.lightFront.classList.remove('light--on');
  }

  engageBreak () {
    this.areLightsOn = false;

    this.lightBack.classList.add('light--on');
  }

  disenagageBreak () {
    this.areLightsOn = true;

    this.lightBack.classList.remove('light--on');
  }

  toggleHazards () {
    let blink = setInterval(() => {

      this.areHazardsOn = !this.areHazardsOn;
      this.lightFront.classList.toggle('light--on');
      this.lightBack.classList.toggle('light--on');
      return this.areHazardsOn;
    }, 500);

    setTimeout(() => {
      clearInterval(blink);
    }, 6000);
  }

  moveFrame (left, top) {
    if (!left || !top) {
      return;
    }

    this.left = left;
    this.top = top;

    this.frame.style.cssText = `left: ${this.left}px; top: ${this.top}px;`;
  }

  setColor (color) {
    if (!color) {
      return;
    }

    this.color = color;

    this.car.style.backgroundColor = this.color;
  }

  setTopColor (color) {
    if (!color) {
      return;
    }

    this.topColor = color;

    this.carTop.style.backgroundColor = this.topColor;
  }

  setWheelColor (color) {
    if(!color) {
      return;
    }

    this.wheelColor = color;

    this.wheelBack.style.backgroundColor = this.wheelColor;
    this.wheelFront.style.backgroundColor = this.wheelColor;
  }


  render () {
    this.frame.classList.add('frame');
    this.frame.style.cssText = `left: ${this.left}px; top: ${this.top}px;`;

    // create car div
    this.car.classList.add('car', 'frame__car');
    this.car.style.backgroundColor = this.color;
    this.frame.appendChild(this.car);

    // create car top
    this.carTop.classList.add('car__top');
    this.carTop.style.backgroundColor = this.topColor;
    this.car.appendChild(this.carTop);

    // create car body
    this.carBody.classList.add('car__body');
    this.car.appendChild(this.carBody);

    //create lights
    this.lightBack.classList.add('light', 'light--back');
    this.lightFront.classList.add('light', 'light--front');
    this.carBody.appendChild(this.lightBack);
    this.carBody.appendChild(this.lightFront);

    // create wheels
    this.wheelBack.classList.add('wheel', 'car__wheel', 'car__wheel--back');
    this.wheelFront.classList.add('wheel', 'car__wheel', 'car__wheel--front');
    this.wheelBack.style.backgroundColor = this.wheelColor;
    this.wheelFront.style.backgroundColor = this.wheelColor;
    this.carBody.appendChild(this.wheelBack);
    this.carBody.appendChild(this.wheelFront);

    // create hubcaps
    this.wheelCapBack.classList.add('wheel__cap');
    this.wheelCapFront.classList.add('wheel__cap');
    this.wheelBack.appendChild(this.wheelCapBack);
    this.wheelFront.appendChild(this.wheelCapFront);
    
    document.body.appendChild(this.frame);
  }
}

let car = new Car(20, 20, 'darkolivegreen', 'black', 'grey');
car.render();


// Folosind fisierele rezultate din exercitiul 04. Creeaza configurare pentru culoarea rotilor si a capacelor de roti si metode pentru schimbarea lor dinamica. 
// Creeaza metode numite engageBreak() si disenagageBreak() care vor aprinde respectiv stinge farul din spate. 
// Creeaza o metoda numita toggleHazards() care sa functioneze ca avarie si sa aprinda si sa stinga farurile repetat. Foloseste o proprietate numita areHazardsOn pentru a putea tine cont de statusul sistemului.

class Bike {
  constructor (
    left = 400,
    top = 20,
    speed,
    topSpeed = 60,
    topReverseSpeed = -5,
  ) {
    this.left = left;
    this.top = top;
    this.speed = speed;
    this.topSpeed = topSpeed;
    this.topReverseSpeed = topReverseSpeed;
  }

  areLightsOn = false;

  frame = document.createElement('div');
  bike = document.createElement('div');
  bikeBody = document.createElement('div');
  topTube = document.createElement('div');
  forkTube = document.createElement('div');
  seatTube = document.createElement('div');
  backTube = document.createElement('div');
  downTube = document.createElement('div');
  chainTube = document.createElement('div');
  lightFront = document.createElement('div');
  lightBack = document.createElement('div');
  bikeSeat = document.createElement('div');
  seatBase = document.createElement('div');
  seatFront = document.createElement('div');
  bikeHandlers = document.createElement('div');
  base = document.createElement('div');
  bar = document.createElement('div');
  handle = document.createElement('div');
  wheelFront = document.createElement('div');
  wheelBack = document.createElement('div');
  centerFront = document.createElement('div'); 
  spokeFront = document.createElement('div');
  spoke1Front = document.createElement('div');
  spoke2Front = document.createElement('div');
  spoke3Front = document.createElement('div');
  spoke4Front = document.createElement('div');
  centerBack = document.createElement('div'); 
  spokeBack = document.createElement('div');
  spoke1Back = document.createElement('div');
  spoke2Back = document.createElement('div');
  spoke3Back = document.createElement('div');
  spoke4Back = document.createElement('div');
  bikeControls = document.createElement('div');
  speedDisplay = document.createElement('h2');
  stopButton = document.createElement('button');

  moveFrame (left, top) {
    if (!left || !top) {
      return;
    }

    this.left = left;
    this.top = top;

    this.frame.style.cssText = `left: ${this.left}px; top: ${this.top}px;`;
  }

  toggleLight () {
    this.areLightsOn = !this.areLightsOn;
    this.lightFront.classList.toggle('light--on');
    return this.areLightsOn;
  }

  displaySpeed () {
    this.speedDisplay.innerText = bike.speed;
  }

  setSpeed (speed) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;
      this.displaySpeed();
      return;
    }

    if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;
      this.displaySpeed();
      return;
    }

    this.speed = speed;
    this.displaySpeed();
  }

  render () {
    this.frame.classList.add('frame');

    // create bike
    this.bike.classList.add('bike', 'frame__bike');
    this.frame.appendChild(this.bike);
  
    // create bike body
    this.bikeBody.classList.add('bike__body');
    this.bike.appendChild(this.bikeBody);

    // create bike tube-body
    this.topTube.classList.add('top-tube');
    this.bikeBody.appendChild(this.topTube);

    this.forkTube.classList.add('fork-tube');
    this.bikeBody.appendChild(this.forkTube);

    this.seatTube.classList.add('seat-tube');
    this.bikeBody.appendChild(this.seatTube);

    this.backTube.classList.add('back-tube');
    this.bikeBody.appendChild(this.backTube);

    this.downTube.classList.add('down-tube');
    this.bikeBody.appendChild(this.downTube);

    this.chainTube.classList.add('chain-tube');
    this.bikeBody.appendChild(this.chainTube);

    // create bike lights
    this.lightFront.classList.add('bike__light', 'bike__light--front');
    this.bikeBody.appendChild(this.lightFront);

    this.lightBack.classList.add('bike__light', 'bike__light--back');
    this.bikeBody.appendChild(this.lightBack);

    // create bike seat
    this.bikeSeat.classList.add('bike__seat');
    this.bike.appendChild(this.bikeSeat);

    this.seatBase.classList.add('seat-base');
    this.bikeSeat.appendChild(this.seatBase);

    this.seatFront.classList.add('seat-front');
    this.bikeSeat.appendChild(this.seatFront);

    // create handlers
    this.bikeHandlers.classList.add('bike__handlers');
    this.bike.appendChild(this.bikeHandlers);

    this.base.classList.add('base');
    this.bikeHandlers.appendChild(this.base);

    this.bar.classList.add('bar');
    this.bikeHandlers.appendChild(this.bar);

    this.handle.classList.add('handle');
    this.bikeHandlers.appendChild(this.handle);

    // create bike wheels
    this.wheelFront.classList.add('bike__wheel', 'bike__wheel--front');
    this.bike.appendChild(this.wheelFront);

    this.centerFront.classList.add('center');
    this.wheelFront.appendChild(this.centerFront);

    this.spokeFront.classList.add('spoke');
    this.wheelFront.appendChild(this.spokeFront);

    this.spoke1Front.classList.add('spoke', 'spoke--1');
    this.wheelFront.appendChild(this.spoke1Front);

    this.spoke2Front.classList.add('spoke', 'spoke--2');
    this.wheelFront.appendChild(this.spoke2Front);

    this.spoke3Front.classList.add('spoke', 'spoke--3');
    this.wheelFront.appendChild(this.spoke3Front);

    this.spoke4Front.classList.add('spoke', 'spoke--4');
    this.wheelFront.appendChild(this.spoke4Front);

    this.wheelBack.classList.add('bike__wheel', 'bike__wheel--back');
    this.bike.appendChild(this.wheelBack);

    this.centerBack.classList.add('center');
    this.wheelBack.appendChild(this.centerBack);

    this.spokeBack.classList.add('spoke');
    this.wheelBack.appendChild(this.spokeBack);

    this.spoke1Back.classList.add('spoke', 'spoke--1');
    this.wheelBack.appendChild(this.spoke1Back);

    this.spoke2Back.classList.add('spoke', 'spoke--2');
    this.wheelBack.appendChild(this.spoke2Back);

    this.spoke3Back.classList.add('spoke', 'spoke--3');
    this.wheelBack.appendChild(this.spoke3Back);

    this.spoke4Back.classList.add('spoke', 'spoke--4');
    this.wheelBack.appendChild(this.spoke4Back);

    // create bike controls
    this.bikeControls.classList.add('bike__controls');
    this.frame.appendChild(this.bikeControls);

    // create speed display
    this.speedDisplay.classList.add('bike__speed');
    this.bikeControls.appendChild(this.speedDisplay);

    // create stop button
    this.stopButton.classList.add('bike__stop');
    this.stopButton.innerText = 'STOP';
    this.stopButton.addEventListener('click',  () => {
      this.setSpeed(0)
    });
    this.bikeControls.appendChild(this.stopButton);

    document.body.appendChild(this.frame);
  }
}



let bike = new Bike(220, 20, 70);
bike.render();
bike.setSpeed(100);
bike.moveFrame(240, 20);

// let stopBtn = document.querySelector('bike__stop');
// stopBtn.addEventListener('click', bike.setSpeed(0));