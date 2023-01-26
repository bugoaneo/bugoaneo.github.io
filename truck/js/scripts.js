let menuTrigger = document.querySelector(".menu__trigger");
let menu = document.querySelector(".menu");
var link = document.querySelectorAll('a[href*="contact"]');
var form = document.querySelector('#contact');

menuTrigger.onclick = function () {
 this.classList.toggle('active');
 menu.classList.toggle('active')
};


for (var i = 0; i < link.length; i++) {
 var scroll = link[i];
 scroll.addEventListener('click', e => {
  e.preventDefault();
  form.scrollIntoView({ block: "start", behavior: "smooth" });
 })
}

//header
// Get the header
let header = document.querySelector("header");

// Get the offset position of the navbar
let sticky = header.offsetTop;
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
 if (window.pageYOffset > sticky) {
  header.classList.add("sticky");
 } else {
  header.classList.remove("sticky");
 }
}


//faq

document.addEventListener("click", ({ target }) => {
 const listItem = target.closest(".faq__item");

 if (!listItem) return;
 listItem.parentNode
  .querySelectorAll(".faq__item")
  .forEach(i => i.classList.remove("open"));
 listItem.classList.add("open");
});

//slider

var glide = new Glide('.reviews__slider-container', {
 perView: 3,
 arrows: true,
 gap: 25,
 startAt: 0,
 breakpoints: {
  1000: {
   perView: 2
  },
  600: {
   perView: 1
  },
 }
});


glide.mount();