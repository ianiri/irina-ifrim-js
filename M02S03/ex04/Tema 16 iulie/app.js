let $image = $('.image');
let $messagePara = $('.message-para');

$image.on('load', () => {
  $messagePara.text('Imaginea s-a incarcat.');

  $image.on('click', () => {
    $urlText = $image.attr('src');
    alert(`Imaginea cu URLul: ${$urlText} s-a incarcat.`);
  });
});
