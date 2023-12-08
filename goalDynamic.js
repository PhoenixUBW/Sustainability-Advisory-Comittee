class splash {
    constructor(idM, idS, headingTextContent, subheadingTextContent, imgId, imgSrc, imgAlt) {
        this.idM = idM;
        this.idS = idS;
        this.headingTextContent = headingTextContent;
        this.subheadingTextContent = subheadingTextContent;
        this.imgId = imgId;
        this.imgSrc = imgSrc;
        this.imgAlt = imgAlt;

    }
}




const splashContents = new splash(
"mainHeading",
"subheading",
'We have <span style="color: #538550">three</span> main goals.',
'Each one is extremely important for the current and future generations living on planet earth.',
"beautifulLandscape",
"/images/beautiful-landscape.jpg",
"beautiful landscape"
);


const content=[];

content.push(splashContents);

console.log(content.length);    


const headingCenter = document.querySelector("#mainContent");

function loadContent(){
    let displayItem = content.map( (item) => {
        return `
        <section id="splashSection">
            <article id="splash">
                    <h1 id=${item.idM}>${item.headingTextContent}</h1>
                    <h2 id=${item.idS}>${item.subheadingTextContent}</h2>
                </article>
                <img id="${item.imgId}" src="${item.imgSrc}" alt="${item.imgAlt}">
        </section>


        <section id="goals"> 
                <article class="singleGoal" id="${goal1.articleId}">
                    <img class="goalImage "id="${goal1.imgId}" src="${goal1.imgSrc}"alt="${goal1.imgAlt}">
                    <h1 class="number" id="${goal1.numId}">${goal1.num}</h1>
                    <div class="goalText" id="${goal1.textId}">
                        <h1>${goal1.headingTxtContent}</h1>
                        <p>${goal1.paragraph1TxtContent}</p>
                        <br>
                        <p>${goal1.paragraph2TxtContent} </p>
                    </div>
                </article>

                <article class="singleGoal" id="${goal2.articleId}">
                    <h1 class="number" id="${goal2.numId}">${goal2.num}</h1>
                    <div class="goalText" id="${goal2.textId}">
                        <h1>${goal2.headingTxtContent}</h1>
                        <p>${goal2.paragraph1TxtContent}</p>
                        <br>
                        <p>${goal2.paragraph2TxtContent}</p>
                    </div>
                    <img class="goalImage "id="${goal2.imgId}" src="${goal2.imgSrc}"alt="${goal2.imgAlt}">
                </article>

                <article class="singleGoal" id="${goal3.articleId}">
                    <img class="goalImage "id="${goal3.imgId}" src="${goal3.imgSrc}"alt="${goal3.imgAlt}">
                    <h1 class="number" id="${goal3.numId}">${goal3.num}</h1>
                    <div class="goalText" id="${goal3.textId}">
                        <h1>${goal3.headingTxtContent}</h1>
                        <p>${goal3.paragraph1TxtContent}</p>
                        <br>
                        <p>${goal3.paragraph2TxtContent} </p>
                    </div>
                </article>
            </section>
        `;
    });
    // displayItem = displayItem.join("");
    console.log(displayItem);
    headingCenter.innerHTML = displayItem;
};



class goal {
    constructor(articleId, imgId, imgSrc, imgAlt, numId, num, textId, headingTxtContent, paragraph1TxtContent, paragraph2TxtContent) {
        this.articleId = articleId;
        this.imgId = imgId;
        this.imgSrc = imgSrc;
        this.imgAlt = imgAlt;
        this.numId = numId;
        this.num = num;
        this.textId = textId;
        this.headingTxtContent = headingTxtContent;
        this.paragraph1TxtContent = paragraph1TxtContent;
        this.paragraph2TxtContent = paragraph2TxtContent;

    }
}
const goal1 = new goal(
    "Water",
    "waterSanitationImg",
    'images/waterSanitation.jpg',
    'children sharing water happy',
    "num1",
    "1.",
    "waterText",
    'Clean <span style="color: #006B8F">water</span> and <span style="color: #006B8F">sanitation</span>',
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    );


const goal2 = new goal(
    "Hunger",
    "hungerImg",
    'images/hunger.jpg',
    'people sharing rations',
    "num2",
    "2.",
    "hungerText",
    'No <span style="color: #A21C00">Hunger</span>',
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    );

const goal3 = new goal(
    "Poverty",
    "povertyImg",
    'images/poverty.jpg',
    'child looking at slums',
    "num3",
    "3.",
    "povertyText",
    'No <span style="color: #0E4D0A">Poverty</span>',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    );

window.addEventListener("DOMContentLoaded", loadContent, false);


// in order to get script to only run once this content has been dynamically loaded.
let script = document.createElement('script');
script.src = 'swap.js';
document.head.appendChild(script);