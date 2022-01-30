let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => Math.floor(Math.random() * 10);

const getAbsoluteDistance = (num1, num2) => Math.abs(num1 - num2);

const compareGuesses = (userGuess, computerGuess, targetNumber) => {
  if (userGuess < 0 || userGuess > 9 || computerGuess < 0 || computerGuess > 9) {
    alert("You didn't pick a number between 0 and 9");
    return false;
  }
  const userGuessHowOff = getAbsoluteDistance(userGuess, targetNumber);
  const computerGuessHowOff = getAbsoluteDistance(computerGuess, targetNumber);
  if (userGuessHowOff <= computerGuessHowOff) 
    return true
  else 
    return false
};

const updateScore = (winner) => {
  if (winner = 'human') 
    humanScore++;
  if (winner = 'computer')
    computerScore++;
};

const advanceRound = () => currentRoundNumber++;
