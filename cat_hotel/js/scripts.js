let menu = document.querySelector('.header__menu'),
  menuBTN = document.querySelector('.menu-trigger'),
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
  });

  menuBTN.classList.remove('open');
  menu.classList.remove('open');

});


menuBTN.addEventListener('click', function (e) {
  this.classList.toggle('open');
  menu.classList.toggle('open');
});


ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
    center: [59.938635, 30.323118],
    zoom: 17,
    controls: []
  }, {
    searchControlProvider: 'yandex#search'
  }),

    // Создаём макет содержимого.
    // MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
    //  '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    // ),

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Котейка',
      balloonContent: 'Уютная гостиница для котов и кошек'
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'img/pin.svg',
      // Размеры метки.
      iconImageSize: [60, 84],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-10, -50]

    });

  myMap.geoObjects.add(myPlacemark);

  //Запрещаем зумить, но не драгать
  myMap.behaviors.disable('scrollZoom');
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    myMap.behaviors.disable('drag');
  }
});

//DateRangePicker


//popup
let popupBTN = document.querySelectorAll('.js-popup');
let popupOverlay = document.querySelector('.overlay');
let closePopup = document.querySelector('.close');
let popupBody = document.querySelector('.popup');
popupBTN.forEach(function (ell) {
  ell.addEventListener('click', function (e) {
    e.preventDefault();
    popupOverlay.classList.add('show');
  });
});

closePopup.addEventListener('click', function (e) {
  e.preventDefault();
  popupOverlay.classList.remove('show');
});

popupOverlay.addEventListener('click', function (e) {
  if (e.target.closest('.popup') === null) {
    popupOverlay.classList.remove('show');
  }
});