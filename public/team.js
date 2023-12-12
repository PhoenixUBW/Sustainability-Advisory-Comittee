class TeamMember {
    
    constructor(name, content, id) {
        this.name = name;
        this.content = content
        this.id = id
    }
}
// add names, bio, role, responsibility, contributions to team page
const aidan = new TeamMember("Aidan","Hi! I'm Aidan, one of the passionate developers behind this website. My dedication to environmental causes and improving lives has been the driving force behind my contributions to this project. Leading the team, I've focused on CSS and responsiveness, crafting the website's aesthetic, including the footer and navigation bar. Additionally, all logos on the website were created by me in PhotoShop! I've taken on the responsibility of creating the goals and newsletter pages, ensuring they contribute to an engaging user experience. Furthermore, I utilised JavaScript to take inputs from all the forms around the website, passing them into a database. My commitment to perfection is evident in optimizing the website for a seamless display on a variety of devices. I am confident that our collective efforts have made the website the best it can be. Thank you for taking the time to learn about my role in this project!")
const israel = new TeamMember("Israel","I'm Israel, one of the three individuals who helped work on this project. I am the lead director behind the function of the homepage, and my primary job was the html, css and JavaScript behind the homepage. I also had the task of using the information and tools at my disposal to create a vivid and user-friendly colour scheme for my teammates to work off of when designing their pages. My passion is to push the boundaries of the knowledge that I have in computer science to new heights through perseverence and tenacity, which led me to taking part in this project. I hope that you will be able to see the hard work, dedication and love put into this website as you look through it. Thank you for reading about me and my participation in this project!","outlier")
const archie = new TeamMember("Archie","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consectetur tempor felis, sit amet consectetur justo molestie sit amet. Donec non magna neque. Ut id velit vel ipsum blandit efficitur. Mauris lectus ipsum, egestas laoreet libero ac, congue commodo est. Mauris blandit nunc eget nisi pharetra blandit. Quisque a nisi massa. In hac habitasse platea dictumst. Sed convallis imperdiet eros, sit amet hendrerit sem lobortis eget.","")

const teamMembers = [];
teamMembers.push(aidan);
teamMembers.push(archie);
teamMembers.push(israel);

const header = document.querySelector("#header");
const article = document.querySelector("#intro");
const banner = document.querySelector("#ivy-banner");
const section = document.querySelector("#TeamMembers");

function loadHeader() {
    header.innerHTML = `<h1 id="mainTitle">Our <span style="color: #538550">Team</span></h1>
                        <p id="intro">Meet the team behind the development of this site.</p>`;
}

function loadBanner() {
    banner.innerHTML = `<figure>
                            <img id="banner" alt="Zebra Banner" src="images/pexels-zebra.jpg"> 
                        </figure>`;
}

function loadTeamMember(teamMember) {
    return `
    <article class="TeamMember" id=${teamMember.id}>
        <h1 class="MemberName">${teamMember.name}</h1>
        <p class="MemberContent">${teamMember.content}</p>
    </article>
            `;
}

function loadTeamMemberContent(){
    const displayTeamMember = teamMembers.map(loadTeamMember).join("");
    section.innerHTML = displayTeamMember;
}

pageContentLoaders = [loadHeader,loadBanner,loadTeamMemberContent]

function loadFullContent(pageContentLoaders) {
    pageContentLoaders.forEach(loader => loader());
}

window.addEventListener("DOMContentLoaded", () => loadFullContent(pageContentLoaders), false);