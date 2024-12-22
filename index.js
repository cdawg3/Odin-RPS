// Rock, Paper, Scissors Game

// Global score variables
let humanScore = 0;
let computerScore = 0;

// Function to get the computer's choice
function getComputerChoice() {
  const randomNum = Math.random();
  if (randomNum < 0.33) {
    return "rock";
  } else if (randomNum < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Function to get the human player's choice
function getHumanChoice() {
  const choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
  if (choice === "rock" || choice === "paper" || choice === "scissors") {
    return choice;
  } else {
    alert("Invalid choice! Please try again.");
    return getHumanChoice();
  }
}

// Function to play a single round
function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    console.log(`It's a tie! Both chose ${humanChoice}.`);
    return;
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You win this round! ${humanChoice} beats ${computerChoice}.`);
    humanScore++;
  } else {
    console.log(`You lose this round! ${computerChoice} beats ${humanChoice}.`);
    computerScore++;
  }
}

// Function to play the full game
function playGame() {
  humanScore = 0;
  computerScore = 0;

  console.log("Welcome to Rock, Paper, Scissors!");

  for (let round = 1; round <= 5; round++) {
    console.log(`\nRound ${round}`);
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log(`Scores -> Human: ${humanScore}, Computer: ${computerScore}`);
  }

  console.log("\nGame Over!");
  if (humanScore > computerScore) {
    console.log("Congratulations! You won the game!");
  } else if (humanScore < computerScore) {
    console.log("Sorry! The computer won the game.");
  } else {
    console.log("It's a tie game!");
  }
}

// Start the game
playGame();
