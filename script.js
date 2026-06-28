const openBtn = document.getElementById("openBtn");
const home = document.getElementById("home");
const letter = document.getElementById("letter");
const music = document.getElementById("music");
const typing = document.getElementById("typing");

const originalHTML = typing.innerHTML;

typing.innerHTML = "";

openBtn.addEventListener("click", () => {

    home.style.display = "none";
    letter.classList.remove("hidden");

    // เล่นเพลง
    music.play().catch(() => {});

    createHearts();
    createPetals();

    typeWriter(originalHTML);

});

function typeWriter(html){

    let i = 0;

    typing.innerHTML = "";

    const timer = setInterval(()=>{

        typing.innerHTML = html.substring(0,i);

        i++;

        if(i > html.length){

            clearInterval(timer);

        }

    },18);

}

function createHearts(){

    setInterval(()=>{

        const heart=document.createElement("div");

        heart.className="heart";

        heart.innerHTML=Math.random()>0.5?"🤍":"💖";

        heart.style.left=Math.random()*100+"vw";

        heart.style.fontSize=(18+Math.random()*18)+"px";

        heart.style.animationDuration=(5+Math.random()*5)+"s";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },10000);

    },250);

}

function createPetals(){

    const flowers=["🌸","🌺","🌼","🌷"];

    setInterval(()=>{

        const p=document.createElement("div");

        p.className="petal";

        p.innerHTML=flowers[Math.floor(Math.random()*flowers.length)];

        p.style.left=Math.random()*100+"vw";

        p.style.fontSize=(18+Math.random()*22)+"px";

        p.style.animationDuration=(8+Math.random()*6)+"s";

        document.body.appendChild(p);

        setTimeout(()=>{

            p.remove();

        },15000);

    },350);

}
