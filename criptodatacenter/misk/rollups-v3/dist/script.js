// let modeles = document.querySelectorAll('.modeles__item');
// let modelesPanel = document.querySelectorAll('.modeles__panel');

// let elBlock = document.querySelector('.modeles__wrap');

// modeles.forEach(function(item) {
//    item.addEventListener('click', function(e){
//       this.classList.toggle('open');
//     })
  
// })

//https://habr.com/ru/post/475520/


const accordion = document.querySelector('.modeles__list')
accordion.addEventListener('click', toggleAccordion)
const accordionHeaders = accordion.querySelectorAll('.modeles__panel');

function toggleAccordion(e) {
  const itemHeader = e.target.closest('.modeles__panel')
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