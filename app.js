
//prompt for the players choice
let playerSelection = prompt("Enter rock, paper, or scissors.").toLowerCase();
//continue to prompt if the players choise is invalid
while (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
    playerSelection = prompt("Invalid choose. Enter rock, paper, or scissors.").toLowerCase();
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

const computerSelection = computerChoice();

//play round
function playRound(playerSelection, computerSelection) {
    //player wins
    if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "rock")){
        let roundResult = `You win! ${playerSelection} beats ${computerSelection}!`;
        return roundResult;
    }

    else if (playerSelection === computerSelection){
        let roundResult = `Tie! You and the Computer both chose ${computerSelection}!`;
        return roundResult;
    }

    //player loses
    else {
        let roundResult = `You lose. ${computerSelection} beats ${playerSelection}!`;
        return roundResult;
    }
}

console.log(playRound(playerSelection, computerSelection));