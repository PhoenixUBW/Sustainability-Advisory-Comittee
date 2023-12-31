class heading{
    constructor(mainID,subID,headContent,subContent,imgID,imgSrc,imgAlt,slideButtonSrc){
        this.mainID=mainID;
        this.subID=subID;
        this.headContent=headContent;
        this.subContent=subContent;
        this.imgID=imgID;
        this.imgSrc=imgSrc;
        this.imgAlt=imgAlt;
        this.slideButtonSrc=slideButtonSrc;
    }
}
const head= new heading(
    "bigHeading",
    "mainHeading",
    'Making a difference <span style="color: #538550">together</span>',
    "Empowering Global Change. We are advocating and implementing the United Nations' sustainability goals for a more resilient and equitable future.",
    "slideImg",
    "images/beautiful-landscape-2.jpg",
    "beautiful landscape",
    "fixedSliderScript.js")

const topContent=[];

topContent.push(head);
console.log(topContent.length);


class ourGoals{
    constructor(articleID,slideIDLe,slideIDRi,goalClass,goalID,goalText,buttonClass,buttonText){
        this.articleID=articleID;
        this.slideIDLe=slideIDLe;
        this.slideIDRi=slideIDRi;
        this.goalClass=goalClass
        this.goalID=goalID;
        this.goalText=goalText;
        this.buttonClass=buttonClass;
        this.buttonText=buttonText;
        
    }
}
const ourGoal=new ourGoals(
    "splash",
    "imageSliderLeft",
    "imageSliderRight",
    "ourGoals",
    "mainHeading",
    'Our <span style="color: #538550">Goals</span>',
    "learnMore",
    '<span style="color: white">Learn More</span>'
)

const ourContent=[];
ourContent.push(ourGoal);
console.log(ourContent.length);

class threeGoals{
    constructor(articleClass,articleID,imgClass,imgID,imgSrc,imgAlt,goalClass,textClass,goalText){
        this.articleClass=articleClass;
        this.articleID=articleID;
        this.imgClass=imgClass;
        this.imgID=imgID;
        this.imgSrc=imgSrc;
        this.imgAlt=imgAlt;
        this.goalClass=goalClass;
        this.textClass=textClass;
        this.goalText=goalText;
    }
}

const goal1=new threeGoals(
    "singleGoal",
    "Water",
    "goalImage",
    "waterSanitisationImg",
    "images/boy-tap.jpg",
    "children sharing water happy",
    "goalText",
    "goalCentre",
    'Clean <span style="color: #006B8F">water</span> and <span style="color: #006B8F">sanitation</span>'
)
const goal2=new threeGoals(
    "singleGoal",
    "Water",
    "goalImage",
    "waterSanitisationImg",
    "images/hunger-walking.jpg",
    "children sharing water happy",
    "goalText",
    "goalCentre",
    'No <span style="color: #A21C00">hunger</span>'
)
const goal3=new threeGoals(
    "singleGoal",
    "Poverty",
    "goalImage",
    "povertyImg",
    "images/poverty-city.jpg",
    "child looking at slums",
    "goalText",
    "goalCentre",
    'No <span style="color: #0E4D0A">Poverty</span>'
)

class teamLoad{
    constructor(articleID,teamClass,teamText,paraID,paraText,buttonClass,meetTeam){
        this.articleID=articleID;
        this.teamClass=teamClass;
        this.teamText=teamText;
        this.paraID=paraID;
        this.paraText=paraText;
        this.buttonClass=buttonClass;
        this.meetTeam=meetTeam;
    }
}

const teamMeet=new teamLoad(
    "goals",
    "teamHeading",
    'About our <span style="color:#538550">Team</span>',
    "teamText",
    "Meet the hardworking individuals that make this all possible",
    "learnMore",
    '<span style="color:white">Meet the team</span>'
)
const dynamicTeam=[];
dynamicTeam.push(teamMeet);
console.log(dynamicTeam.length);

const dynamicHeader=document.querySelector("#mainContent");
function loadContent(){
    dynamicHeader.innerHTML=`
    <div id="mainContent"></div>
    <article id="splash">
        <h1 id=${head.mainID} style="color: #538550">Sustainability Advisory Committee</h1> 
        <h1 id=${head.subID}>${head.headContent}</h1>
        <h3 id="subheading">${head.subContent}</h3>
    </article>
    <div id=wrapper>
    <img id=${head.imgID} src=${head.imgSrc} alt=${head.imgAlt}>
        <button class="ArrowButton" id=${ourGoal.slideIDLe}><i class="fa-solid fa-arrow-left"></i></button>
        <button class="ArrowButton" id=${ourGoal.slideIDRi}><i class="fa-solid fa-arrow-right"></i></button>
    </div>    
        <h1 class= ${ourGoal.goalClass} id=${ourGoal.goalID}>${ourGoal.goalText}</h1>
        <button class=${ourGoal.buttonClass}><a href="goals.html">${ourGoal.buttonText}</a></button>

    <section id="goals"> 
        <article class=${goal1.articleClass} id=${goal1.articleID}>
            <img class=${goal1.imgClass} id=${goal1.imgID} src=${goal1.imgSrc} alt=${goal1.imgAlt}>
            <div class=${goal1.goalClass}>
                <h1 class=${goal1.textClass}>${goal1.goalText}</h1>
            </div>
        </article>
            
        <article class=${goal2.articleClass} id=${goal2.articleID}>
        <img class=${goal2.imgClass} id=${goal2.imgID} src=${goal2.imgSrc} alt=${goal2.imgAlt}>
        <div class=${goal2.goalClass}>
                <h1 class=${goal2.textClass}>${goal2.goalText}</h1>
            </div>
        </article>

        <article class=${goal3.articleClass} id=${goal3.articleID}>
        <img class=${goal3.imgClass} id=${goal3.imgID} src=${goal3.imgSrc} alt=${goal3.imgAlt}>
        <div class=${goal3.goalClass}>
                <h1 class=${goal3.textClass}>${goal3.goalText}</h1>
            </div>
        </article>
    </section>
    <article>
    <h2 class=${teamMeet.teamClass}>${teamMeet.teamText}</h2>
    <p id=${teamMeet.paraID}>${teamMeet.paraText}</p>
    <button class=${teamMeet.buttonClass}><a href="team.html">${teamMeet.meetTeam}</a></button>
    </article>
    `;
}
window.addEventListener("DOMContentLoaded",loadContent,false);