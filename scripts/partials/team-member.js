var swiper = new Swiper(".teamMemberSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: ".team-member-swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".team-member-swiper-button-next",
        prevEl: ".team-member-swiper-button-prev",
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