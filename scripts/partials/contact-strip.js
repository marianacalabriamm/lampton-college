var swiper = new Swiper(".contactStripSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: ".contact-strip-swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".contact-strip-swiper-button-next",
        prevEl: ".contact-strip-swiper-button-prev",
    },
  });