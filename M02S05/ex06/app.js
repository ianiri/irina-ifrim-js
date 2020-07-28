$(document).ready(function () {
  $('#dialog').dialog({
    autoOpen: false,
    show: 300,
    hide: 300,
  });

  window.alert = (message) => {
    $('#dialog')
      .find('.dialog-text')
      .text(message)
      .end()
      .dialog('option', 'title', message)
      .dialog('open');
  };

  // alert('My message');

  $('#dialog-open').on('click', () => {
    alert('Oh, hi there!');
  });

  $('#dialog-close').on('click', () => {
    $('#dialog').dialog('close');
  });

});