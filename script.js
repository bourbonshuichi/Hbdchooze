const music=document.getElementById("music");

function startCard(){

document.getElementById("start").style.display="none";

document.getElementById("envelopePage").style.display="block";

music.volume=0;

music.play();

let v=0;

let fade=setInterval(()=>{

v+=0.02;

music.volume=v;

if(v>=1){

clearInterval(fade);

}

},200);

}

function openLetter(){

document.getElementById("envelope").classList.add("open");

createEffect();

setTimeout(()=>{

document.getElementById("paper").style.display="block";

},5000);

}

function createEffect(){

const emoji=["🤍","🌸","🎈","🤍","🌸","🎈","🤍","🌸"];

let total=120;

for(let i=0;i<total;i++){

setTimeout(()=>{

let e=document.createElement("div");

e.className="float";

e.innerHTML=emoji[Math.floor(Math.random()*emoji.length)];

e.style.left=Math.random()*100+"vw";

e.style.bottom="-50px";

e.style.fontSize=(25+Math.random()*30)+"px";

e.style.animationDuration=(4+Math.random()*4)+"s";

document.body.appendChild(e);

setTimeout(()=>{

e.remove();

},8000);

},i*80);

}

}
