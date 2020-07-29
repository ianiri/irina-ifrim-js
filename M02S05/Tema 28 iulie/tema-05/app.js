$(document).ready(function () {
  let $dialogFirst = $('#dialog-first');
  let $dialogConfirm = $('#dialog-confirm');
  
  $dialogFirst.dialog({
    autoOpen: false,
    modal: true,
    width: 354,
    buttons: {
      'Close': function() {
      $(this).dialog('close');
      $dialogConfirm.dialog('open');
      }
    }
  });

  $dialogConfirm.dialog({
    autoOpen: false,
    modal: true,
    width: 354,
    buttons: {
      'Yup': function () {
        $(this).dialog('close');
      },
      'Nope': function() {
        $(this).dialog('close');
        $dialogFirst.dialog('open');
      }
    }
  });

  $('#dialog-open').on('click', () => {
    $dialogFirst.dialog('open');
  });
});