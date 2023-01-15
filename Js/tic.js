let btns = document.querySelectorAll(".button-option");
let popup = document.querySelector(".popup");
let newgameBtn = document.getElementById("new-game");
let restatBtn = document.getElementById("restart")
let msg = document.getElementById("message");

let winningpattern = [
    [0,1,2],
    [0,3,6],
    [2,5,8],
    [6,7,8],
    [3,4,5],
    [1,4,7],
    [0,4,8],
    [2,4,6]
];

let xturn = true;
let count = 0;



const disablebutton = () =>{
    btns.forEach((Element) => (Element.disabled =true));
    popup.classList.remove("hide");

}

const enablebutton =()=>{
    btns.forEach((Element) =>{
        Element.innerHTML="";
        Element.disabled = false;

    })  
    popup.classList.add("hide");
}




const withfuction = (letter) =>{
    disablebutton();
    if(letter == "x"){
        msg.innerHTML= "&#x1f389; <br> 'X' wins";
    }else{
        msg.innerHTML= "&#x1f389; <br> 'O' wins";
    }
}

const drawfuction = () =>{
    disablebutton();
    msg.innerHTML= "&#x1f389; <br> it`s a Draw ";
}

newgameBtn.addEventListener("click", ()=>{
    count =0;
    enablebutton();
})

restatBtn.addEventListener("click",()=> {
    count = 0;
    enablebutton();
})

const wincheck= ()=>{
    for(let i of winningpattern){
        let [Element1, Element2,Element3]=[
            btns[i[0]].innerText,
            btns[i[1]].innerText,
            btns[i[2]].innerText,
        ];

        if(Element1 !="" && (Element2 !="") && Element3 !="" ){
            if(Element1 == Element2 && Element2 == Element3){
                withfuction(Element1)
            }
        }
    }
}

btns.forEach((element)=>{
    element.addEventListener("click", ()=>{
        if(xturn){
            xturn=false;

            element.innerText = "X"
            element.disabled = true
        }else{
            xturn = true;

            element.innerText = "O";
            element.disabled = true;
        }

        count +=1;
        if(count==9){
            drawfuction();
        }else{
            wincheck();
        }
    })
})

window.onload = enablebutton;