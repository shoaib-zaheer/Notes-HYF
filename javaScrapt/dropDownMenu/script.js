var navButton = document.querySelector('nav button');
navButton.addEventListener('click', function() {
  let expanded = this.getAttribute('aria-expanded') === 'true' || false;
  this.setAttribute('aria-expanded', !expanded);
  let menu = this.nextElementSibling;
  menu.hidden = !menu.hidden;
});