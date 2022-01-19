const swiper = new Swiper('.swiper', {
   // Optional parameters
   // direction: 'vertical',
   slidesPerView: 3,
   spaceBetween: 20,
   loop: true,
 
   // If we need pagination
   // pagination: {
   //   el: '.swiper-pagination',
   // },
 
   // Navigation arrows
   navigation: {
     nextEl: '.my-swiper-button-next',
     prevEl: '.my-swiper-button-prev',
   },
 
   // And if we need scrollbar
   // scrollbar: {
   //   el: '.swiper-scrollbar',
   // },
 });

 const swiperBanner = new Swiper('.swiper-banner', {
   slidesPerView: 1,
   loop: true,

  navigation: {
    nextEl: '.swiper-button-next-banner',
    prevEl: '.swiper-button-prev-banner',
  },
  pagination: {
      el: '.swiper-pagination-banner',
      clickable: true,
    },
 }) 