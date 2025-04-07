let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let count =0;
let turn0 = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = ()=>{
    turn0 = true;
    count =0;
    enableboxes();
    msgContainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText = 'O';
            turn0 = false;
        }else{
            box.innerText = 'X';
            turn0 = true; 
        }
        box.disabled = true;
        count++;
        let isWinner = checkWinner();

if(count == 9 && !isWinner){
    draw();
}
    });

});

const checkWinner = () =>{
    for(let pattern of winPatterns){
       
           let pos1= boxes[pattern[0]].innerText;
           let pos2= boxes[pattern[1]].innerText;
           let pos3= boxes[pattern[2]].innerText;

           if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("WINNER ",pos1);
                showWinner(pos1);
                return true;
            }
      }
    }
    return false;
};



const draw = () =>{
        msg.innerText = "It's a draw , Try again guys !!";
        msgContainer.classList.remove("hide");
        Disableboxes();
    
}
const showWinner= (winner) =>{

  msg.innerText = `Congratulations , Winner is ${winner}`;
    
  msgContainer.classList.remove("hide");
    
  Disableboxes();
}

const Disableboxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    };
};

const enableboxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    };
};
resetBtn.addEventListener("click",resetGame);