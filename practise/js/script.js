let toggle=document.querySelector("#toggle");
let curmode="light";
let body= document.querySelector("body");

toggle.addEventListener("click",()=>{
   if(curmode==="light"){
    curmode="dark";
   body.classList.add("dark");
   body.classList.remove("light");
   }
    else{
        curmode="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(curmode);
})


toggle.addEventListener("mouseover",()=>{
    console.log("mouse is on button")
    toggle.style.backgroundColor="red";
 })