
// this function will generate rock/paper/scissors values
function getComputerChoice() {
    //generate a random number from 1 to 3
    let choiceNumber = Math.ceil(Math.random() * 3);
    // if the number is one, return rock
    // if the number is two, return paper
    // if the number is three, return scissors
    if (choiceNumber === 1) {
        return "rock";
    } else if (choiceNumber === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

// this function will get an input of rock, paper, scissors
function getHumanChoice() {
    // get input from user with prompt and
    // make the input lower case
    let userInput = prompt("Enter your choice (rock/paper/scissors):").toLowerCase();
    // if the input doesn't match any rock paper scissors
    // choice, then tell the user
    // if matches, then return the value
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        return userInput;
    }
    
    throw new Error("Wrong choice, please input the right choice!");
}


// This will run the game for 5 rounds
function playGame() {
    // this function will play the game by comparing the user choice
    // and the computer choice
    function playRound(humanChoice, computerChoice) {
        try {
            if (humanChoice === "rock") {
                if (computerChoice === "rock") {
                    displayResult.textContent = "It's a draw";
                } else if (computerChoice === "paper") {
                    computerScore++;
                    displayResult.textContent = "You lose! Paper beats Rock";
                } else {
                    humanScore++;
                    displayResult.textContent = "You win! Rock beats Scissors";
                }
            } else if (humanChoice === "paper") {
                if (computerChoice === "paper") {
                    displayResult.textContent = "It's a draw";
                } else if (computerChoice === "scissors") {
                    computerScore++;
                    displayResult.textContent = "You lose! Scissors beats Paper";
                } else {
                    humanScore++;
                    displayResult.textContent = "You win! Paper beats Rock";
                }
            } else {
                if (computerChoice === "scissors") {
                    displayResult.textContent = "It's a draw";
                } else if (computerChoice === "rock") {
                    computerScore++;
                    displayResult.textContent = "You lose! Rock beats Scissors";
                } else {
                    humanScore++;
                    displayResult.textContent = "You win! Scissors beats Paper";
                }
            }
            
            displayPlayerScore.textContent = humanScore;
            displayComputerScore.textContent = computerScore;
        } catch (error) {
            displayResult.textContent = error.message;
        }
    }
    
    const displayResult = document.querySelector("#display-result");
    const displayPlayerScore = document.querySelector("#player");
    const displayComputerScore = document.querySelector("#computer");
    const displayWinnerResult = document.querySelector("#winner-result");

    let humanScore = 0;
    let computerScore = 0;

    displayPlayerScore.textContent = humanScore;
    displayComputerScore.textContent = computerScore;
    
    let humanSelection, computerSelection;
    
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            humanSelection = e.target.id;
            computerSelection = getComputerChoice();

            playRound(humanSelection, computerSelection);

            if (humanScore === 5) {
                displayWinnerResult.textContent = "Player Win!";
            } else if (computerScore === 5) {
                displayWinnerResult.textContent = "Computer Win!";
            }
        })
    })
    
}

playGame();
