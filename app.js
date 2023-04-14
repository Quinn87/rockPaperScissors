
//prompt for the players choice
const playersChoice = prompt("Enter rock, paper, or scissors.").toLowerCase();
//continue to prompt if the players choise is invalid
while (playersChoice !== "rock" && playersChoice !== "paper" && playersChoice !== "scissors") {
    const playersChoice = prompt("Invalid choose. Enter rock, paper, or scissors.").toLowerCase();
}

//generate the computer's choice
function getComputerChoice (){
    let randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= 33){
        return "Rock"
    }
    else if (randomNumber > 66){
        return "Paper"
    }
    else {
        return "Scissors"
    }
}