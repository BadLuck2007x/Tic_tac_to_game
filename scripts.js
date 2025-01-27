function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const Tic_tac_to=()=>{

const Id=(id)=>document.getElementById(id);
const clas=(para)=>document.getElementsByClassName(para);

const celebrationContainer = document.getElementById('celebration');
const winnerName = document.getElementById('winner-name');


let con1 = clas("con");
let con2 = clas("con2");
let wincon=Id("player")
let playagain_btn=Id("playagain")
let cancel_btn=Id("cancel")
let new_game=Id("new_game")
let turn ="X";
let isgame=true;
let name1,name2="computer";
let celebration_message=Id("celebration_message")


function reset() {
    for (let i of con1) {
        i.firstChild.innerHTML = '';
    }
    isgame = true;
    turn = "X";
    wincon.innerHTML = `${name1}`;
    setTimeout(() =>Tic_tac_to(),100)
}

function last_control(n){
    console.log(n)

}

function winner(winner) {
        celebrationContainer.style.display = 'flex';
    setTimeout(() => { 
    if (winner==="Draw"){
        celebration_message.childNodes[1].innerHTML="Draw"
        winnerName.innerHTML = `The Game Reasult Is Draw`;
    }
    else{
        celebration_message.childNodes[1].innerHTML="Congratulations"
        winnerName.textContent = `The winner is ${winner}`;
    }
    playagain_btn.addEventListener("click",()=>{
        for (let i of con1) {
            i.firstChild.innerHTML = '';
        }
        turn = "X";
        wincon.innerHTML = `${name1}`;
        setTimeout(() =>game(),100)
        celebrationContainer.style.display = 'none';
    })
    cancel_btn.addEventListener("click",()=>{
        isgame = false;
        let text="<h1 class='last_text'>Game Over</h1>";
        let last_con=Id("celebration-message")
        last_con.innerHTML=text;
    })
    new_game.addEventListener("click",()=>{
                celebrationContainer.style.display = 'none';
                reset()
    });
},100);
}


function win_logic(){
    option = ["X","0"]
    index=[
        [0, 1, 2], 
        [3, 4, 5], 
        [6, 7, 8], 
        [0, 3, 6], 
        [1, 4, 7], 
        [2, 5, 8], 
        [0, 4, 8], 
        [2, 4, 6] 
    ]
    for(let i of index){
        let winX=0,win0=0;
        for (let j of i){
            if(con2[j].innerHTML==option[0]) winX+=1;
            else if(con2[j].innerHTML==option[1]) win0+=1;
        }
        if(winX===3){ 
            winner(name1);
            return;
        } 
        else if(win0===3) {
            winner(name2)
            return;
        }
    }

    let isDraw = true;
    for (let i of con1) {
        if (i.firstChild.innerHTML === '') {
            isDraw = false;
            break;
        }
    }
    if (isDraw) {
        winner("Draw");
        isgame = false;
    }
};

function computer(){
    for (let i of con1){
            let rand=randint(0,8);
            if(con1[rand].firstChild.innerHTML==""){
                con1[rand].firstChild.innerHTML="0"
                break;
            }
        }   

}
function game(){
    wincon.innerHTML=`${name1}`
    for (let i of con1){
        let j=i.firstChild;
        i.addEventListener("click",()=>{
            if (isgame && j.innerHTML ==''){
                if(name2!="computer") j.innerHTML=turn;
                else j.innerHTML="X"
                if(name2=="computer") computer();
                win_logic();
                turn= (turn=="X")? "0" :"X";
                wincon.innerHTML=(turn=="X") ? `${name1}` : `${name2}`;

            };
        
    });
};
};
function start(){
win.style.display="block"
celebrationContainer.style.display = 'none';
btn.addEventListener("click",()=>{
    name1=inp1.children[0].value;
    if (inp2.style.display!="none"){
        name2=inp2.children[0].value;
    }
win.style.display="none"
game();

})
};


start()
}



Tic_tac_to()