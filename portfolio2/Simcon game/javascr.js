let btns = ["red", "skyblue", "orange", "lightgray"];
let body = document.querySelector("body");
let p = document.createElement("p");
let divs = document.querySelector(".score");

let h3 = document.createElement("h3");
let Gameseq = [];
let userseq = [];
let started = false;
let Level = 0;
let highest_score = 0;
let score = 0;
let h2 = document.querySelector("h2");

let kk = document.createElement("p");
kk.classList.add("flash");
console.log(kk.classList);
document.addEventListener("keypress", function () {
    if (started == false) {
        started = true;
        console.log("Game is started");

        LevelUp();
    }
}
);

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 200);

}


function LevelUp() {
    Level++;
    userseq = [];
    // alert(highest_score);
    h2.innerText = `Level.${Level}`;
    let randidx = Math.floor(Math.random() * 3);
    let randcolor = btns[randidx];
    let randBtn = document.querySelector(`.${randcolor}`);
    // console.log(randidx);
    // alert(randcolor);
    // console.log(randBtn);
    Gameseq.push(randcolor);
    score = Level;
    p.innerText = `score : ${score}`;
    divs.appendChild(p);
    console.log(Gameseq);

    btnFlash(randBtn);

}
function checkans(idx) {
    if (Gameseq[idx] === userseq[idx]) {
        if (userseq.length == Gameseq.length) {
            setTimeout(LevelUp, 1000);
            if (highest_score <= 0) {
                highest_score = highest_score + 1;

                //    alert(highest_score);
                h3.innerHTML = `<br>Highest Score ${highest_score}`;
                divs.appendChild(h3);
            }
            else if (highest_score < Level) {
                highest_score = Level;
                // alert(highest_score);
                h3.innerHTML = `<br>Highest Score:-${highest_score}`;
                divs.appendChild(h3);

            }
        }
    }
        else {

            h2.innerHTML = `Game Over!Your score was <b>${Level}</b>.<br>Press any key to restart `;
            body.classList.add("redalert");
            setTimeout(function () {
                body.classList.remove("redalert");
            }, 400);
    
            reset();
        }
    
    
  }

// Level=0;

// });



function btnpress() {
    console.log(this);
    let btn = this;
    btnFlash(btn);
    let userColor = btn.getAttribute("id");
    // alert(userColor);
    userseq.push(userColor);
    console.log("Game seq=", Gameseq);
    console.log("user seq=", userseq);

    checkans(userseq.length - 1);

}

let allbtns = document.querySelectorAll(".box");
for (allbtnss of allbtns) {
    allbtnss.addEventListener("click", btnpress);
}

function reset() {
    Gameseq = [];
    userseq = [];
    Level = 0;
    started = false;
}