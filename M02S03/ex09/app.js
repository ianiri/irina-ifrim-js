let navTitle = document.querySelector('.nav-title');
let navLink = document.querySelector('.nav-list');
let hiddenLinks = 'hidden';
let cursorPointer = 'pointer';
let windowWidth = window.innerWidth;


function toggleList () {
  navLink.classList.toggle(hiddenLinks);
}

document.addEventListener('DOMContentLoaded', () => {
  if (windowWidth < 500) {
    navLink.classList.add(hiddenLinks);
    navTitle.addEventListener('click', toggleList);
    navTitle.classList.add(cursorPointer);
  } 

  window.addEventListener('resize', () => {
    let windowWidth = window.innerWidth;

    if (windowWidth < 500) {
      navTitle.addEventListener('click', toggleList);
      navTitle.classList.add(cursorPointer);
      navLink.classList.add(hiddenLinks);
    } else {
      navTitle.removeEventListener('click', toggleList);
      navTitle.classList.remove(cursorPointer);
      navLink.classList.remove(hiddenLinks);
    }
  })
  
})