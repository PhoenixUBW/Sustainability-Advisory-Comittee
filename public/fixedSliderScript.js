const slideButtonRight=document.querySelector("#imageSliderRight");
const slideButtonLeft=document.querySelector("#imageSliderLeft");

const images = ["images/circle-sea.jpg","images/forest-lake.jpg","images/landscape-with-fence.jpg"]
let currentImageIndex = 0;

currentImage = images[currentImageIndex]

function rightSliderClicked() {
    const imageSlide=document.querySelector("#slideImg");
    imageSlide.src=[currentImage]

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
    const imageSlide=document.querySelector("#slideImg");
    imageSlide.src=[currentImage]

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