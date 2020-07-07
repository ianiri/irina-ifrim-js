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
  }

  setPosY(y) {
    this.posY = y;
  }

  setWidth(w) {
    this.width = w;
  }

  setHeight(h) {
    this.height = h;
  }

  setColor(c) {
    this.color = c; 
  }

  setBorderColor(bc) {
    this.borderColor = bc;
  }
}

class Rectangle extends Shape {
  
  shape = document.createElement('div');
  
  render () {
    this.shape.classList.add('shape', 'shape--rectangle');
    document.body.appendChild(this.shape);
  }
}

let rectangle = new Rectangle();
rectangle.render();

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
    this.shape.classList.add('shape', 'shape--circle');
    this.shape.style.cssText = `top: 200px; left: 100px;`;
    document.body.appendChild(this.shape);
  }
}

let circle = new Circle()
circle.render();

class Square extends Shape {
  constructor (
    posX,
    posY,
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
    this.shape.classList.add('shape', 'shape--square');
    this.shape.style.cssText = `left: 100px;`;
    document.body.appendChild(this.shape);
  }

}

let square = new Square()
square.render();
