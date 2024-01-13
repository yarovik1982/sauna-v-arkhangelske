const swiper = new Swiper('.swiper', {
   // Optional parameters
   // direction: 'vertical',
   slidesPerView: 1,
   spaceBetween: 20,
   loop: true,
 
   // If we need pagination
   pagination: {
     el: '.swiper-pagination',
     clicable:true,
   },
 
   // Navigation arrows
   navigation: {
     nextEl: '.my-swiper-button-next',
     prevEl: '.my-swiper-button-prev',
   },
 
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
const slides = ["./images/russian.jfif", "./images/finnish.jfif", "./images/hamam.jfif"]
 const bullets = document.querySelectorAll('.swiper-pagination-bullet')
 bullets.forEach((bullet, i) => {
  bullet.style.width = 100 + 'px'
  bullet.style.height = 100 + 'px'
  bullet.style.borderRadius = 50 + '%'
  bullet.style.overflow = 'hidden'
  // bullet.style.display = 'block'


  bullet.innerHTML = `<img src=${slides[i]} alt='Slide${[i]}' style="width:100%; object-fit:cover;">`


 })
 console.log(bullets);
 