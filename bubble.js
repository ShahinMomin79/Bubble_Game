var timer=60
var score=0;
var hitrn=0;


function incScore() {
     score +=10;
     document.querySelector("#scoreval").textContent=score;
}

function getNewHit() {
   hitrn= Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
}

function makeBubble() {
var clutter="";
//in backtick we can write code inside the backtick
// where whenever we use single code we can add dynamic values by addition or plus operator
for (let i = 0; i <=151; i++) {
    var ran=Math.floor(Math.random()*10);
    clutter +=`<div class="bubble">${ran}</div>`;
    
}
document.querySelector("#pbtm").innerHTML=clutter;
}


function runTimer() {
    
    var timer1=setInterval(function () {
        if(timer>0){
        timer--;
        document.querySelector("#timeval").textContent=timer;}
    else{
        clearInterval(timer1);
        document.querySelector("#pbtm").innerHTML=`<h1>Game over</h1>`
    }
    },1000);
}

document.querySelector("#pbtm").addEventListener("click",function (dets) {
    var clickedNum=Number(dets.target.textContent);
    if (clickedNum==hitrn) {
        incScore();
        makeBubble();
        getNewHit();
    }
})

runTimer();
makeBubble();
getNewHit();