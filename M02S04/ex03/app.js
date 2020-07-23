document.addEventListener('DOMContentLoaded', () => {
  let stage = document.querySelector('.stage');
  let controls = document.querySelector('.controls');
  let hero = document.querySelector('.hero');


  controls.addEventListener('click', (event) => {
    if (event.target !== undefined && event.target.nodeName === 'BUTTON') {
      let button = event.target;
      let direction = button.id.split('-')[1];
      let axis = 'x';
      let normalizedDirection = 'fw';

      switch(direction) {
        case 'right':
          axis = 'x';
          normalizedDirection = 'fw';
          moveHero(axis, normalizedDirection, diagonal = axis, diagonalDirection = normalizedDirection);
          break;
        case 'left':
          axis = 'x';
          normalizedDirection = 'back';
          moveHero(axis, normalizedDirection, diagonal = axis, diagonalDirection = normalizedDirection);
          break;
        case 'down':
          axis = 'y';
          normalizedDirection = 'fw';
          moveHero(axis, normalizedDirection, diagonal = axis, diagonalDirection = normalizedDirection);
          break;
        case 'up':
          axis = 'y';
          normalizedDirection = 'back';
          moveHero(axis, normalizedDirection, diagonal = axis, diagonalDirection = normalizedDirection);
          break;
        case 'downRight':
          axis = 'y';
          diagonal = 'yleft';
          normalizedDirection = 'fw';
          diagonalDirection = 'fw'
          moveHero(axis, normalizedDirection, diagonal, diagonalDirection);
          break;
        case 'downLeft':
          axis = 'y';
          diagonal = 'yleft';
          normalizedDirection = 'fw';
          diagonalDirection = 'back'
          moveHero(axis, normalizedDirection, diagonal, diagonalDirection);
          break;
        case 'upLeft':
          axis = 'y';
          diagonal = 'yleft';
          normalizedDirection = 'back';
          diagonalDirection = 'back'
          moveHero(axis, normalizedDirection, diagonal, diagonalDirection);
          break;
        case 'upRight':
          axis = 'x';
          diagonal = 'y';
          normalizedDirection = 'fw';
          diagonalDirection = 'back'
          moveHero(axis, normalizedDirection, diagonal, diagonalDirection);
          break;
      }
    }
  });

  document.addEventListener('keydown', (event) => {
    let axis = 'x';
    let normalizedDirection = 'fw';

    switch (event.keyCode) {
      case 39:
        axis = 'x';
        normalizedDirection = 'fw';
        moveHero(axis, normalizedDirection, diagonal = axis, diagonalDirection = normalizedDirection);
        break;
      case 37:
        axis = 'x';
        normalizedDirection = 'back';
        moveHero(axis, normalizedDirection, diagonal = axis, diagonalDirection = normalizedDirection);
        break;
      case 40:
        axis = 'y';
        normalizedDirection = 'fw';
        moveHero(axis, normalizedDirection, diagonal = axis, diagonalDirection = normalizedDirection);
        break;
      case 38:
        axis = 'y';
        normalizedDirection = 'back';
        moveHero(axis, normalizedDirection, diagonal = axis, diagonalDirection = normalizedDirection);
        break;
    }
  })

  function moveHero(axis, direction, diagonal, diagonalDirection) {
    let step = 20;
    let cssProperty = axis === 'x' ? 'left' : 'top';
    let currentPosition = hero.style[cssProperty].length === 0 ? 0 : hero.style[cssProperty];
    let unitlessPosition = parseInt(currentPosition);
    let newPosition = direction === 'fw' ? unitlessPosition + step : unitlessPosition - step;

    let cssPropertyDiagonal = diagonal === 'yleft' ? 'left'
                            : diagonal === 'x' ? 'left'
                            : 'top';
    let currentPositionDiagonal = hero.style[cssPropertyDiagonal].length === 0 ? 0 : hero.style[cssPropertyDiagonal];
    let unitlessPositionDiagonal = parseInt(currentPositionDiagonal);
    let newPositionDiagonal = diagonalDirection === 'fw' ? unitlessPositionDiagonal + step : unitlessPositionDiagonal - step;


    if (newPosition <= 0 && newPositionDiagonal <= 0) {
      newPosition = 0;
      newPositionDiagonal = 0;
    }

    if (newPosition < 0) {
      newPosition = 0;
      newPositionDiagonal = unitlessPositionDiagonal;
    }

    if (newPosition >= stage.clientWidth - hero.clientWidth && newPositionDiagonal <= 0) {
      newPosition = stage.clientWidth - hero.clientWidth;
      newPositionDiagonal = 0;
    }

    if (newPosition > stage.clientWidth - hero.clientWidth) {
      newPosition = stage.clientWidth - hero.clientWidth;
      newPositionDiagonal = unitlessPositionDiagonal === 700 ? stage.clientWidth - hero.clientWidth : unitlessPositionDiagonal;;
    }

    if (newPosition > 0 && newPositionDiagonal > stage.clientWidth - hero.clientWidth) {
      newPosition = unitlessPosition;
      newPositionDiagonal = stage.clientWidth - hero.clientWidth;
    }

    if (newPositionDiagonal < 0) {
      newPosition = unitlessPosition;
      newPositionDiagonal = 0;
    }

    if (axis === 'y' && newPosition > stage.clientHeight - hero.clientHeight) {
      newPosition = stage.clientHeight - hero.clientHeight;
      newPositionDiagonal = unitlessPositionDiagonal === 400 ? stage.clientHeight - hero.clientHeight : unitlessPositionDiagonal;
    }

    hero.style[cssProperty] = `${newPosition}px`;
    hero.style[cssPropertyDiagonal] = `${newPositionDiagonal}px`;
  }
});