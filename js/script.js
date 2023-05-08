function computerPlay() {
  const randomChoice = ['rock', 'paper', 'scissors'];
  return randomChoice[Math.floor(Math.random() * randomChoice.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `It's a tie! You both picked ${playerSelection}`;
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return 'You win! Rock beats Scissors';
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return 'You win! Paper beats Rock';
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return 'You win! Scissors beats Paper';
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

let playerScore = 0;
let computerScore = 0;

function getUserInput(promptMessage, errorMessage, validInputs, quitGame) {
  while (true) {
    const input = prompt(promptMessage).toLowerCase().trim();
    if (input === quitGame) {
      return quitGame;
    } else if (validInputs.includes(input)) {
      return input;
    } else {
      console.log(errorMessage);
    }
  }
}

function displayRules() {
   const rulesMessage = `Welcome to Rock, Paper, Scissors!
 
 Rules:
 - You will play against the computer for 5 rounds.
 - To make a selection, type "rock", "paper", or "scissors".
 - If you want to quit the game, simply type "quit".
 - After 5 rounds, the final scores will be displayed.
 
 Are you ready to play?`;
 
   alert(rulesMessage);
 }

function displayResult(playerName) {
  if (playerScore > computerScore) {
    console.log(`Congratulations, ${playerName}! You win! Your score is: ${playerScore} and computer score is: ${computerScore}`);
  } else if (playerScore < computerScore) {
    console.log(`Sorry, ${playerName}. You lose! Your score is: ${playerScore} and computer score is: ${computerScore}`);
  } else {
    console.log(`It's a tie, ${playerName}! Your score is: ${playerScore} and computer score is: ${computerScore}`);
  }
}

function game() {

   let playAgain = true;

   while (playAgain) {
    displayRules();

    let playerName = prompt('Welcome to Rock, Paper, Scissors! Please enter your name:');
    while (!playerName || playerName.trim() === '') {
      alert('Invalid name. Please enter a valid name.');
      playerName = prompt('Welcome to Rock, Paper, Scissors! Please enter your name:');
    }

    playerScore = 0;
    computerScore = 0;

    for (let i = 1; i <= 5; i++) {
      const quitGame = 'quit';
      const playerSelection = getUserInput(
        `Round ${i}: Choose Rock, Paper, or Scissors:`,
        'Error: Please enter a valid choice (rock, paper, or scissors).',
        ['rock', 'paper', 'scissors'],
        quitGame
      );

      if (playerSelection === quitGame) {
         console.log(`Thank you for playing, ${playerName}! Goodbye.`)
         playAgain = false;
         break;
      }
      const computerSelection = computerPlay();
      const result = playRound(playerSelection, computerSelection);
      console.log(`Round ${i}: ${result}`);

      if (result.includes('win')) {
        playerScore++;
      } else if (result.includes('lose')) {
        computerScore++;
      }
    }

    displayResult(playerName);
    
    playAgain = confirm('Do you want to play again?');
  }

  console.log('Thank you for playing! Goodbye.');
}

game();