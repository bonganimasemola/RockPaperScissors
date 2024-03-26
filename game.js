function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
  }
  
  function playRound(playerSelection, computerSelection) {
    const resultElement = document.getElementById('result');
    const scoreElement = document.getElementById('score');
  
    playerSelection = playerSelection.toLowerCase();
    const winConditions = {
      'rock': 'scissors',
      'paper': 'rock',
      'scissors': 'paper'
    };
  
    if (playerSelection === computerSelection) {
      resultElement.textContent = "It's a tie!";
      return;
    }
  
    if (winConditions[playerSelection] === computerSelection) {
      playerScore++;
      resultElement.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
      computerScore++;
      resultElement.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
  
    if (playerScore >= 3 || computerScore >= 3) {
      const winner = playerScore >= 3 ? 'Player' : 'Computer';
      resultElement.textContent = `Game Over! ${winner} wins the game!`;
      
    }
  
    scoreElement.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
  }
  
  let playerScore = 0;
  let computerScore = 0;
  
  document.getElementById('rock').addEventListener('click', () => playRound('rock', getComputerChoice()));
  document.getElementById('paper').addEventListener('click', () => playRound('paper', getComputerChoice()));
  document.getElementById('scissors').addEventListener('click', () => playRound('scissors', getComputerChoice()));
  