
let userScore=0
let compScore=0

const choices=document.querySelectorAll(".choice");


const genCompChocie=()=>{
     const options=["rock","paper","scissor"];
     const random=Math.floor(Math.random()*3);
     return options[random];
}

const playGame=(userChoice)=>{
    console.log("user Chocie =" ,userChoice);
    const compChocie=genCompChocie();
    console.log("Comp Chocie =" ,compChocie);
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
    console.log("choice was clicked",userChoice);
    playGame(userChoice);
    });
});

