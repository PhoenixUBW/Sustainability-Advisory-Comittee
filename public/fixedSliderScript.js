const slideButtonRight=document.querySelector("#imageSliderRight");
const slideButtonLeft=document.querySelector("#imageSliderLeft");

const images = ["images/beautiful-landscape.jpg","images/waterSanitation.jpg","images/poverty.jpg"]
let currentImageIndex = 0;

currentImage = images[currentImageIndex]

function rightSliderClicked() {
    if (currentImageIndex == 2){
        currentImageIndex = 0
        currentImage = images[currentImageIndex]
    }
    else {
        currentImageIndex++;
        currentImage = images[currentImageIndex]
    }
    console.log(`right slider clicked, image: ${currentImage}`)
}

function leftSliderClicked() {
    if (currentImageIndex == 0){
        currentImageIndex = 2
        currentImage= images[currentImageIndex]
    }
    else {
        currentImageIndex--;
        currentImage = images[currentImageIndex]
    } 
    console.log(`left slider clicked, image: ${currentImage}`)
}

slideButtonRight.addEventListener("click",rightSliderClicked);
slideButtonLeft.addEventListener("click",leftSliderClicked);