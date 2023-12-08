
var waterTxt = document.querySelector('#waterText');
var waterImg = document.querySelector('#waterSanitationImg');
var povertyTxt = document.querySelector('#povertyText');
var povertyImg = document.querySelector('#povertyImg');

var layout = 'big'; 

function chooseSwap() {
    var windowWidth = window.innerWidth;

    if (windowWidth < 1100 && layout == 'big') {
        swap(waterTxt, waterImg);
        swap(povertyTxt, povertyImg);
        layout = 'small';
    } else if (windowWidth >= 1100 && layout == 'small') {
        swap(waterTxt, waterImg);
        swap(povertyTxt, povertyImg);
        layout = 'big';
    }
}

function swap(firstItem, secondItem) {
    // tempDiv acts as an element to position other elements around.
    var parent = firstItem.parentNode;
    var tempDiv = document.createElement('div'); 
    
    parent.insertBefore(tempDiv, firstItem);
    parent.insertBefore(firstItem, secondItem);
    parent.insertBefore(secondItem, tempDiv);
    parent.removeChild(tempDiv);
}

window.addEventListener('resize', chooseSwap);
window.addEventListener('load', chooseSwap);

