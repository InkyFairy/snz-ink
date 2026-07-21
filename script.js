// SNZ.INK
//
// Take your time.
// Nothing here is in a hurry.
/* Grow the first strange flowers */

const flowerField = document.getElementById("flower-container");

if (flowerField) {

    for (let i = 0; i < 4; i++) {

        const flower = document.createElement("div");

        flower.className = "alien-flower";

        flowerField.appendChild(flower);

    }

}
/* =====================================================
   SNZ.INK
   Quiet little life
===================================================== */

const sayings = [

    "You found your way back.",

    "The flowers remember you.",

    "Nothing blooms in a hurry.",

    "Some paintings take years.",

    "Leave something beautiful behind.",

    "Someone smiled here once.",

    "The paper still smells like paint.",

    "The margins are my favourite part.",

    "Please stay as long as you need."

];

const thought = document.getElementById("changingThought");

if(thought){

    setInterval(()=>{

        thought.style.opacity=0;

        setTimeout(()=>{

            thought.textContent=

            sayings[Math.floor(Math.random()*sayings.length)];

            thought.style.opacity=.65;

        },600);

    },7000);

}

/* Tiny drifting paint particles */

for(let i=0;i<22;i++){

    const dot=document.createElement("div");

    dot.className="paintDust";

    dot.style.left=Math.random()*100+"vw";

    dot.style.top=(80+Math.random()*20)+"vh";

    dot.style.animationDuration=(12+Math.random()*10)+"s";

    dot.style.animationDelay=(-Math.random()*12)+"s";

    document.body.appendChild(dot);

}
