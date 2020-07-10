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
    this.shape.style.left = `${this.posX}px`;
  }

  setPosY(y) {
    this.posY = y;
    this.shape.style.top = `${this.posY}px`;
  }

  setWidth(w) {
    this.width = w;
    this.shape.style.width = `${this.width}px`;
  }

  setHeight(h) {
    this.height = h;
    this.shape.style.height = `${this.height}px`;
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
    this.shape.style.left = `${this.posX}px`;
    this.shape.style.top = `${this.posY}px`;
    this.shape.style.width = `${this.width}px`;
    this.shape.style.height = `${this.height}px`;
    this.shape.style.backgroundColor = this.color;
    this.shape.style.borderColor = this.borderColor;

    document.body.appendChild(this.shape);
  }
}

let rectangle = new Rectangle(20, 100, 80, 120);
rectangle.render();
rectangle.setPosX(10);
rectangle.setPosY(50);
rectangle.setWidth(60);
rectangle.setHeight(120);
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
    this.radius = br;
    this.shape.style.borderRadius = `${this.radius}px`;
  }

  render () {
    this.shape.classList.add('shape');
    this.shape.style.left = `${this.posX}px`;
    this.shape.style.top = `${this.posY}px`;
    this.shape.style.width = `${this.radius}px`;
    this.shape.style.height = `${this.radius}px`;
    this.shape.style.borderRadius = `${this.radius}px`;
    this.shape.style.backgroundColor = this.color;
    this.shape.style.borderColor = this.borderColor;

    document.body.appendChild(this.shape);
  }
}

let circle = new Circle(200, 300, 200)
circle.render();
circle.setPosX(200);
circle.setPosY(300);
circle.setWidth(100);
circle.setHeight(100);
circle.setBorderRadius(100);
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
    this.shape.style.left = `${this.posX}px`;
    this.shape.style.top = `${this.posY}px`;
    this.shape.style.width = `${this.width}px`;
    this.shape.style.height = `${this.width}px`;
    this.shape.style.backgroundColor = this.color;
    this.shape.style.borderColor = this.borderColor;

    document.body.appendChild(this.shape);
  }

}

let square = new Square(100, 50, 50);
square.render();
square.setPosX(200);
square.setPosY(50);
square.setWidth(70);
square.setHeight(70);
square.setBorderColor('crimson');
square.setColor('yellowgreen');
