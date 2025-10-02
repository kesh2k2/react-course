let secretNumber;
let attempts;

function startGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById("message").textContent = "";
  document.getElementById("attempts").textContent = "Attempts: 0";
  document.getElementById("guessInput").value = "";
}

function checkGuess() {
  const guess = Number(document.getElementById("guessInput").value);
  const message = document.getElementById("message");
  const attemptsDisplay = document.getElementById("attempts");

  if (!guess) {
    message.textContent = "Please enter a number!";
    message.style.color = "red";
    return;
  }

  attempts++;
  attemptsDisplay.textContent = "Attempts: " + attempts;

  if (guess === secretNumber) {
    message.textContent = "🎉 Correct! You guessed it!";
    message.style.color = "green";
  } else if (guess < secretNumber) {
    message.textContent = "Too low! Try again.";
    message.style.color = "orange";
  } else {
    message.textContent = "Too high! Try again.";
    message.style.color = "orange";
  }
}

// Attach event listeners
document.getElementById("submitBtn").addEventListener("click", checkGuess);
document.getElementById("resetBtn").addEventListener("click", startGame);

// Start the first game
startGame();
