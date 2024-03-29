const headerBtn = document.querySelector('.header__btn'),
  headerBtnMenu = document.querySelector('.header__btn-menu'),
  menu = document.querySelectorAll('.menu'),
  rightsideMenu = document.querySelector('.rightside-menu'),
  menuClose = document.querySelector('.rightside-menu__close'),
  body = document.body;

headerBtn.addEventListener('click', () => {
  rightsideMenu.classList.remove('rightside-menu--close')
  body.classList.add('lock')
});

menuClose.addEventListener('click', () => {
  rightsideMenu.classList.add('rightside-menu--close')
  body.classList.remove('lock')
});

headerBtnMenu.addEventListener('click', () => {
  menu.forEach(e => {
    e.classList.toggle('menu--open')
  });
});

$(function () {
  if ($(window).width() <= 650) {
    $('.works-path__item--measurements').appendTo($('.works-path__items-box'));
  }
  $('.top__slider').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
  });
  $('.contact-slider').slick({
    slidesToShow: 10,
    slidesToScroll: 10,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 8,
        }
      },
      {
        breakpoint: 1368,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 7,
        }
      },
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
    ]
  });
  $('.article-slider__box').slick({
    prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrowleft"><img src="assets/img/arrow-slider-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrowright"><img src="assets/img/arrow-slider-right.svg" alt=""></button>',
  });
});