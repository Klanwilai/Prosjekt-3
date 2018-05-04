var images = ["Images/lime01.jpg", "Images/lime02.jpg", "Images/lime03.jpg"];
var currentImage = 0;


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
        window.setTimeout(slideshow, 2000);
    });
    img.src = images[0];
}

function slideshow() {
    currentImage++;
    if(currentImage === images.length) {
        currentImage = 0;
    }
    document.querySelector("#slide2").src = images[currentImage];
}

document.querySelector("#slide2").addEventListener("load", e => {
    document.querySelector("#slide2").style.opacity = 1;
});

document.querySelector("#slide2").addEventListener("transitioned", e => {
    document.querySelector("#slide1").src = document.querySelector("#slide2").src;

    if(document.querySelector("#slide2").style.opacity == 1) {
        document.querySelector("#slide2").style.opacity = 0;
        window.setTimeout(slideshow, 2000);
    }
});
