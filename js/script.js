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

 let playerScore = 0;
 let computerScore = 0;

function game(playRound) {
    for (let i = 1; i < 6; i++) {
      const playerSelection = prompt(`Let's start round ${i}: Choose Rock, Paper, Scissors`).toLocaleLowerCase();
      const computerSelection = computerPlay();
      const result = (playRound(playerSelection, computerSelection));
      console.log(`Round ${i}: ${result}`);
      if (result.includes("win")) {
         playerScore++;
      } else if (result.includes("lose")) {
         computerScore++;
      } 

    };

   if (playerScore > computerScore) {
      console.log(`You win! your score is: ${playerScore} and computer score is: ${computerScore}`);
   } else if (playerScore < computerScore) {
      console.log(`You lose! your score is: ${playerScore} and computer score is: ${computerScore}`);
   } else {
      console.log(`It's a Tie! your score is: ${playerScore} and computer score is: ${computerScore}`);
   };
}

game(playRound)
