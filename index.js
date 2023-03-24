import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js'

const burger = document.querySelector(".header__burger"),
      menu = document.querySelector(".header__nav"),
      scrollLinks = document.querySelectorAll(".scroll-link"),
      html = document.querySelector("html")

scrollLinks.forEach(item => {
    item.addEventListener("click",() => {
        burger.classList.remove("active"); menu.classList.remove("active"); document.body.classList.remove("active")
    })
})

burger.addEventListener("click", () => {
    if (burger.classList.contains("active") && menu.classList.contains("active") && html.classList.contains("active")){
        html.classList.remove("active"); burger.classList.remove("active"); menu.classList.remove("active");
        document.body.style.cssText = `position: static;`
    }else{
        document.body.style.cssText = `position: fixed;`
        html.classList.add("active"); burger.classList.add("active"); menu.classList.add("active");
    }
})

const swiper = new Swiper(".swiper", {
    speed: 400,
    loop: true,
    navigation: {
        nextEl: '.product__slider-next',
        prevEl: '.product__slider-prev',
    },
})