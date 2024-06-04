document.addEventListener('DOMContentLoaded', () => {
  // Initialize Swiper
  const swiper = new Swiper('.swiper', {
    // Swiper options
    allowTouchMove: false,
    initialSlide:1,
  });

  document.getElementById('forgot-link').addEventListener('click', (event) => {
    event.preventDefault();
    swiper.slideTo(0); 
  });

  // Add click event listener to "Login" link
  document.getElementById('login-link').addEventListener('click', (event) => {
    event.preventDefault();
    swiper.slideTo(1); 
  });
  document.getElementById('login-link2').addEventListener('click', (event) => {
    event.preventDefault();
    swiper.slideTo(1); 
  });

  // Add click event listener to "Daftar" link
  document.getElementById('signup-link').addEventListener('click', (event) => {
    event.preventDefault();
    swiper.slideTo(2); 
  });


});