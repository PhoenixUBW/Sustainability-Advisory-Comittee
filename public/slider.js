// let sustain=document.createElement("h1");
// sustain.textContent("Sustainability Advisory Committee");
// sustain.id="mainHeading"
// let add=document.querySelector("h1");
// add.parentNode.appendChild(sustain,add)


const slideButtonRight=document.querySelector("#imageSliderRight");
slideButtonRight.addEventListener("click",imageSliderRight);

function imageSliderRight(){
    const image=document.querySelector("#slideImg")
    // if (image.src.endsWith("images/beautiful-landscape.jpg")){
    //     image.src="images/waterSanitation.jpg";
    // }
    // if (image.src.endsWith("images/waterSanitation.jpg")){
    //     image.src="images/SustainabilityAdvisoryCommittee-blackbg-curved.png";
    // }
    // if (image.src.endsWith("images/poverty.jpg")){
    //     image.src="images/beautiful-landscape.jpg";
    // }


    //Make list containing image sources
    //make variable that increments by 1 
    //when max value is hit, reset value back to zero
    //Display image with same index as variable
}





const slideButtonLeft=document.querySelector("#imageSliderLeft");
slideButtonLeft.addEventListener("click",imageSliderLeft);

function imageSliderLeft(){
    const image=document.querySelector("#slideImg")
    if (image.src.endsWith("images/poverty.jpg")){
        image.src="images/waterSanitation.jpg";
    }

    if (image.src.endsWith("images/waterSanitation.jpg")){
        image.src="images/beautiful-landscape.jpg";
    }

    if (image.src.endsWith("images/beautiful-landscape.jpg")){
        image.src="images/poverty.jpg";
    }
}


// two if stataments to switch from picture 1 to 2 and 2 to 3

//click function to trigger the if statement(done)