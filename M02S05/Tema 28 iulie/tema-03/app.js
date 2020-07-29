$(document).ready(function () {
  let $dialogForm = $('#dialog-form');

  $dialogForm.dialog({
    autoOpen: false,
    modal: true,
    buttons: {
        'Ok': function() {
            $(this).dialog('close');
        },
        'Cancel': function() {
            $(this).dialog('close');
        }
    },
    close: function(event, ui) {
      $dialogForm
        .dialog('option', 'title', '')
        .find('.text-input')
        .text('Write something');
    }
});

  window.prompt = (message) => {
    $dialogForm
      .find('.text-input')
      .text(message)
      .end()
      .dialog('option', 'title', message)
      .dialog('open');
  };

  $('#dialog-open').on('click', () => {
    $dialogForm.dialog('open');
  });

  $('#prompt-open').on('click', () => {
    prompt('Oh, hi there!');
  });

});