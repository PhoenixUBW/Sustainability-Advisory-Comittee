const formContainerDiv = document.querySelector("#form-container-main");
const article = document.querySelector("#why-and-previous");

class PrevArticle {
    constructor(title, body) {
        this.title = title;
        this.body = body;
    }
}

const article1 = new PrevArticle("Saving the planet one litter a time","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
const article2 = new PrevArticle("saving the trees lol","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
const article3 = new PrevArticle("How to be more efficicent with what you buy","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")

const prevArticles = [];
prevArticles.push(article1);
prevArticles.push(article2);
prevArticles.push(article3);

function loadFormContainer() {
    formContainerDiv.innerHTML = `  
    <img id="newsletter-image" alt="SAC Logo" src="images/SACEdge.png">
    <h1 class="signUpPlead" id="plead-main">Sign up for our newsletter!</h1>
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
    <h2>Why you should sign up</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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