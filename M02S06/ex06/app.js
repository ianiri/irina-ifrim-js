$(document).ready(() => {
  buildPersonList();

  let $form = $('form');

  $form.find('.addSkill').on('click', (event) => {
    let $button = $(event.currentTarget);
    let $buttonParent = $button.parent();
    let inputValue = $button.prev().val();

    if (inputValue.length < 1) {
      return;
    }

    $buttonParent.after(
      $('<input>', {
        value: inputValue,
        name: inputValue,
      }),
    );

    $button.prev().val('');
  });

  function buildPersonList(ulClassName = 'person-list') {
    let personRequest = $.get('http://localhost:8080/persons').done((data) => {
      $(`.${ulClassName}`).remove();

      let $ul = $('<ul>', {
        class: ulClassName,
      });

      data.persons.forEach((person) => {
        let $li = $('<li>', {
          text: person.name,
        });

        let $skillsUl = $('<ul>');
        person.skills.forEach((skill) => {
          let $skillLi = $('<li>', {
            text: skill,
          });

          $skillLi.appendTo($skillsUl);
        });

        $li.append($skillsUl).appendTo($ul);
      });

      $('body').append($ul);
    });
  }
});