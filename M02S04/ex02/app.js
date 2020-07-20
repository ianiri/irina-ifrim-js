let box = document.querySelector('.box');
let mainButtons = document.querySelectorAll('.btn');
let colorInput = document.getElementById('color-input');
let resetButton = document.getElementById('reset-bg');
let checkboxes = document.querySelectorAll('input[type=checkbox]');
let colorTextInput = document.getElementById('text-color');
let warningText = document.querySelector('.error');
let hiddenText = 'hidden';

mainButtons.forEach((button) => {
  button.addEventListener('click', () => {
    let colorName = button.innerText.toLowerCase();

    box.style.backgroundColor = colorName;
    let isChecked = document.querySelectorAll('input[type=checkbox]:checked');

    isChecked.forEach((checkbox) => {
      checkbox.parentElement.style.backgroundColor = colorName;
    })
  });
});

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('click', () => {
    checkbox.parentElement.removeAttribute('style');
  })
});


colorInput.addEventListener('change', (event) => {
  let colorInput = event.currentTarget;
  let dynamicColorButton = colorInput.nextElementSibling;
  let selectedColor = colorInput.value;

  dynamicColorButton.style.backgroundColor = selectedColor;
});

colorInput.nextElementSibling.addEventListener('click', () => {
  box.style.backgroundColor = colorInput.value;
});

resetButton.addEventListener('click', () => {
  box.removeAttribute('style');
});


colorTextInput.addEventListener('change', (event) => {
  let colorTextInput = event.currentTarget;
  let selectedTextColor = colorTextInput.value;
  let dynamicColorTextButton = colorTextInput.nextElementSibling;

  if (selectedTextColor.match(/^[#][0-9a-zA-Z]{3}$/) || selectedTextColor.match(/^[#][0-9a-zA-Z]{6}$/)) {
    dynamicColorTextButton.style.backgroundColor = selectedTextColor;
    warningText.classList.add(hiddenText);
    dynamicColorTextButton.addEventListener('click', () => {
      let isChecked = document.querySelectorAll('input[type=checkbox]:checked');
    
      isChecked.forEach((checkbox) => {
        checkbox.parentElement.style.backgroundColor = selectedTextColor;
      })
    })
  } else {
    dynamicColorTextButton.removeAttribute('style');
    warningText.classList.remove(hiddenText);
  }
});
