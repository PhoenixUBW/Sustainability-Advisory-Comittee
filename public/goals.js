class Splash {
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

class Goal {
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

const headingCenter = document.querySelector("#mainContent");

const splashContents = new Splash("mainHeading","subheading",'We have <span style="color: #538550">three</span> main goals.','Each one is extremely important for the current and future generations living on planet earth.',"beautifulLandscape","images/beautiful-landscape.jpg","beautiful landscape");
const          goal1 = new Goal("Water","waterSanitationImg",'images/waterSanitation.jpg','children sharing water happy',"num1","1.","waterText",'Clean <span style="color: #006B8F">water</span> and <span style="color: #006B8F">sanitation</span>',"Access to safe water, sanitation and hygiene is the most basic human need for health and well-being. Billions of people will lack access to these basic services in 2030 unless progress quadruples. Demand for water is rising owing to rapid population growth, urbanization and increasing water needs from agriculture, industry, and energy sectors.","In 2022, 2.2 billion people still lacked safely managed drinking water, including 703 million without a basic water service; 3.5 billion people lacked safely managed sanitation, including 1.5 billion without basic sanitation services; and 2 billion lacked a basic handwashing facility, including 653 million with no handwashing facility at all.");
const          goal2 = new Goal("Hunger","hungerImg",'images/hunger.jpg','people sharing rations',"num2","2.","hungerText",'No <span style="color: #A21C00">Hunger</span>',"It is projected that more than 600 million people worldwide will be facing hunger in 2030, highlighting the immense challenge of achieving the zero hunger target. People experiencing moderate food insecurity are typically unable to eat a healthy, balanced diet on a regular basis because of income or other resource constraints.","Goal 2 is about creating a world free of hunger by 2030.The global issue of hunger and food insecurity has shown an alarming increase since 2015, a trend exacerbated by a combination of factors including the pandemic, conflict, climate change, and deepening inequalities.");
const          goal3 = new Goal("Poverty","povertyImg",'images/poverty.jpg','child looking at slums',"num3","3.","povertyText",'No <span style="color: #0E4D0A">Poverty</span>','Poverty has many dimensions, but its causes include unemployment, social exclusion, and high vulnerability of certain populations to disasters, diseases and other phenomena which prevent them from being productive.','Eradicating extreme poverty for all people everywhere by 2030 is a pivotal goal of the 2030 Agenda for Sustainable Development. Extreme poverty, defined as surviving on less than $2.15 per person per day at 2017 purchasing power parity, has witnessed remarkable declines over recent decades.')



function loadContent(){
    headingCenter.innerHTML = `
    <section id="splashSection">
        <article id="splash">
                <h1 id=${splashContents.idM}>${splashContents.headingTextContent}</h1>
                <h2 id=${splashContents.idS}>${splashContents.subheadingTextContent}</h2>
            </article>
            <img id="${splashContents.imgId}" src="${splashContents.imgSrc}" alt="${splashContents.imgAlt}">
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
};

window.addEventListener("DOMContentLoaded", loadContent, false);



// in order to get script to only run once this content has been dynamically loaded.
let script = document.createElement('script');
script.src = 'goalsSwap.js';
document.head.appendChild(script);