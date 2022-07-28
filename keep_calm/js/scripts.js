document.addEventListener('DOMContentLoaded', function (event) {

 //slider
 var glide = new Glide('.glide', {
  type: 'carousel',
  perView: 5,
  startAt: 0,
  focusAt: 'center',
  breakpoints: {
   800: {
    perView: 2
   },
   600: {
    focusAt: 0,
    perView: 1,
    peek: 19,
   },
  }
 })

 glide.mount()

 //modal
 baguetteBox.run('.glide__slides');


 //accordion
 const accordion = document.querySelector('.accordion__list')
 accordion.addEventListener('click', toggleAccordion)
 const accordionHeaders = accordion.querySelectorAll('.accordion__panel');

 function toggleAccordion(e) {
  const itemHeader = e.target.closest('.accordion__panel')
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




})
