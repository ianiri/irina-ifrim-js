class Shape {
  constructor(
    posX,
    posY, 
    width, 
    height, 
    color, 
    borderColor
  ) {
    this.posX = posX; 
    this.posY = posY; 
    this.height = height; 
    this.width = width; 
    this.color = color; 
    this.borderColor = borderColor;
  }

  setPosX(x) {
    this.posX = x;
    this.shape.style.cssText = `left: ${this.posX}px;`;
  }

  setPosY(y) {
    this.posY = y;
    this.shape.style.cssText = `top: ${this.posY}px;`;
  }

  setWidth(w) {
    this.width = w;
    this.shape.style.cssText = `width: ${this.width}px;`;
  }

  setHeight(h) {
    this.height = h;
    this.shape.style.cssText = `height: ${this.height}px;`;
  }

  setColor(c) {
    this.color = c;
    this.shape.style.backgroundColor = this.color;
  }

  setBorderColor(bc) {
    this.borderColor = bc;
    this.shape.style.borderColor = this.borderColor;
  }

}

class Rectangle extends Shape {
  shape = document.createElement('div');

  render () {
    this.shape.classList.add('shape');
    this.shape.style.cssText = `left: ${this.posX}px; top: ${this.posY}px; width: ${this.width}px; height: ${this.height}px;`;

    document.body.appendChild(this.shape);
  }
}

let rectangle = new Rectangle(10, 50, 60, 120);
rectangle.render();
rectangle.setBorderColor('red');

class Circle extends Shape {
  constructor(
    posX,
    posY, 
    radius, 
    color, 
    borderColor
  ) {
    super(
      posX,
      posY, 
      radius, 
      color, 
      borderColor
    );

    this.borderRadius = this.setBorderRadius(radius);
  }

  shape = document.createElement('div');

  setBorderRadius(br) {

    return br;
  }

  render () {
    this.shape.classList.add('shape');
    this.shape.style.cssText = `left: ${this.posX}px; top: ${this.posY}px; width: ${this.borderRadius}px; height: ${this.borderRadius}px; border-radius: ${this.borderRadius}px`;
    document.body.appendChild(this.shape);
  }
}

let circle = new Circle(200, 300, 100)
circle.render();
circle.setBorderColor('darkblue');

class Square extends Shape {
  constructor (
    posX = 100,
    posY = 50,
    width,
    color,
    borderColor,
  ) {
    super (
    posX, 
    posY, 
    width,
    color, 
    borderColor,
    );
  }

  shape = document.createElement('div');

  render () {
    this.shape.classList.add('shape');
    this.shape.style.cssText = `left: ${this.posX}px; top: ${this.posY}px; width: ${this.width}px; height: ${this.width}px;`;

    document.body.appendChild(this.shape);
  }

}

let square = new Square(100, 50, 50);
square.render();
square.setBorderColor('crimson');
square.setColor('yellowgreen');
