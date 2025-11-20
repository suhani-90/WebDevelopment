let boxes=document.querySelectorAll(".box");
let btn=document.querySelector("#reset");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turno=true;

let winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
   box.addEventListener("click",() => {
    if(turno){
        box.innerText="O";
        turno=false;
       }
       else{
        box.innerText="X";
        turno=true;
       }
       box.disabled=true;
       checkWinner();
       });
});

const disable=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enable=()=>{
    for(let box of boxes){
        box.innerText="";
        box.disabled=false;
    }
};
const showWinner=(winner)=>{
    msg.innerText=`Congratulations winner is ${winner}`;
    msgContainer.classList.remove("hide");
};

const reset=()=>{
    turno=true;
    enable();
    msgContainer.classList.add("hide");
};
let count=1;
    box.addEventListener("click",() => {
    count++;
    if(count===9){
        msg.innerText=`It is a draw`;
        msgContainer.classList.remove("hide");
    }
    });
const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!="" ){
            if(pos1===pos2 && pos2===pos3){
                showWinner(pos1);
                disable();
            }
        }
       
      }
      
    }



btn.addEventListener("click",reset);
newGameBtn.addEventListener("click",reset);
   


