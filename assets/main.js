

//  Initialize Swiper
let swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 15,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: true,
  },
  speed:500,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination:{
    el:'.swiper-pagination',
    clickable:true,
  },
  loop:"true",
  autoplay:{
    delay: 3000,
  },
});