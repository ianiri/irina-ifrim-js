$(document).ready(() => {
  let $stage = $('.stage');
  let $controls = $('.controls');
  let $hero = $('.hero');

  function moveHero(axis, direction, diagonal, diagonalDirection) {
    let step = 20;
    let cssProperty = axis === 'x' ? 'left' : 'top';
    let $currentPosition = $hero.css(cssProperty) === '0px' ? 0 : $hero.css(cssProperty);
    let $unitlessPosition = parseInt($currentPosition);
    let $newPosition = direction === 'fw' ? $unitlessPosition + step : $unitlessPosition - step;

    let cssPropertyDiagonal = diagonal === 'yleft' ? 'left'
                              : diagonal === 'x' ? 'left'
                              : 'top';
    let $currentPositionDiagonal = $hero.css(cssPropertyDiagonal) === '0px' ? 0 : $hero.css(cssPropertyDiagonal);
    let $unitlessPositionDiagonal = parseInt($currentPositionDiagonal);
    let $newPositionDiagonal = diagonalDirection === 'fw' ? $unitlessPositionDiagonal + step : $unitlessPositionDiagonal -step;

    if ($newPosition <= 0 && $newPositionDiagonal <= 0) {
      $newPosition = 0;
      $newPositionDiagonal = 0;
    }

    if ($newPosition < 0) {
      $newPosition = 0;
      $newPositionDiagonal = $unitlessPositionDiagonal;
    }

    if ($newPosition >= $stage.innerWidth() - $hero.innerWidth() && $newPositionDiagonal <= 0) {
      $newPosition = $stage.innerWidth() - $hero.innerWidth();
      $newPositionDiagonal = 0;
    }

    if ($newPosition > $stage.innerWidth() - $hero.innerWidth()) {
      $newPosition = $stage.innerWidth() - $hero.innerWidth();
      $newPositionDiagonal = $unitlessPositionDiagonal === $stage.innerWidth() - step ? $stage.innerWidth() - $hero.innerWidth() : $unitlessPositionDiagonal;;
    }

    if ($newPosition > 0 && $newPositionDiagonal > $stage.innerWidth() - $hero.innerWidth()) {
      $newPosition = $unitlessPosition;
      $newPositionDiagonal = $stage.innerWidth() - $hero.innerWidth();
    }

    if ($newPositionDiagonal < 0) {
      $newPosition = $unitlessPosition;
      $newPositionDiagonal = 0;
    }

    if (axis === 'y' && $newPosition > $stage.innerHeight() - $hero.innerHeight()) {
      $newPosition = $stage.innerHeight() - $hero.innerHeight();
      $newPositionDiagonal = $unitlessPositionDiagonal === $stage.innerHeight() - step ? $stage.innerHeight() - $hero.innerHeight() : $unitlessPositionDiagonal;
    }

    $hero.css(cssProperty, `${$newPosition}px`) ;
    $hero.css(cssPropertyDiagonal, `${$newPositionDiagonal}px`) ;
  }

  $(document).on('keydown', (event) => {
    let axis = 'x';
    let normalizedDirection = 'fw';
  
    switch (event.code) {
      case 'ArrowRight':
        axis = 'x';
        normalizedDirection = 'fw';
        moveHero(axis, normalizedDirection, diagonal = axis, diagonalDirection = normalizedDirection);
        break;
      case 'ArrowLeft':
        axis = 'x';
        normalizedDirection = 'back';
        moveHero(axis, normalizedDirection, diagonal = axis, diagonalDirection = normalizedDirection);
        break;
      case 'ArrowDown':
        axis = 'y';
        normalizedDirection = 'fw';
        moveHero(axis, normalizedDirection, diagonal = axis, diagonalDirection = normalizedDirection);
        break;
      case 'ArrowUp':
        axis = 'y';
        normalizedDirection = 'back';
        moveHero(axis, normalizedDirection, diagonal = axis, diagonalDirection = normalizedDirection);
        break;
    }
  });

  $controls.on('click', 'button', (event) => {
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
  })
});

