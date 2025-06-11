// let click=document.querySelectorAll("button");
// click.onclick=document.write('hello world');
// for(btn of click){
// btn.onclickmouseenter=sayhello;
// btn.onclick=sayhii;
// btn.onmouseenter=sayhello;
// }
// // click.onmouseenter=alert("press now");
// for(btn of click){
//     btn.addEventListener("click",sayhello);
//     btn.addEventListener("mouseenter",sayhii);
//     btn.addEventListener=document.write
// }
// function sayhello (){
//     alert("hello how are you welcome to my page of ");
// }
// function sayhii (){
// alert("hii");
// }

// const rand=Math.floor((Math.random)*100);
// // alert(rand);
// document.write(rand);

// const max=prompt("Enter the max number");
// let div=document.createElement("div");
// div.style.height="300px";
// div.style.width="300px";
// div.style.border="2px solid black";
// const body=document.querySelector("body");
// body.appendChild(div);
// div.style.backgroundColor=rgb(0,22,90);
// const random=Math.floor((Math.random()*100)+1)
// document.write(random);

// let click=document.querySelector('button');
// function changeColor(){
//     console.log(this.innerText);
// }
// click.addEventListener('click',changeColor);

// let inp=document.querySelector('input');
// inp.addEventListener('keydown',function(event){
//     console.log(event.code);
//  if(event.code=="keyU"){
//     alert("Character move up");
//  }
//  else if(event.code=="keyL"){
//     console.log("Character moves Left")
//  }
//  else if(event.code=="keyR"){
//     console.log("Character moves right")
//  }
//  else if(event.code=="keyD"){
//     console.log("Character moves Down");
//  }
// });     


let Gameseq=[];
let userswq=[];
let started=false;
let Level =0;

let btns=["red","skyblue","orange","lightgray"];
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        console.log("Game is started");


        levelUp();
    }
}
);


function levelUp(){
    Level++;
    h2.innerText=`Level ${Level}`;

    let randidx=Math.floor(Math.random()*3);
    let randColor=btns[randidx];
    let randBtn=document.querySelector(`.${randColor}`);
    console.log("this is a random index value="+randidx);
    console.log("this is a random button  value="+randBtn);
    console.log("this is a random color value="+randColor);
    // btnFlash(randBtn);
    // randColor.classList.add("flash");
    // setTimeout(function (){
        // randBtn.classList.remove("flash");
    // },1000);
}

  