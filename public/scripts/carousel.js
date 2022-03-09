let nextButton = document.getElementById("next");
nextButton.addEventListener("click", carouselClickNext);
let pos = 0;
let carouselAr = [
    "#carouselSlideImg1",
    "#carouselSlideImg2",
    "#carouselSlideImg3",
];


let carousel = document.getElementById(carouselAr[pos]);

function carouselClickNext() {
    const isActive = carousel.classList.contains("active");

    if (pos === carouselAr.length - 1) {
        isActive ? carousel.classList.remove("active") : console.log("Failure");
        pos = 0;
        carousel = document.getElementById(carouselAr[pos]);
        carousel.classList.add("active");
    } else if (pos >= 0) {
        console.log(pos);
        isActive ? carousel.classList.remove("active") : console.log("Failure");
        pos++;
        carousel = document.getElementById(carouselAr[pos]);
        carousel.classList.add("active");
    }
}

let prevButton = document.getElementById("prev");
prevButton.addEventListener("click", carouselClickPrev);

function carouselClickPrev() {
    const isActive = carousel.classList.contains("active");

    if (pos === 0) {
        isActive ? carousel.classList.remove("active") : console.log("Failure");
        pos = carouselAr.length-1;
        carousel = document.getElementById(carouselAr[pos]);
        carousel.classList.add("active");
    } else if (pos > 0) {
        console.log(pos);
        isActive ? carousel.classList.remove("active") : console.log("Failure");
        pos--;
        carousel = document.getElementById(carouselAr[pos]);
        carousel.classList.add("active");
    }
}