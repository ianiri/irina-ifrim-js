let breakpoint = 650;

function displayALert() {
  alert('Butonul a fost apasat');
}

document.addEventListener('DOMContentLoaded', () => {
  let windowWidth = window.innerWidth;
  let buttonElement = document.querySelector('.btn');

  if (windowWidth >= 650) {
    buttonElement.addEventListener('click', displayALert);
  }

  window.addEventListener('resize', () => {
    let windowWidth = window.innerWidth;

    if (windowWidth >= 650) {
      buttonElement.addEventListener('click', displayALert);
    } else {
      buttonElement.removeEventListener('click', displayALert);
    }
  });
});