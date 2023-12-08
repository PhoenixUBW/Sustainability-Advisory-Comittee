

// var subHeading=document.querySelector("#mainHeading");
// subHeading.innerHTML("Making a difference together");

function loadContent(){
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Sustainability Advisory Committee</title>
            <link rel="icon" type="image/x-icon" href="images/SAC-ICO32x.png">
            <link rel="stylesheet" href="design.css">
            <script src="slider.js"defer></script>
            <script src="index.js"defer></script>
        
            <script src="https://kit.fontawesome.com/b02943948b.js" crossorigin="anonymous"></script>
        </head>
        <body>
            <div id="wrapper"> 
                <!-- NavBar/Header -->
                <nav id="mainNav">
                    <img id="logo" alt="SAC Logo" src="images/SustainabilityAdvisoryCommittee-transparent-blackText.png">
                    <ul class="mainNav">
                        <li class="nav active"><a href="index.html">Home</a></li>
                        <i class="fa-solid fa-circle"></i>
                        <li class="nav"><a href="goals.html">Goals</a></li>
                        <i class="fa-solid fa-circle"></i>
                        <li class="nav"><a href="team.html">Team</a></li>
                    </ul>
                    <li class="nav" id="newsletter"><a href="newsletter.html"><button id="newsletterButton">Sign up for our newsletter</button></a></li>
                    <li class= "nav" id="newsletterIconVersion"><a href="newsletter.html"><button id="newsletterIconButton"><i class="fa-solid fa-envelope" id="newsletterIcon"></i></button></a></li>
                </nav>
                <!-- Website text -->
                <main>
                    <!-- Making a difference together -->
                    <article id="splash">
                        <h1 id="bigHeading" style="color: #538550"></h1> 
                        <h1 id="mainHeading">Making a difference <span style="color: #538550">together</span></h1>
                        <h3 id="subheading">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</h3>
                    </article>
                    <!-- change this image and put image slider here -->
                    <img id="slideImg" src="images/beautiful-landscape.jpg" alt="beautiful landscape">
                    <article id="splash">
                        <button id="imageSliderLeft"><i class="fa-solid fa-arrow-right"></i></button>
                        <button id="imageSliderRight"><i class="fa-solid fa-arrow-right"></i></button>
                        <h1 class= "ourGoals" id="mainHeading">Our <span style="color: #538550">Goals</span></h1>
                        <button class="learnMore"><a href="team.html"><span style="color: white">Learn More</span></a></button>
                    </article>
            
                    <section id="goals"> 
                        <article class="singleGoal" id="Water">
                            <img class="goalImage "id="waterSanitationImg" src="images/waterSanitation.jpg"alt="children sharing water happy">
                            <div class="goalText">
                                <h1 id="cleanWater">Clean <span style="color: #006B8F">water</span> and <span style="color: #006B8F">sanitation</span></h1>
                            </div>
                        </article>
                        
                        <article class="singleGoal" id="Water">
                            <img class="goalImage "id="waterSanitationImg" src="images/waterSanitation.jpg"alt="children sharing water happy">
                            <div class="goalText">
                                <h1 class="goalCentre">No <span style="color: #A21C00">hunger</span></h1>
                            </div>
                        </article>
        
                        <article class="singleGoal" id="Poverty">
                            <img class="goalImage "id="povertyImg" src="images/poverty.jpg"alt="child looking at slums">
                            <div class="goalText">
                                <h1 class="goalCentre">No <span style="color: #0E4D0A">Poverty</span></h1>
                            </div>
                        </article>
                    </section>
        
                    <article id="goals">
                        <h2 class="teamHeading">About our <span style="color:#538550">Team</span></h2>
                        <p id="teamText">Meet the hardworking individuals that make this all possible</p>
                        <button class="learnMore"><a href="team.html"><span style="color:white">Meet the team</span></a></button>
                    </article>
                </main>
            </div>  
            
        </body>
        </html>
        `;                                         
    };                                             
sectionCenter=document.querySelector("html");
var heading=document.querySelector("#bigHeading");
heading.innerHTML=("Sustainability Advisory Committee");