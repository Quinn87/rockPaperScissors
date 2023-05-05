const buttons = document.querySelectorAll('button');
const playerScoreDisplay = document.querySelector('#playerScoreDisplay');
const computerScoreDisplay = document.querySelector('#computerScoreDisplay');
const result = document.querySelector('#result');

let playerScore = 0;
let computerScore = 0;
let winningScore = 5;
let isGameOver = false;


buttons.forEach(button => button.addEventListener('click', function () {
    let playerSelection = this.textContent
    let computerSelection = computerChoice();
    let roundResult = playRound(playerSelection, computerSelection);

    if (!isGameOver) {

        if (roundResult === "win") {
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            result.textContent = `You win! ${playerSelection} beats ${computerSelection}!`
        }

        else if (playerSelection === computerSelection) {
            result.textContent = `Tie! You and the Computer both chose ${computerSelection}!`
        }
        else if (roundResult === "lose") {
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            result.textContent = `You lose. ${computerSelection} beats ${playerSelection}!`
        }

        if (playerScore === winningScore){
            isGameOver = true;
            buttons.disabled = true;
            gameResult.textContent = "Congratulations! You win!"
        }

        else if (computerScore === winningScore){
            isGameOver = true;
            buttons.disabled = true;
            gameResult.textContent = "You lose... Better luck next time..."
        }
    }
}));

//generate the computer's choice
function computerChoice() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= 33) {
        return "Rock";
    }
    else if (randomNumber > 66) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

//play round
function playRound(playerSelection, computerSelection) {
    //player wins
    if ((playerSelection == "Rock" && computerSelection == "Scissors") ||
        (playerSelection == "Paper" && computerSelection == "Rock") ||
        (playerSelection == "Scissors" && computerSelection == "Rock")) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
        return "win";
    }

    else if (playerSelection === computerSelection) {
        console.log(`Tie! You and the Computer both chose ${computerSelection}!`);
        return "tie";
    }

    //player loses
    else {
        console.log(`You lose. ${computerSelection} beats ${playerSelection}!`);
        return "lose";
    }
}