let humanScore = 0;
let computerScore = 0;

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
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log("Human:" + String(humanScore));
console.log("Computer:" +String(computerScore));