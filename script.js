let boxes=document.querySelectorAll(".box");
let res_btn=document.querySelector("#reset-btn");
let new_btn=document.querySelector("#new-btn");
let msg=document.querySelector(".msg");
let winner_msg=document.querySelector("#winner-msg");

let playerO=true;
let count=0;

let winner=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


const resetgame=()=>{
      playerO=true;
       enable();
       count=0;
       msg.classList.add("hide");
    
}
 


// const change=(val)=>{
//     if(val==="O"){
//         val.style.backgroundColor="#868754"
//     }
//     else{
//         val.style.backgroundColor="#875486"
//     }
// }

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       if(playerO){
        box.innerText="O";
        // change(box)
        count++;
        playerO=false;
       }
       else{
        box.innerText="X";
        // change(box)
        count++;
        playerO=true;
       }

       box.disabled=true;  //disable the box after a click for avoid repetition of result
       
       checkwinner();
    })
})

const disable=()=>{
    for(let box of boxes){
        box.disabled=true;    //disable function 
    }
}
const enable=()=>{
    for(let box of boxes){
        box.disabled=false;   //enable function
        box.innerText="";
    }
}

const showwinner=(winner)=>{
      winner_msg.innerText=`Congratulations! winner is ${winner}`;
      msg.classList.remove("hide");
      disable();
}

const drawmatch=()=>{
    winner_msg.innerText="Match is draw , Try next Round!";
    msg.classList.remove("hide");
    count=0;
    disable();
}

const checkwinner=()=>{
    for(let pattern of winner){
       let p1= boxes[pattern[0]].innerText 
       let p2= boxes[pattern[1]].innerText 
       let p3= boxes[pattern[2]].innerText 
        if(p1!="" && p2!="" && p3!=""){
            if(p1===p2 && p2===p3){
                showwinner(p1);
            }
        }
        if(count===9){
            drawmatch();
        }  
       
    }
}

res_btn.addEventListener("click",resetgame);
new_btn.addEventListener("click",resetgame);