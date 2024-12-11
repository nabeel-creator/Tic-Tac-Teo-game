console.log("Welcome to MyTicTacToe")
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn="X"
let isgameover= false;
let isplaying = false;

//  function to change turn
const changeTurn = ()=>{
    return turn ==="X"?"O":"X"
}

// function to check winner 
const checkWin = () => {
    // Logic to check if a player has won
    // Update isgameover to true if there's a winner
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText ===  boxtext[e[1]].innerText) && (boxtext[e[2]].innerText ===  boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector(".info").innerText =boxtext[e[0]].innerText+"Won"
            isgameover=true
            document.querySelector(".imgb").getElementsByTagName("img")[0].style.width="250px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
        }
    })
    
}


// game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener("click", () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isgameover) {
                if (!isgameover){
                    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
                } 
            }
        }
    });
});
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "" 
    });
    turn = "X"; 
    isgameover = false
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
    document.querySelector('.imgb').getElementsByTagName('img')[0].style.width = "0px";
})
const togelmusic=()=>{
    if(isplaying){
        music.pause();
        music.currentTime=0;
        document.getElementsByClassName("ps")[0].innerText="Play music";
    }
    else{
        music.play();
        document.getElementsByClassName("ps")[0].innerText="stop music";
    }
    isplaying=!isplaying
}
document.getElementsByClassName("ps")[0].addEventListener("click", togelmusic); 