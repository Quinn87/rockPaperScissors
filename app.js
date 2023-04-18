game();

function playerChoice() {
    //prompt for the players choice
    let playerSelection = prompt("Enter rock, paper, or scissors.").toLowerCase();
    //continue to prompt if the players choise is invalid
    while (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        playerSelection = prompt("Invalid choose. Enter rock, paper, or scissors.").toLowerCase();
    }
    return playerSelection;
}

//generate the computer's choice
function computerChoice() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= 33) {
        return "rock";
    }
    else if (randomNumber > 66) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

//play round
function playRound(playerSelection, computerSelection) {
    //player wins
    if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "rock")) {
        let win = `You win! ${playerSelection} beats ${computerSelection}!`;
        return win;
    }

    else if (playerSelection === computerSelection) {
        let tie = `Tie! You and the Computer both chose ${computerSelection}!`;
        return tie;
    }

    //player loses
    else {
        let lose = `You lose. ${computerSelection} beats ${playerSelection}!`;
        return lose;
    }
}

function game() {
    for (i = 0; i < 5; i++) {
        const computerSelection = computerChoice();
        let playerSelection = playerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}