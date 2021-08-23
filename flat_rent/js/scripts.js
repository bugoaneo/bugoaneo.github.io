let menu = document.querySelector('.menu'),
 menuBTN = document.querySelector('.menu-btn'),
 menuLink = document.querySelectorAll('a[data-title]');

menuLink.forEach(link => {

 link.addEventListener('click', function (e) {
  e.preventDefault();

  let href = this.getAttribute('href').substring(1);

  const scrollTarget = document.getElementById(href);

  // const topOffset = document.querySelector('a[data-title]').offsetHeight;
  const topOffset = 0; // если не нужен отступ сверху
  const elementPosition = scrollTarget.getBoundingClientRect().top;
  const offsetPosition = elementPosition - topOffset;

  window.scrollBy({
   top: offsetPosition,
   behavior: 'smooth'
  });
  menuBTN.classList.remove('open');
  menu.classList.remove('open');
 });


});


menuBTN.addEventListener('click', function (e) {
 this.classList.toggle('open');
 menu.classList.toggle('open');
});
