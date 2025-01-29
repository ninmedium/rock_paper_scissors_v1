function getComputerChoice() {
    let randNum = 3 * Math.random();

    if (randNum <= 1) {
        return "rock";
    } else if (randNum <= 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let userChoice = "";

    while (true) {
        userChoice = prompt("Rock, Paper or Scissors?").toLowerCase();

        if (userChoice === "rock" || userChoice === "paper" || userChoice ==="scissors") {
            return userChoice;
        } else {
            alert("Invalid choice. Please type 'Rock', 'Paper' or 'Scissors'.")
        }
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return;
    } else if (humanChoice == "rock" && computerChoice == "scissors" 
        || humanChoice == "paper" && computerChoice == "rock"
        || humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
    } else {
        computerScore++;
    }

    console.log(humanScore);
    console.log(computerScore);
}

let rBtn = document.querySelector("#rock");
let pBtn = document.querySelector("#paper");
let sBtn = document.querySelector("#scissors");

rBtn.addEventListener("click", () => playRound("rock", getComputerChoice()));
pBtn.addEventListener("click", () => playRound("paper", getComputerChoice()));
sBtn.addEventListener("click", () => playRound("scissors", getComputerChoice()));




// function playGame() {
//     let humanScore = 0;
//     let computerScore = 0;

//     for (let i = 0; i < 5; i++) {
//         playRound(getHumanChoice(), getComputerChoice());
//         console.log("Human:" + String(humanScore));
//         console.log("Computer:" +String(computerScore));
//     }

//     function playRound(humanChoice, computerChoice) {
//         if (humanChoice === computerChoice) {
//             return;
//         } else if (humanChoice == "rock" && computerChoice == "scissors" 
//             || humanChoice == "paper" && computerChoice == "rock"
//             || humanChoice == "scissors" && computerChoice == "paper") {
//             humanScore++;
//         } else {
//             computerScore++;
//         }
//     }
// }

// playGame();