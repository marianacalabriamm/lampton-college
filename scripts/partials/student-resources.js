var swiper = new Swiper(".studentSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: ".student-resources-swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".student-resources-swiper-button-next",
        prevEl: ".student-resources-swiper-button-prev",
    },
    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
    },
  });
