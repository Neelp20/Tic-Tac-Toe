let winContainer = document.querySelector(".win-container");
let msg = document.querySelector("#msg");
let newGameBtn = document.querySelector("#newGame-btn");
let scoreBoard = document.querySelector(".score-board");
let playerXScore = document.querySelector("#playerX");
let playerOScore = document.querySelector("#playerO");
let tieScore = document.querySelector("#tie");
let boxes = document.querySelectorAll(".box");
// let soundToggle = document.getElementById('sound-toggle');
// let moveSound = document.getElementById('move-sound');
// let sadSound = document.getElementById('sad-sound');
let resetBtn = document.getElementById('reset-btn');
let canvas = document.querySelector('#confetti');
const jsConfetti = new JSConfetti();

let turnO = true; //playerX
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
    winContainer.classList.add("hide");
    // scoreBoard.classList.add("hide");
}

boxes.forEach((box) =>{
    box.addEventListener("click", () => {
        // if (soundToggle.checked) moveSound.play();
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
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    if (winner === "X") {
        scoreX++;
        playerXScore.textContent = scoreX;
    } else if (winner === "O") {
        scoreO++;
        playerOScore.textContent = scoreO;

    }
    // msg.innerText = `Winner is ${winner}`;
    winContainer.classList.remove("hide");
    // scoreBoard.classList.remove("hide")
    disableBoxes();
    // confetti
    jsConfetti.addConfetti()
    // alert("game over");
    setTimeout(() => {
        alert(`Congratulations, Winner is ${winner}`);
    },1000)
    
};

const checkTie = () => {
    return [...boxes].every(box => box.innerText !== "");
}

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
        // if (soundToggle.checked) sadSound.play();
        ties++;
        tieScore.textContent = ties;
        // msg.innerText = "It's a Draw!";
        setTimeout(() => {
            alert("It's a Draw!");
        },1000)
        winContainer.classList.remove("hide");
        // scoreBoard.classList.remove("hide");
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
})

