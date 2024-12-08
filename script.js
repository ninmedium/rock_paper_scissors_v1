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

