const swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper_next",
        prevEl: ".swiper_prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    loop: true,

    autoplay: {
        delay: 3000,
    },
})

// branch swiper
const swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: ".branch-swiper-next",
        prevEl: ".branch-swiper-prev",
    },
    autoplay: {
        delay: 3000,
    },
})

// english foundation swiper -------
const foundationswiper = new Swiper(".foundation-swiper", {
    pagination: {
        el: ".swiper-pagination",
    },
    loop: true,
    autoplay: {
        delay: 3000,
    },
})
