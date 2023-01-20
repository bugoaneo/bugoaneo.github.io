const darkSchemeMedia = matchMedia('(prefers-color-scheme: dark)');
const themeSwitcher = document.querySelector('.theme-switcher');
const themeSwitcherIcon = document.querySelector('.theme-switcher__icon');


themeSwitcher.addEventListener('click', function (e) {
 document.documentElement.classList.toggle('dark')
 if (!darkSchemeMedia.matches) {
 }
 window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
  // const newColorScheme = event.matches ? "dark" : "light";
  // console.log(newColorScheme)
  // themeSwitcherIcon.classList.toggle('light');
 });
 // document.documentElement.classList.toggle('dark')
 themeSwitcherIcon.classList.toggle('light');
})

darkSchemeMedia.addEventListener('change', (e) => {
 const darkModeOn = e.matches;
 localStorage.setItem('color-scheme', darkModeOn);
 return (darkModeOn) ? themeSwitcherIcon.classList.remove('light') : themeSwitcherIcon.classList.add('light')
});


/*toDo app */
const todoParent = document.querySelector('.todo__list');
const todoItems = todoParent.children;

const todoStamp = document.querySelector('#todoTemplate').content;
const todoTemplate = todoStamp.querySelector('.todo__item');
const todoForm = document.querySelector('.todo__form');
const todoInput = todoForm.querySelector('.todo__input');
const todoFormError = todoForm.querySelector('.todo__error');
const emptyMSG = document.querySelector('.todo__empty');
let todoCount = document.querySelector('.action-count');


//Todo message length control
todoInput.addEventListener('input', function () {
 if (todoInput.value.length > 60) {
  todoFormError.classList.add('shown');
 } else {
  todoFormError.classList.remove('shown');
 }
})

//Create a unique hash for the checkbox and the label
const hashRandome = (length = 6) => {
 let char = 'abcdefghijklmnopqrstuvwxyz';
 let upperChar = char.toUpperCase();
 let num = '0123456789';
 let symbol = '!@#$%^&*()_+';

 let str = char + upperChar + symbol + num;
 let res = '';
 for (let i = 0; i < length; i++) {
  res += str[Math.floor(Math.random() * str.length)];
 }
 return res;
}

//Add a hash for checkboxes and label to work correctly
const addHash = (item) => {
 let hashID = item.querySelector('.todo__check');
 let hashFor = item.querySelector('.todo__label');
 let hash = hashRandome();
 let itemID = hashID.setAttribute("id", hash);
 let itemFor = hashFor.setAttribute("for", hash);
 return { itemID, itemFor }
}

//Show message when todo list is empty
const toggleEmptyMSG = () => {
 return (todoItems.length === 0) ? emptyMSG.classList.add('shown') : emptyMSG.classList.remove('shown');
}

//Remove todo from list
const removeToDo = function (item) {
 let deleteBTN = item.querySelector('.todo__remove');
 deleteBTN.addEventListener('click', function () {
  item.remove();
  toggleEmptyMSG();
  doneTodoCounter()
 })
}


//Add class 'done'
const doneTodo = function (item) {
 let label = item.querySelector('.todo__label');
 let checkBox = item.querySelector('.todo__check');
 if (checkBox.checked) {
  item.classList.add('done');
 }
 label.addEventListener('click', function () {
  item.classList.toggle('done');
  doneTodoCounter();
 })
}
//Count checked todo with class 'done'
let doneTodoCounter = function () {
 let list = document.querySelectorAll('.todo__item.done').length;
 todoCount.textContent = list;
 console.log(list)
 return todoCount.textContent;
}


for (let i = 0; i < todoItems.length; i++) {
 removeToDo(todoItems[i]);
 doneTodo(todoItems[i]);
}


todoForm.addEventListener('submit', function (evt) {
 evt.preventDefault();

 let newTodoText = todoInput.value;
 let newTodo = todoTemplate.cloneNode(true);

 let newTodoTitle = newTodo.querySelector('.todo__descr');
 newTodoTitle.textContent = newTodoText;
 addHash(newTodo);
 removeToDo(newTodo);
 doneTodo(newTodo);
 todoParent.appendChild(newTodo);
 toggleEmptyMSG();
 todoInput.value = ''
})

window.onload = function () {
 doneTodoCounter()
}