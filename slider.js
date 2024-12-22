const swiper1 = new Swiper('.slider .swiper', {
  direction: 'horizontal',
  slidesPerView: 3,
  spaceBetween: 60,
  loop: true,
  pagination: {
      el: '.slider .swiper-pagination',
  },
  navigation: {
      nextEl: '.slider .swiper-button-next',
      prevEl: '.slider .swiper-button-prev',
  },
});

const swiper2 = new Swiper('.slider2 .swiper', {
  direction: 'horizontal',
  slidesPerView: 3,
  spaceBetween: 60,
  loop: true,
  pagination: {
      el: '.slider2 .swiper-pagination',
  },
  navigation: {
      nextEl: '.slider2 .swiper-button-next',
      prevEl: '.slider2 .swiper-button-prev',
  },
});
