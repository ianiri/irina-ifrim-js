let displayAlert = () => {
  alert('Butonul a fost apasat');
}

$(document).ready(() => {
  let windowWidth = window.innerWidth;
  let $buttonElement = $('.btn');

  if (windowWidth >= 650) {
    $buttonElement.on('click', displayAlert);
  }

  $(window).on('resize', () => {
    let windowWidth = window.innerWidth;
    
    if (windowWidth >= 650) {
      $buttonElement.on('click', displayAlert);
    } else {
      $buttonElement.off('click', displayAlert);
    }
  })

})