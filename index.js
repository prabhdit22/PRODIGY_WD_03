let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let container=document.querySelector(".container");
// let newGamebtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0=true;

//2D-Array
const winPatterns=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];


const resetGame=()=>{
enableBoxes();
msgContainer.classList.add("hide");
container.classList.remove("hide");
resetBtn.innerText="Restart Game";
}

const enableBoxes=()=>{
    for(let box of boxes)
    {
        turn0=true
       box.disabled=false;
       box.innerText="";
    }
   }

boxes.forEach((box)=>{
box.addEventListener("click",()=>{
if(turn0)
{
   box.innerText="0"; 
   turn0=false;
}
else{
    box.innerText="X"; 
   turn0=true;
}
box.disabled=true;//Taki same box dubara click na ho
checkWinner();
})
})

const disableBtns=()=>{
 for(let box of boxes)
 {
    box.disabled=true;
 }
}


const showWinner=(winner)=>{
    container.classList.add("hide");
    msg.innerText=`Congratulations Winner is Player : ${winner}`;
    disableBtns();
    msgContainer.classList.remove("hide");
    msgContainer.classList.add("active-msg");
    resetBtn.innerText="New Game";
}

const checkWinner=()=>{
for(let pattern of winPatterns){
    let posVal1=boxes[pattern[0]].innerText;
    let posVal2=boxes[pattern[1]].innerText;
    let posVal3=boxes[pattern[2]].innerText;

    if(posVal1 !="" && posVal2 !="" && posVal3 !="")
    {
       if(posVal1 === posVal2 && posVal2 === posVal3)
       {
        //  console.log(" Winner : ",posVal1);
        if(posVal1=='0')
         showWinner(1);
        else
        showWinner(2);
    } 
    }
}
}

resetBtn.addEventListener("click",resetGame);