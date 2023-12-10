const formContainerDiv = document.querySelector("#form-container-main");
const article = document.querySelector("#why-and-previous");

class PrevArticle {
    constructor(title, body) {
        this.title = title;
        this.body = body;
    }
}

const article1 = new PrevArticle("Green Horizons: Weekly Eco-Tips & Trends","Dive into a world of sustainable living with our \"Green Horizons\" newsletter. Each week, we bring you the latest eco-tips and trends to help you navigate the path towards a greener lifestyle. From simple everyday practices to groundbreaking innovations, stay in the loop and empower yourself to make a positive impact on the environment. Join us on a journey towards a more sustainable and harmonious future.")
const article2 = new PrevArticle("Heartfelt Harvest: Reaping the Rewards of Green Living","Welcome to \"Heartfelt Harvest,\" where we reap the rewards of embracing green living. This weekly newsletter is a celebration of the positive outcomes of sustainable choices and acts of kindness. Join us as we harvest stories of environmental stewardship and the joy that comes from helping others. It's a reminder that every eco-friendly decision and compassionate gesture contributes to a bountiful and fulfilling harvest for both us and the planet we call home.")
const article3 = new PrevArticle("Brighter Futures: Illuminating Paths to Sustainability and Goodness","\"Brighter Futures\" is your beacon of inspiration, shedding light on paths to sustainability and goodness. Every week, explore stories that showcase the positive impact of eco-friendly living and acts of kindness. Illuminate your inbox with tales of individuals and communities making a difference, and discover how small actions can create a ripple effect, leading us all toward a brighter, more compassionate future.")

const prevArticles = [];
prevArticles.push(article1);
prevArticles.push(article2);
prevArticles.push(article3);

function loadFormContainer() {
    formContainerDiv.innerHTML = `  
    <img id="newsletter-image" alt="SAC Logo" src="images/SACEdgeTransparent.png">
    <h1 class="signUpPlead" id="plead-main">Sign up for our <span class="green">Newsletter!</span></h1>
    <form id="form-main" method="post" action="" >
        <fieldset id="fieldset-main">
            <input    id="first-name-main" required type="name" placeholder="First Name" class="GridItem"  >
            <input    id="surname-main"   required type="name" placeholder="Last Name" class="GridItem" >
            <input    id="email-main" type="email" placeholder="Email Address" class="GridItem" >
            <textarea id="comments-main" placeholder="Comments" class="GridItem" ></textarea>
        </fieldset>
        <button class="Submit" id="submit-main"><h4>Submit</h4></button>
        <div id="test-response-main"></div>
    </form>
    `;
}

function loadArticle(article) {
    return `
    <article id="previousArtcile">
        <h3>${article.title}</h3>
        <p>${article.body}</p>
    </article>
    `;
}

function loadArticles() {
    article.innerHTML = `
    <h2>Why you should sign up:</h2>
    <p>Signing up for our weekly email on sustainability and altruism is a powerful start towards bringing about positive change in the world. Subscribing sets you on a journey to be informed and inspired, with a selected dose of relevant content sent once a week. Our newsletter is a ray of hope, providing useful insights on sustainable living practices, eco-friendly activities, and methods to support people in need. Stay connected to a community that shares your desire to make a difference, and be the first to learn about helpful hints, touching tales, and opportunities to help make the world a better, more compassionate place. </p>
    <br><br>
    <h1>Previous topics:</h>
    `;
    const articles = prevArticles.map(loadArticle).join("");
    article.innerHTML += articles;
    
}

pageContentLoaders = [loadFormContainer,loadArticles]

function loadFullContent(pageContentLoaders) {
    pageContentLoaders.forEach(loader => loader());
}

window.addEventListener("DOMContentLoaded", () => loadFullContent(pageContentLoaders), false);