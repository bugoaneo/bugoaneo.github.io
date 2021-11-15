var btn = document.querySelector(".menu-trigger"),
  nav = document.querySelector(".menu"),
  searchB = document.querySelector(".search-btn"),
  searchF = document.querySelector(".search"),
  searchInp = document.querySelector(".search__input"),
  searchCls = document.querySelector(".search .close-btn");

btn.onclick = function () {
  btn.classList.toggle("open");
  nav.classList.toggle("open");
};

searchB.onclick = function () {
  searchF.classList.add("open");
  searchInp.focus();
};
searchCls.onclick = function () {
  searchF.classList.remove("open");
};


var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

var swiper = new Swiper('.swiper-container2', {
  slidesPerView: 6,
  spaceBetween: 5,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    640: {
      slidesPerView: 1,
    }
  }
});


var acc = document.getElementsByClassName("footer__menu-tiger");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = "1000px";
    }
  }
}





function scrollToTop() {
  var timeOut;
  if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0) {
    window.scrollBy(0, -50);
    timeOut = setTimeout('scrollToTop()', 10);
  }
  else clearTimeout(timeOut);
}