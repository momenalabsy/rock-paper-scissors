const rock = "rock"
const paper = "paper"
const scissors = "scissors"

const choices = [rock, paper, scissors]

let playerScore = 0;
let computerScore = 0;


function getComputerChoice(choices) {
    return choices[Math.floor(Math.random() * choices.length)];
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



// function game() {
//     for (let i = 0; i < 5; i++) {
//       const playerSelection = alert("Choose rock, paper or scissors: ");
//       const computerAnswer = getComputerChoice(choices);
//       console.log(computerAnswer)
//       round(playerSelection, computerAnswer);
//     }
// }
 
const container = document.getElementById("container");
const para = document.createElement("p");
const para2 = document.createElement("p");

const node = document.createTextNode("Congratulations! You won the game!");
const node2 = document.createTextNode("Sorry, you lost the game. Better luck next time!");

para.appendChild(node);
para2.appendChild(node2);



function gameScore(){
    if (playerScore >= 5) {
    container.appendChild(para);

} else if (computerScore >= 5){
    container.appendChild(para2);
}

}
let computerAnswer = ""

function playerSelectionRound(selection) {
    return playerSelection = selection,
    console.log(playerSelection),
    computerAnswer = getComputerChoice(choices),
    console.log(computerAnswer),
    round(playerSelection, computerAnswer),
    console.log(playerScore),
    console.log("computer score = ", playerScore),
    console.log("computer score = ", computerScore),
    gameScore();
}

const playerSelectionRock = document.querySelector("#rock");
playerSelectionRock.addEventListener("click", () => {
  playerSelectionRound(rock)
})

const playerSelectionPaper = document.querySelector("#paper");
playerSelectionPaper.addEventListener("click", () => {
  playerSelectionRound(paper)
})

const playerSelectionScissors = document.querySelector("#scissors");
playerSelectionScissors.addEventListener("click", () => {
  playerSelectionRound(scissors)
})






