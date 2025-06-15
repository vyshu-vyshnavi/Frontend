const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const resultElement = document.getElementById('result');

let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

submitButton.addEventListener('click', () => {
  const guess = parseInt(guessInput.value);
  attempts++;

  if (isNaN(guess) || guess < 1 || guess > 100) {
    resultElement.textContent = 'Invalid guess! Please enter a number between 1 and 100.';
  } else if (guess < randomNumber) {
    resultElement.textContent = "Too low! You've made attempts so far.";
  } else if (guess > randomNumber) {
    resultElement.textContent = "Too high! You've made attempts so far.";
  } else {
    resultElement.textContent = "Congratulations! You've guessed the number in attempts.";
    submitButton.disabled = true;
  }
  guessInput.value = '';
})