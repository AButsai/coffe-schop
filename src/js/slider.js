// import Swiper from 'swiper';

const swiper = new Swiper('.swiper', {
  slidesPerView: 2,
  spaceBetween: 40,
  navigation: {
    prevEl: '.feed-back__button-prev',
    nextEl: '.feed-back__button-next',
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return `<span class="${currentClass}"></span><span> / </span><cpan class="${totalClass}"></cpan>  People`;
    },
  },

  scrollbar: {
    el: '.swiper-scrollbar',
    dragSize: '30%',
    draggable: true,
  },
});

// swiper.scrollbar.updateSize('120px');

swiper.init();
