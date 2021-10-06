// let rollUps = document.querySelectorAll('.rollups__item');
// let rollupsPanel = document.querySelectorAll('.rollups__panel');

// let elBlock = document.querySelector('.rollups__wrap');

// rollUps.forEach(function(item) {
//    item.addEventListener('click', function(e){
//       this.classList.toggle('open');
//     })
  
// })

//https://habr.com/ru/post/475520/


const accordion = document.querySelector('.rollups__list')
accordion.addEventListener('click', toggleAccordion)
const accordionHeaders = accordion.querySelectorAll('.rollups__panel');

function toggleAccordion(e) {
  const itemHeader = e.target.closest('.rollups__panel')
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
