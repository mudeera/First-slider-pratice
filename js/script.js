



new Swiper(".swiper-cart", {
    slidesPerView: 3,
    spaceBetween: 15,
    mousewheelControl: true,
    loop: true,
    watchSlidesProgress: true,
    // parallax: true,
    speed: 1000,
    // rotate: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // autoplay: {
      //   delay: 500,
      //   disableOnInteraction: false
      // },
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      // },
  });
 