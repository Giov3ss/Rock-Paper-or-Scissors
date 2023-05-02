function computerPlay() { 
    const randomChoice = ['rock', 'paper', 'scissors'];
    return randomChoice[Math.floor(Math.random() * randomChoice.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
       return `It's a tie! you both picked ${playerSelection}`;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
       return "You win! Rock beats Scissors";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
       return "You win! Paper beats Rock";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
       return "You win! Scissors beats Paper";
    } else {
       return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
 }

function game(playRound) {
    for (let i = 1; i < 5; i++) {

    }
}

const playerSelection = prompt("Let's start the game, you can choose 'Rock, Paper, Scissors'").toLocaleLowerCase();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection))