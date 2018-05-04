/* All code taken from kolloens lecture */

const images = ["Images/lime01.jpg", "Images/lime02.jpg", "Images/lime03.jpg"];
let currentImage = 0;


/**
 * When page is loaded, run @function loadImage
 */
window.addEventListener("load", e => {
    loadImage();
});

/**
 * Creates new img element. When new element is loaded run function
 * #slide1 source is set to be source of @var img
 * @var img source is set to be first index of array iages
 */
function loadImage() {
    var img = document.createElement("img");
    img.addEventListener("load", e => {
        document.querySelector("#slide1").src = img.src;
        setTimeout(slideshow, 2000);
    });
    img.src = images[0];
}

/**
 * This function adds to currentImage count unless, current image is the same as the amount of Images
 * Then currentImage i reset to 0
 */
function slideshow() {
    currentImage++;
    if(currentImage === images.length) {
        currentImage = 0;
    }
    document.querySelector("#slide2").src = images[currentImage];
}


/**
 * When slide2 is loaded, set opacity to 1
 */
document.querySelector("#slide2").addEventListener("load", e => {
    document.querySelector("#slide2").style.opacity = 1;
});

/**
 * When slide 2 has transitioned, set slide1 source to be slide2 source
 * if slide2 opacity is 1, set it to be 0
 */
document.querySelector("#slide2").addEventListener("transitionend", e => {
    document.querySelector("#slide1").src = document.querySelector("#slide2").src;

    if(document.querySelector("#slide2").style.opacity == 1) {
        document.querySelector("#slide2").style.opacity = 0;
        setTimeout(slideshow, 2000);
    }
});
