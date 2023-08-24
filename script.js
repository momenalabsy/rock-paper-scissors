const rock = "rock";
const paper = "paper";
const scissors = "scissors";

let playerScore = 0;
let computerScore = 0;


function getComputerChoice(...computerSelection) {
    return computerSelection[Math.floor(Math.random() * computerSelection.length)];
}

// const computerAnswer = getComputerChoice(rock, paper, scissors);
// const playerSelection = prompt("choose rock, paper or scissors: ").toLowerCase();


function round(playerSelection, computerSelection) {
    if (playerSelection === rock && computerSelection === rock) {
    alert("Draw, rock can't beat rock");
    } else if (playerSelection === rock && computerSelection === scissors) {
    alert("You win, rock beats scissors");
    playerScore++;
    } else if (playerSelection === rock && computerSelection === paper) {
    alert("You lose, paper beats rock");
    computerScore++;
    } else if (playerSelection === paper && computerSelection === paper) {
    alert("Draw, paper can't beat paper");
    } else if (playerSelection === paper && computerSelection === rock) {
    alert("You win, paper beats rock");
    playerScore++;
    } else if (playerSelection === paper && computerSelection === scissors) {
    alert("You lose, scissors beat paper");
    computerScore++;
    } else if (playerSelection === scissors && computerSelection === scissors) {
    alert("Draw, scissors can't beat scissors");
    } else if (playerSelection === scissors && computerSelection === paper) {
    alert("You win, scissors beats paper");
    playerScore++;
    } else if (playerSelection === scissors && computerSelection === rock) {
    alert("You lose, rock beats scissors");
    computerScore++;
    } else {
    alert("Invalid answer, please type a correct answer");
    };
}

function game() {
    for (let i = 0; i < 5; i++) {
      const playerSelection = prompt("Choose rock, paper or scissors: ").toLowerCase();
      const computerAnswer = getComputerChoice(rock, paper, scissors);
      round(playerSelection, computerAnswer);
    }
}
 

function gameScore(){
    if (playerScore > computerScore) {
    alert("Congratulations! You won the game!");
} else if (playerScore < computerScore){
    alert("Sorry, you lost the game. Better luck next time!");
} else {
    alert("Draw, no winner")
}
}

game();
gameScore();
