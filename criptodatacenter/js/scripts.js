let menu = document.querySelector('.nav'),
 menuBTN = document.querySelector('.menu-trigger');

document.querySelectorAll('[data-title="scroll"]').forEach(link => {

 link.addEventListener('click', function (e) {
  e.preventDefault();
  let href = this.getAttribute('href').substring(1);
  const scrollTarget = document.getElementById(href);

  // const topOffset = document.querySelector('a[data-title]').offsetHeight;
  const topOffset = 45; // если не нужен отступ сверху
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