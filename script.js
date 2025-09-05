let items = document.querySelectorAll(".slider .list .item")
let thumbnails = document.querySelectorAll(".thumbnails .item")
let prev = document.getElementById("left")
let next = document.getElementById("right")

let countItem = items.length;
let activeItem = 0;

next.onclick = function() {
    activeItem += 1
    if (activeItem >= items.length) {
        activeItem = 0;
    }
    showSlide()
}
prev.onclick = function() {
    activeItem -= 1
    if (activeItem < 0) {
        activeItem = items.length - 1;
    }
    showSlide()
}
thumbnails.forEach(
    (ele, index) => {
        ele.onclick = function() {
            activeItem = index
            showSlide()
        }
    }
)

let autoSlide = setInterval(() => {
    next.click()
}, 5000)

function showSlide() {
    let oldSldierActive = document.querySelector(".slider .list .item.active")
    let oldThumbActive = document.querySelector(".thumbnails .item.active")
    oldSldierActive.classList.remove("active")
    oldThumbActive.classList.remove("active")
    items[activeItem].classList.add("active")
    thumbnails[activeItem].classList.add("active")

    centerActiveImage(activeItem)
    clearInterval(autoSlide);
    let autoSlide = setInterval(() => {
        next.click()
    }, 5000)
}

function centerActiveImage(activeItemIndex) {
    const container = document.querySelector(".thumbnails");
    const containerWidth = container.offsetWidth;
    const activeItem = thumbnails[activeItemIndex];

    // Calculate the scroll position to center the active item
    const scrollTo = activeItem.offsetLeft - (containerWidth / 2) + (activeItem.offsetWidth / 2);
    container.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
    });
}