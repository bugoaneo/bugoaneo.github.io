$(document).ready(function () {
    //Сворачивание списков по нажатию на кнопку "Подробнее"
    document.querySelectorAll('.descr-btn').forEach(function (el, i) {
        el.addEventListener('click', function () {
            document.querySelectorAll('.descr-btn').forEach(function (el, k) {
                if (i !== k) {
                    el.parentNode.classList.remove('open');
                    el.innerText = "Подробнее";
                }
            });
            el.parentNode.classList.toggle('open');
            if (el.parentNode.classList.contains('open')) {
                el.innerText = "Свернуть"
            } else {
                el.innerText = "Подробнее";
            }
        })
    });


    // //Попапы
    // setTimeout(function () {
    //     let popup = document.querySelectorAll('.popup'),
    //         score = document.querySelector('.score'),
    //         order_score = document.querySelector('.order-score'),
    //         balance = document.querySelector('.balance'),
    //         guests = document.querySelector('.guests'),
    //         close = document.querySelectorAll('.popup__close'),
    //         l = 0,
    //         count_score = localStorage.getItem("count_score") ? parseInt(localStorage.getItem("count_score")) : 10,
    //         count_balance = localStorage.getItem("count_balance") ? parseInt(localStorage.getItem("count_balance")) : 34,
    //         interval = setInterval(function () {
    //             if (count_balance === 0) {
    //                 clearInterval(interval);
    //             }
    //             if (l % 2 == 0) {
    //                 score.innerText = count_score;
    //                 order_score.innerText = count_score;
    //                 balance.innerText = count_balance;
    //                 localStorage.setItem("count_score", ++count_score);
    //                 localStorage.setItem("count_balance", --count_balance);
    //                 popup[0].classList.add('show');
    //                 setTimeout(function () {
    //                     popup[0].classList.remove('show');
    //                 }, 5000);
    //             } else {
    //                 popup[1].classList.add('show');
    //                 guests.innerText = Math.floor(Math.random() * 150) + 100 + " человек";
    //                 setTimeout(function () {
    //                     popup[1].classList.remove('show');
    //                 }, 4000);
    //             }
    //             l++;
    //         }, 9000);
    //     close.forEach(function (elem) {
    //         elem.addEventListener('click', function () {
    //             popup.forEach(function (el) {
    //                 el.classList.remove('show');
    //             })
    //         })
    //     })
    // }, 3000)
    // //Попапы


    /*mobile menu */

    $('.menu-trigger, .menu-threshold').click(function () {
        $('.menu').toggleClass('open');
        $('.menu-trigger').toggleClass('open');
        $('.main').toggleClass('open');
        $('.popup__wrapper').toggleClass('open');
        return false;
    });

    $('a[data-target^="anchor"]').bind('click.smoothscroll', function () {
        $('.menu').removeClass('open');
        $('.menu-trigger').removeClass('open');
        $('.main').removeClass('open');
        $('.popup__wrapper').removeClass('open');
        var target = $(this).attr('href'),
            bl_top = $(target).offset().top - 0;
        $('body, html').animate({ scrollTop: bl_top }, 700);
        return false;
    });


    /*липкое меню */
    $(".menu__nav").stick_in_parent();
    $(".menu-trigger").stick_in_parent();
    $(".popup__wrapper").stick_in_parent();

    /*Работа menu при скролле*/
    let scrollPos = 0,
        menuBtn = document.querySelector('.menu-trigger');
    $(window).scroll(function () {
        var st = $(this).scrollTop();
        if (st > scrollPos) {
            !menuBtn.classList.contains('hide') ? menuBtn.classList.add('hide') : "";
        } else {
            menuBtn.classList.remove('hide');
        }
        scrollPos = st;
    });

    /*scroll spy*/

    let menuSection = document.querySelectorAll('.menu__list li');

    // for clickable event
    menuSection.forEach(v => {
        v.onclick = (() => {
            setTimeout(() => {
                menuSection.forEach(j => j.classList.remove('active'))
                v.classList.add('active')
            }, 300)
        })
    })

    // for window scrolldown event

    window.onscroll = (() => {
        let mainSection = document.querySelectorAll('main section');

        mainSection.forEach((v, i) => {
            let rect = v.getBoundingClientRect().y
            if (rect < window.innerHeight - 200) {
                menuSection.forEach(v => v.classList.remove('active'))
                menuSection[i].classList.add('active')
            }
        })
    })




    /*slider*/
    var swiper = new Swiper('.about__slider-container', {
        spaceBetween: 30,
        navigation: {
            nextEl: '.about__slider-next',
            prevEl: '.about__slider-prev',
        },
        pagination: {
            el: '.about__slider-pagination',
            dynamicBullets: true,
        },
        breakpoints: {
            850: {
                slidesPerView: 3,
            },
            650: {
                slidesPerView: 2,
            },
        }
    });


    (function () {
        'use strict';
        // breakpoint where swiper will be destroyed
        // and switches to a dual-column layout
        const breakpoint = window.matchMedia('(min-width:780px)');
        // keep track of swiper instances to destroy later
        let mySwiper;
        const breakpointChecker = function () {
            // if larger viewport and multi-row layout needed
            if (breakpoint.matches === true) {
                // clean up old instances and inline styles when available
                if (mySwiper !== undefined) mySwiper.destroy(true, true);
                // or/and do nothing
                return;
                // else if a small viewport and single column layout needed
            } else if (breakpoint.matches === false) {
                // fire small viewport version of swiper
                return enableSwiper();
            }
        };

        const enableSwiper = function () {
            mySwiper = new Swiper('.reviews__slider-container', {
                autoHeight: true,
                navigation: {
                    nextEl: '.reviews__slider-next',
                    prevEl: '.reviews__slider-prev',
                },
                pagination: {
                    el: '.reviews__slider-pagination',
                    dynamicBullets: true,
                },
                breakpoints: {
                    780: {
                        slidesPerView: 3,
                    },
                    500: {
                        spaceBetween: 10,
                        slidesPerView: 2,
                    },
                }

            });
        };
        // keep an eye on viewport size changes
        breakpoint.addListener(breakpointChecker);
        // kickstart
        breakpointChecker();
    })();


    /*faq tabs */
    $('.faq__panel').click(function () {
        $(this).toggleClass('open').next().slideToggle();
        $('.faq__panel').not(this).removeClass('open').next().slideUp();
    });
    /*Анимация персонажа */

    var element = $("#faq"),
        teaserLoad = $(".faq__person");
    $(window).scroll(function () {
        var a = $(window).scrollTop() + $(window).height(),
            b = element.offset().top;
        a > b && (
            teaserLoad.addClass("animated")
        )
    });

});
