class TeamMember {
    
    constructor(name, content, id) {
        this.name = name;
        this.content = content
        this.id = id
    }
}

const aidan = new TeamMember("Aidan","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consectetur tempor felis, sit amet consectetur justo molestie sit amet. Donec non magna neque. Ut id velit vel ipsum blandit efficitur. Mauris lectus ipsum, egestas laoreet libero ac, congue commodo est. Mauris blandit nunc eget nisi pharetra blandit. Quisque a nisi massa. In hac habitasse platea dictumst. Sed convallis imperdiet eros, sit amet hendrerit sem lobortis eget.","")
const israel = new TeamMember("Israel","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consectetur tempor felis, sit amet consectetur justo molestie sit amet. Donec non magna neque. Ut id velit vel ipsum blandit efficitur. Mauris lectus ipsum, egestas laoreet libero ac, congue commodo est. Mauris blandit nunc eget nisi pharetra blandit. Quisque a nisi massa. In hac habitasse platea dictumst. Sed convallis imperdiet eros, sit amet hendrerit sem lobortis eget.","outlier")
const archie = new TeamMember("Archie","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consectetur tempor felis, sit amet consectetur justo molestie sit amet. Donec non magna neque. Ut id velit vel ipsum blandit efficitur. Mauris lectus ipsum, egestas laoreet libero ac, congue commodo est. Mauris blandit nunc eget nisi pharetra blandit. Quisque a nisi massa. In hac habitasse platea dictumst. Sed convallis imperdiet eros, sit amet hendrerit sem lobortis eget.","")

const teamMembers = [];
teamMembers.push(aidan);
teamMembers.push(israel);
teamMembers.push(archie);

const header = document.querySelector("#header");
const banner = document.querySelector("#ivy-banner");
const section = document.querySelector("#TeamMembers");

function loadHeader() {
    header.innerHTML = `<h2 id="mainTitle">Our Team</h2>`;
}

function loadBanner() {
    banner.innerHTML = `<figure>
                            <img id="banner" alt="Green Ivy Banner" src="images/ivy pexels.jpeg"> 
                        </figure>`; // alt was "green-banner"
}

function loadTeamMember(teamMember) {
    return `
    <article class="TeamMember" id=${teamMember.id}>
        <h3 class="MemberName">${teamMember.name}</h3>
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