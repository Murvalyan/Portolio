const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  noSwipingClass: 'swiper-no-swiping'

});

const burgerActive = () => {
  let active = document.querySelector('.nav__list');
  active.classList.toggle('activeBurger');

}

const burger = document.querySelector('.burger');

burger.addEventListener('click', burgerActive);


