let userInput = "paper";
let computerInput = "";
let choice = "";
userInput = userInput.toLowerCase();

const getUserChoice = (userInput) => {
  if (userInput === "rock") {
    return userInput;
  } else if (userInput === "paper") {
    return userInput;
  } else if (userInput === "scissors") {
    return userInput;
  } else if (userInput === "bomb") {
    return userInput;
  } else {
    console.log("invalid choice");
    return null;
  }
};

const userChoice = getUserChoice(userInput);

const getComputerChoice = () => {
  const choice = Math.floor(Math.random() * 3);

  if (choice === 0) {
    return "rock";
  } else if (choice === 1) {
    return "paper";
  } else if (choice === 2) {
    return "scissors";
  } else {
    console.log("invalid input");
    return null;
  }
};

const pcChoice = getComputerChoice();

const determineWinner = (userChoice, pcChoice) => {
  if (userChoice === pcChoice) {
    return "The game is a draw!";
  }

  if (userChoice === "rock") {
    if (pcChoice === "paper") {
      return "The Computer has won!";
    } else if (pcChoice === "scissors") {
      return "The User has won!";
    }
  } else if (userChoice === "paper") {
    if (pcChoice === "rock") {
      return "The user has won!";
    } else if (pcChoice === "scissors") {
      return "The PC has won!";
    }
  } else if (userChoice === "scissors") {
    if (pcChoice === "rock") {
      return "The PC has won!";
    } else if (pcChoice === "paper") {
      return "The user has won!";
    }
  } else if (userChoice === "bomb") {
    if (pcChoice === "rock") {
      return "The user has won!";
    } else if (pcChoice === "paper") {
      return "The user has won!";
    } else if (pcChoice === "scissors") {
      return "The user has won!";
    }
  }
};

const playGame = () => {
  getUserChoice(userInput);
  getComputerChoice();

  console.log(
    `The user has chosen ${userChoice} and the PC has chosen ${pcChoice}`
  );

  console.log(determineWinner(userChoice, pcChoice));
};

playGame();
