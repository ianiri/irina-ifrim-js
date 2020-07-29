$(document).ready(function () {
  let $dialogConfirm = $('#dialog-confirm');
  
  $dialogConfirm.dialog({
    autoOpen: false,
    modal: true,
    width: 555,
    buttons: {
        'Yup': function() {
            $(this).dialog('close');
        },
        'Nope': function() {
            $(this).dialog('close');
        }
    },
    close: function(event, ui) {
      $dialogConfirm
      .dialog('option', 'title', '')
      .find('.confirm-text')
      .text('Are you sure you want to do this?')
    }
  });

  window.confirm = (message) => {
    $dialogConfirm
      .find('.confirm-text')
      .text(message)
      .end()
      .dialog('option', 'title', message)
      .dialog('open');
  };

  $('#dialog-open').on('click', () => {
    $dialogConfirm.dialog('open');
  });

  $('#confirm-open').on('click', () => {
    confirm('Are you sure REALY sure you want to do this?');
  });
});