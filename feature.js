let win=document.getElementById("wincon");
let chek = document.getElementById("chek");
let chek1= document.getElementById("value-1");
let chek2= document.getElementById("value-2");
let inp1= document.getElementById("inp1");
let inp2= document.getElementById("inp2");
let btn=document.getElementById("btn");



inp2.style.display="none";
btn.addEventListener("click",()=>{
    if(inp1.children[0].value=="" || inp1.children[0].value=="player1")
        {
            if (inp2.style.display=="none"){
                inp1.children[0].value="player";
            }
        }
})
chek.addEventListener("change",()=>{
    if(!chek1.checked || chek2.checked){
        inp2.style.display="flex";
        inp1.children[1].innerHTML="First Player";
        inp2.children[1].innerHTML="Second Player";
        btn.addEventListener("click",()=>{
            if(inp1.children[0].value=="" || inp1.children[0].value=="player") inp1.children[0].value="player1";
            if(inp2.children[0].value=="") inp2.children[0].value="player2"
        })
    }else{
        inp2.style.display="none";
        inp1.children[1].innerHTML="Enter Your Name";
    //     btn.addEventListener("click",()=>{
    //         if(inp1.children[0].value==" ")
    //             {
    //                 inp1.children[0].value="player";
    //             }
    // })
    }})
