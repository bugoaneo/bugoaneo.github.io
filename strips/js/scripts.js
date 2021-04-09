let btn = document.querySelector(".arrow");
let sections = document.querySelectorAll(".article");

btn.addEventListener('click', e => {
 btn.classList.toggle('skewed');
 sections.forEach((section) => {
  section.classList.toggle('skewed');
 })
})