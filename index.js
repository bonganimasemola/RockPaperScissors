function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {
     
    playerSelection = playerSelection.toLowerCase();

    const winConditions = {
        'rock': 'scissors',
        'paper': 'rock',
        'scissors': 'paper'
    };

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }

    
    if (winConditions[playerSelection] === computerSelection) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
  }
  
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  

  function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        const playerSelection = prompt("Enter your choice (rock, paper, or scissors):");
        const computerSelection = getComputerChoice();

        console.log(`Round ${round}:`);
        console.log(`Player selects: ${playerSelection}`);
        console.log(`Computer selects: ${computerSelection}`);

        const result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result.includes('Win')) {
            playerScore++;
        } else if (result.includes('Lose')) {
            computerScore++;
        }
    }

    console.log('Game Over!');
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);

    if (playerScore > computerScore) {
        console.log('Congratulations! You win the game!');
    } else if (playerScore < computerScore) {
        console.log('Sorry! You lose the game!');
    } else {
        console.log("It's a tie game!");
    }
}

playGame();