let footerSubmenuTitle = document.querySelectorAll('.submenu__title');

footerSubmenuTitle.forEach(item => {
 item.addEventListener('click', function (e) {
  e.preventDefault();
  this.nextElementSibling.classList.toggle('open');
 })
})