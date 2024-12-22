// Global score variables
let humanScore = 0;
let computerScore = 0;

// Function to get the computer's choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

// Function to play a single round
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return `It's a tie! Both chose ${humanChoice}.`;
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    updateScores();
    return `You win this round! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    updateScores();
    return `You lose this round! ${computerChoice} beats ${humanChoice}.`;
  }
}

// Function to update scores on the UI
function updateScores() {
  document.getElementById("human-score").textContent = humanScore;
  document.getElementById("computer-score").textContent = computerScore;
}

// Function to handle the player's choice
function handleChoice(choice) {
  const computerChoice = getComputerChoice();
  const result = playRound(choice, computerChoice);
  document.getElementById("round-result").textContent = result;
}

// Add event listeners to buttons
document
  .getElementById("rock")
  .addEventListener("click", () => handleChoice("rock"));
document
  .getElementById("paper")
  .addEventListener("click", () => handleChoice("paper"));
document
  .getElementById("scissors")
  .addEventListener("click", () => handleChoice("scissors"));
