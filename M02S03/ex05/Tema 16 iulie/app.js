let $window = $(window);
let $widthInfo = $('.message');
let $widthChangeInfo = $('.second-message');
let $surfaceInfo = $('<p>').insertAfter($widthChangeInfo);
let $initialWidth = $window.innerWidth();
let $initialHeight = $window.innerHeight();

let calculateSurface = (L, l) => {
  return `Fereastra are acum suprafata de ${L * l} pixeli.`;
}

$window.on('load', () => {
  $surfaceInfo.text(calculateSurface($initialWidth, $initialHeight));
})

$window.on('resize', () => {
  console.log('Fereastra si-a schimbat dimensiunea.');

  let $newWidth = $window.innerWidth();
  let $newHeight = $window.innerHeight();
  $widthInfo.text($newWidth)

  if ($newWidth !== $initialWidth) {
    $widthChangeInfo.text('Fereastra si-a schimbat latimea.');
  } else {
    $widthChangeInfo.text('');
  }

  $surfaceInfo.text(calculateSurface($newWidth, $newHeight));

  $initialWidth = $newWidth;
})

