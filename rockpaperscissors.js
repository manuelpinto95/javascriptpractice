const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  switch(userInput) {
    case 'rock':
      return userInput;
      break;
   case 'paper':
      return userInput;
      break;
   case 'scissors':
      return userInput;
      break;
   case 'bomb':
      return userInput;
      break;
    default:
      console.log('wrong selection bro');
      break;
  }
}

const getComputerChoice = () => {
  random = (Math.floor(Math.random() * 3));
  switch(random) {
   case (random = 0):
      return 'rock';
      break;
   case (random = 1):
      return 'paper';
      break;
   case (random = 2):
      return 'scissors';
      break;
    default:
      console.log('wrong selection bro');
      break;
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'tie';
  }
  switch(userChoice) {
    case 'paper':
      if (computerChoice === 'scissors') 
        return 'Computer Won';
      else if (computerChoice === 'rock') 
        return 'User Won';
   case 'rock':
      if (computerChoice === 'paper') 
        return 'Computer Won';
      else if (computerChoice === 'scissors') 
        return 'User Won';
   case 'scissors':
      if (computerChoice === 'rock') 
        return 'Computer Won';
      else if (computerChoice === 'paper') 
        return 'User Won';
   case 'bomb':
      return 'Foda-se ganhaste :('
  }
}

const playGame = (userChoice) => {
  const user = getUserChoice(userChoice);
  const computer = getComputerChoice();
  console.log('User played ' + user);
  console.log('Computer played ' + computer);
  console.log(determineWinner(user, computer));
}

playGame ('rock');
