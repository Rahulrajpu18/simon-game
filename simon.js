let gameseq =[];
let userseq = [];

let btns = ["red", "green","yellow","purple"];

let start = false;
let level =0;

let h2 = document.querySelector("h2");
document.addEventListener("keypress" , function(){
    if(start == false){
        start = true;

        levelUp();
    }
  
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

function levelUp(){
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randidx = Math.floor(Math.random()*4);
    let randcol = btns[randidx];
    let randbtn = document.querySelector(`.${randcol}`);

    gameseq.push(randcol);
    console.log(gameseq);
    btnflash(randbtn);
}

function checkans(idx){
    
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelUp , 1000);
        }
    }else{
        h2.innerHTML = `Game over ! your score was <b>${level}</b> <br> press any key to restart`;
        document.querySelector("body").style.backgroundColorcolor = "red";
        setTimeout(function (){
         document.querySelector("body").style.backgroundColorcolor = "white";
        },150);
        restart();
    }

}
function btnpress(){
    let btn = this;
    btnflash(btn);

    usercol = btn.getAttribute("id");
    userseq.push(usercol);

    checkans(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click", btnpress);
}
function restart(){
    start = false;
    gameseq = [];
    userseq = [];
    level = 0;
}