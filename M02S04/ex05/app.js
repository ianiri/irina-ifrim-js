$(document).ready(() => {
  // app start
  let $personForm = $('#personForm'); 

   $personForm.validate({
     errorElement: 'p',
   });

   $personForm.on('blur input', 'input[name]', (event) => {
     let isFormValid = $(event.delegateTarget).valid();
     let $submitButton = $personForm.find('button[type="submit"]');

     if (isFormValid === true) {
       $submitButton.prop('disabled', false);
     } else {
       $submitButton.prop('disabled', 'disabled');
     }
   });
});