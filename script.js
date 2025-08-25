let boxes = document.querySelectorAll("#box");
let resetBtn = document.querySelector("#reset-btn");
let msges = document.querySelector("#msg");
let newGame = document.querySelector("#new-game-btn");
let msgContainer = document.querySelector(".msg-container");
let newmagic = document.querySelector(".magic");
let newGameSec = document.querySelector(".game-sec");
let turnO = true;

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

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWin();
        checkDraw();
    });
});

const resetGame = () => {
    trueO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    newGameSec.classList.remove("hide");
};


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

const showWin = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    newGameSec.classList.add("hide");
    disableBoxes();
};


const checkWin = () => {
    for (let pattern of winPatterns) {

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWin(pos1Val);
                return;
            }
        }
    }
};


const checkDraw = () => {
    let allFilled = true; 

    boxes.forEach((box) => {
        if (box.innerText === "") {
            allFilled = false;
        }
    });

    if (allFilled) {
        msg.innerText = "It's a draw!";
        msgContainer.classList.remove("hide");
        newGameSec.classList.add("hide");
    }
};


newGame.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);