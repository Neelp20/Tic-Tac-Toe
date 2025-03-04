let hideBtn = document.querySelector(".hide-btn");
let newGameBtn = document.querySelector("#newGame-btn");
let playerOScore = document.querySelector("#playerO");
let playerXScore = document.querySelector("#playerX");
let tieScore = document.querySelector("#tie");
let boxes = document.querySelectorAll(".box");
let soundToggle = document.getElementById('sound-toggle');
let moveSound = document.getElementById('move-sound');

let resetBtn = document.getElementById('reset-btn');
const jsConfetti = new JSConfetti();

let turnO = true; 
let scoreX = 0;
let scoreO = 0;
let ties = 0;


const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    hideBtn.classList.add("hide");
};

boxes.forEach((box) =>{
    box.addEventListener("click", () => {
        if (soundToggle.checked) moveSound.play();
        if (turnO) {  //playerO
            box.innerText = "O";
            turnO = false;    
        } else {  //playerX
            box.innerText = "X";
            turnO = true;
        }
        
        box.disabled = true; //To prevent the same box clicked more than once

        checkWinner(); //To check the winner
    });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    if (winner === "X") {
        scoreX++;
        playerXScore.textContent = scoreX;
    } else if (winner === "O") {
        scoreO++;
        playerOScore.textContent = scoreO;

    }
    
    hideBtn.classList.remove("hide");
    
    disableBoxes();
    // confetti
    jsConfetti.addConfetti()
    setTimeout(() => {
        alert(`Congratulations, Winner is ${winner}`);
    },1000)   
};

const checkTie = () => {
    return [...boxes].every(box => box.innerText !== "");
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
                return;
            }
        }
    }

    if (checkTie()) {
        
        ties++;
        tieScore.textContent = ties;
        
        setTimeout(() => {
            alert("It's a Draw!");
        },1000)
        hideBtn.classList.remove("hide");
    
        disableBoxes();
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", () => {
    scoreX = 0;
    scoreO = 0;
    ties = 0;
    playerXScore.textContent = scoreX;
    playerOScore.textContent = scoreO;
    tieScore.textContent = ties;
    resetGame();
});

