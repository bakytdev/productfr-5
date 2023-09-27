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
    slidesPerView: 3,
    loop: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
