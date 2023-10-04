let btn = document.querySelector(".header-btn-three");
let body = document.querySelector("body");

btn.addEventListener("click", () => {
    if (body.className === "white") {
        body.classList.replace("white", "dark")
    } else {
        body.classList.replace("dark", "white")
    }
})

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 1.5,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});