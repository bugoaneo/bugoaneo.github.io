let eye = document.querySelectorAll('.eye');
eye.forEach(function (el) {
 el.addEventListener('click', function () {
  this.classList.toggle('close');
 });
})


///TABS

let tab = function () {
 let tabNav = document.querySelectorAll('.tabs__nav-item');
 let tabContent = document.querySelectorAll('.tabs__content-item');
 let tabName;

 tabNav.forEach(item => {
  item.addEventListener('click', selectTabNav)
 });

 function selectTabNav() {
  tabNav.forEach(item => {
   item.classList.remove('current');
  });
  this.classList.add('current');
  tabName = this.getAttribute('data-tab-name');
  selectTabContent(tabName);
 }

 function selectTabContent(tabName) {
  tabContent.forEach(item => {
   item.classList.contains(tabName) ? item.classList.add('current') : item.classList.remove('current');
  })
 }

};