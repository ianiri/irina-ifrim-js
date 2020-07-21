let $buttonElement = $('.btn');
let $displayElements = $('.display');

$buttonElement.on('click', () => {
  let windowWidth = window.innerWidth;
  let targetClassName = 'low-res';

  if (windowWidth >= 650) {
    targetClassName = 'mid-res';
  }

  if (windowWidth > 1000) {
    targetClassName = 'high-res';
  }

  for (let i = 0; i < $displayElements.length; i++) {
    $displayElement = $($displayElements[i]);
    if ($displayElement.hasClass(targetClassName)) {
      let $clickInfo = $('<p>', {
        text: 'Butonul a fost apasat in aceasta rezolutie.'
      }).appendTo($displayElement);
    }
  }
});