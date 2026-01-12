let gameseq=[];
let plyrseq=[];

let started=false;
let level=0;
let btns=["red","yellow","purple","green"];

let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game started");
        started=true;

        levelup();
    }
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function levelup(){
    plyrseq=[];
    level++;
    h2.innerText=`level ${level}`;
    let randInd=Math.floor(Math.random()*3);
    let randColor=btns[randInd];
    let randBtn=document.querySelector(`.${randColor}`);
  
    gameseq.push(randColor);
    console.log(gameseq);
    gameFlash(randBtn);
}

function chkAnswer(){
    let ind=plyrseq.length-1;
    if(plyrseq[ind]===gameseq[ind]){
        if (plyrseq.length == gameseq.length) setTimeout(levelup,1000);
    }
    else{
        h2.innerHTML=`Game over! Your score is <b>${level}<b> </br>press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}

function btnPress(){
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");

    plyrseq.push(userColor);

    chkAnswer();
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameseq=[];
    plyrseq=[];
    level=0;
}