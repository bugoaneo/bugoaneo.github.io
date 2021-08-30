let menu = document.querySelector('.menu'),
  menuBTN = document.querySelector('.menu-trigger'),
  menuLink = document.querySelectorAll('a[data-title]');

document.querySelectorAll('a[data-title]').forEach(link => {

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

    menuBTN.classList.remove('open');
    menu.classList.remove('open');

  });

});

menuBTN.addEventListener('click', function (e) {
  this.classList.toggle('open');
  menu.classList.toggle('open');
});


/* sliders */

(function () {
  'use strict';
  // breakpoint where swiper will be destroyed
  // and switches to a dual-column layout
  const breakpoint = window.matchMedia('(min-width:750px)');
  // keep track of swiper instances to destroy later
  let mySwiper;
  let mySwiper2;
  let mySwiper3;
  const breakpointChecker = function () {
    if (breakpoint.matches === true) {
      if (mySwiper !== undefined && mySwiper2 !== undefined && mySwiper3 !== undefined) {
        mySwiper.destroy(true, true);
        mySwiper2.destroy(true, true);
        mySwiper3.destroy(true, true);
      }
      return;
    } else if (breakpoint.matches === false) {
      return enableSwiper(), enableSwiper2(), enableSwiper3();
    }


  };

  const enableSwiper = function () {
    mySwiper = new Swiper('.slider1', {
      spaceBetween: 20,
      navigation: {
        nextEl: '.slider1__button-next',
        prevEl: '.slider1__button-prev',
      },
      pagination: {
        el: '.slider1__pagination',
        type: 'bullets',
      },
      breakpoints: {
        750: {
          slidesPerView: 3,
        },
        600: {
          slidesPerView: 2,
        },
        500: {
          slidesPerView: 1,
        },
      }
    });
  };

  const enableSwiper2 = function () {
    mySwiper2 = new Swiper('.slider2', {
      spaceBetween: 30,
      navigation: {
        nextEl: '.slider2__button-next',
        prevEl: '.slider2__button-prev',
      },
      pagination: {
        el: '.slider2__pagination',
        type: 'bullets',
      },
      breakpoints: {
        750: {
          slidesPerView: 2,
        },
        600: {
          slidesPerView: 2,
        },
        500: {
          slidesPerView: 1,
        },
      }

    });
  };

  const enableSwiper3 = function () {
    mySwiper3 = new Swiper('.slider3', {
      spaceBetween: 20,
      navigation: {
        nextEl: '.slider3__button-next',
        prevEl: '.slider3__button-prev',
      },
      pagination: {
        el: '.slider3__pagination',
        type: 'bullets',
      },
      breakpoints: {
        750: {
          slidesPerView: 3,
        },
        600: {
          slidesPerView: 2,
        },
        500: {
          slidesPerView: 1,
        },
      }

    });
  };

  // keep an eye on viewport size changes
  breakpoint.addListener(breakpointChecker);
  // kickstart
  breakpointChecker();
})();


possibilities = new Swiper('.possibilities__container', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoHeight: true,
  navigation: {
    nextEl: '.possibilities__button-next',
    prevEl: '.possibilities__button-prev',
  },
  breakpoints: {
    750: {
      autoHeight: false,
    },
  }
});

possibilities = new Swiper('.marketing__container', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoHeight: true,
  navigation: {
    nextEl: '.marketing__button-next',
    prevEl: '.marketing__button-prev',
  },
  breakpoints: {
    750: {
      autoHeight: false,
    },
  }
});

const nestedSlider = new Swiper('.slider-nested', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  nested: true,
  autoplay: {
    delay: 5000,
  },
});



/*tabs-accordion */

const labels = document.querySelectorAll(".accordion__item-label");
const tabs = document.querySelectorAll(".accordion__tab");

function toggleShow() {
  const target = this;
  const item = target.classList.contains("accordion__tab")
    ? target
    : target.parentElement;
  const group = item.dataset.actabGroup;
  const id = item.dataset.actabId;

  tabs.forEach(function (tab) {
    if (tab.dataset.actabGroup === group) {
      if (tab.dataset.actabId === id) {
        tab.classList.add("current");
      } else {
        tab.classList.remove("current");
      }
    }
  });

  labels.forEach(function (label) {
    const tabItem = label.parentElement;

    if (tabItem.dataset.actabGroup === group) {
      if (tabItem.dataset.actabId === id) {
        tabItem.classList.add("current");
      } else {
        tabItem.classList.remove("current");
      }
    }
  });
}

labels.forEach(function (label) {
  label.addEventListener("click", toggleShow);
});

tabs.forEach(function (tab) {
  tab.addEventListener("click", toggleShow);
});


/*video */
// "use strict";
// function r(f) { /in/.test(document.readyState) ? setTimeout('r(' + f + ')', 9) : f() }
// r(function () {
//  if (!document.getElementsByClassName) {
//   // IE8 support
//   var getElementsByClassName = function (node, classname) {
//    var a = [];
//    var re = new RegExp('(^| )' + classname + '( |$)');
//    var els = node.getElementsByTagName("*");
//    for (var i = 0, j = els.length; i < j; i++)
//     if (re.test(els[i].className)) a.push(els[i]);
//    return a;
//   }
//   var videos = getElementsByClassName(document.body, "youtube");
//  }
//  else {
//   var videos = document.getElementsByClassName("youtube");
//  }

//  var nb_videos = videos.length;
//  for (var i = 0; i < nb_videos; i++) {
//   // Based on the YouTube ID, we can easily find the thumbnail image
//   videos[i].style.backgroundImage = 'url(http://i.ytimg.com/vi/' + videos[i].id + '/sddefault.jpg)';

//   // Overlay the Play icon to make it look like a video player
//   var play = document.createElement("div");
//   play.setAttribute("class", "play");
//   videos[i].appendChild(play);

//   videos[i].onclick = function () {
//    // Create an iFrame with autoplay set to true
//    var iframe = document.createElement("iframe");
//    var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
//    if (this.getAttribute("data-params")) iframe_url += '&' + this.getAttribute("data-params");
//    iframe.setAttribute("src", iframe_url);
//    iframe.setAttribute("frameborder", '0');

//    // The height and width of the iFrame should be the same as parent
//    iframe.style.width = this.style.width;
//    iframe.style.height = this.style.height;

//    // Replace the YouTube thumbnail with YouTube Player
//    this.parentNode.replaceChild(iframe, this);
//   }
//  }
// });




// 2. This code loads the IFrame Player API code asynchronously.
// var tag = document.createElement('script');

// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var scriptUrl = 'https:\/\/www.youtube.com\/s\/player\/528656c7\/www-widgetapi.vflset\/www-widgetapi.js'; try { var ttPolicy = window.trustedTypes.createPolicy("youtube-widget-api", { createScriptURL: function (x) { return x } }); scriptUrl = ttPolicy.createScriptURL(scriptUrl) } catch (e) { } if (!window["YT"]) var YT = { loading: 0, loaded: 0 }; if (!window["YTConfig"]) var YTConfig = { "host": "https://www.youtube.com" };
if (!YT.loading) {
  YT.loading = 1; (function () {
    var l = []; YT.ready = function (f) { if (YT.loaded) f(); else l.push(f) }; window.onYTReady = function () { YT.loaded = 1; for (var i = 0; i < l.length; i++)try { l[i]() } catch (e$0) { } }; YT.setConfig = function (c) { for (var k in c) if (c.hasOwnProperty(k)) YTConfig[k] = c[k] }; var a = document.createElement("script"); a.type = "text/javascript"; a.id = "www-widgetapi-script"; a.src = scriptUrl; a.async = true; var c = document.currentScript; if (c) { var n = c.nonce || c.getAttribute("nonce"); if (n) a.setAttribute("nonce", n) } var b =
      document.getElementsByTagName("script")[0]; b.parentNode.insertBefore(a, b)
  })()
};

function onYouTubeIframeAPIReady() {
  // Check all slides and initialize video players
  var swiper = document.getElementById('video-slider');
  var slides = swiper.getElementsByClassName('swiper-slide')

  var players = [];

  for (var i = 0; i < slides.length; i++) {
    var videoEl = slides[i].getElementsByClassName('youtube')[0];
    var id = videoEl.getAttribute('data-video');

    var player = new YT.Player(videoEl, {
      videoId: id,
      playerVars: {
        autoplay: false,
        modestbranding: true,
        rel: 0
      }
    });
    players.push(player);
  }

  //  const reviews = new Swiper('.reviews__container', {
  //   slidesPerView: 1,
  //   spaceBetween: 20,
  //   loop: true,
  //   autoHeight: false,
  //   navigation: {
  //    nextEl: '.reviews__button-next',
  //    prevEl: '.reviews__button-prev',
  //   },
  //   breakpoints: {
  //    750: {
  //     autoHeight: true,
  //    },
  //   },
  //   // on: {
  //   //  slideChange: function () {
  //   //   players[reviews.previousIndex].pauseVideo();
  //   //   // players[mySwiper.activeIndex].playVideo();
  //   //  }
  //   // }
  //  });

}

const reviews = new Swiper('.reviews__container', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoHeight: false,
  navigation: {
    nextEl: '.reviews__button-next',
    prevEl: '.reviews__button-prev',
  },
  breakpoints: {
    750: {
      autoHeight: true,
    },
  },
  // on: {
  //  slideChange: function () {
  //   players[reviews.previousIndex].pauseVideo();
  //   // players[mySwiper.activeIndex].playVideo();
  //  }
  // }
});