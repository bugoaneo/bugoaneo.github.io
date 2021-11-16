var glide = new Glide('.faq__slider', {
 type: 'carousel',
 perView: 4,
 arrows: true,
 gap: 25,
 startAt: 0,
 breakpoints: {
  1200: {
   perView: 3
  },
  900: {
   perView: 2
  },
  600: {
   perView: 1
  },
 }
});

glide.mount();

/*accordion*/

const accordion = document.querySelector('.help__list');
accordion.addEventListener('click', toggleAccordion)
const accordionHeaders = accordion.querySelectorAll('.help__panel');

function toggleAccordion(e) {
 const itemHeader = e.target.closest('.help__panel')
 if (itemHeader) {
  itemHeader.parentNode.classList.toggle('open')
  toggleOtherItems(itemHeader)
 }
}

function toggleOtherItems(accordionHeader) {
 Array.from(accordionHeaders).forEach(header => {
  if (header != accordionHeader) {
   header.parentNode.classList.remove('open')
  }
 });
}


/*height SVG */
const svgIcons = document.querySelectorAll('svg');
svgIcons.forEach(function (icon) {
 if (icon.hasAttribute('height')) {
  let h = icon.getAttribute('height') + "px";
  icon.setAttribute('style', 'height');
  icon.style.height = h;
 }
})


/*IE11 */
// const svgIcons = document.querySelectorAll('svg');
// for (i = 0; svgIcons.length > i; i++) {
//  if (svgIcons[i].hasAttribute('height')) {
//   let h = svgIcons[i].getAttribute('height') + "px";
//   svgIcons[i].setAttribute('style', 'height');
//   svgIcons[i].style.height = h;
//  }
// }