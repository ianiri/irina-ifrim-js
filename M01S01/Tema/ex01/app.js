
var inputLenght = document.getElementById('length');
var inputWidth = document.getElementById('width');
var inputDepth = document.getElementById('depth');
var elementResult = document.getElementById('result');
var form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  var length = inputLenght.value || 0;
  var width = inputWidth.value || 0;
  var depth = inputDepth.value || 0;
  var result = 0;

  result = length * width * depth;

  elementResult.innerText = result;

  e.preventDefault()
}, false);

