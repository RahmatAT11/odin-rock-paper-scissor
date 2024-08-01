
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
                    console.log("It's a draw");
                } else if (computerChoice === "paper") {
                    computerScore++;
                    console.log("You lose! Paper beats Rock");
                } else {
                    humanScore++;
                    console.log("You win! Rock beats Scissors")
                }
            } else if (humanChoice === "paper") {
                if (computerChoice === "paper") {
                    console.log("It's a draw");
                } else if (computerChoice === "scissors") {
                    computerScore++;
                    console.log("You lose! Scissors beats Paper");
                } else {
                    humanScore++;
                    console.log("You win! Paper beats Rock")
                }
            } else {
                if (computerChoice === "scissors") {
                    console.log("It's a draw");
                } else if (computerChoice === "rock") {
                    computerScore++;
                    console.log("You lose! Rock beats Scissors");
                } else {
                    humanScore++;
                    console.log("You win! Scissors beats Paper")
                }
            }
        } catch (error) {
            console.log("Wrong input! please input paper/rock/scissors");
        }
    }

    let humanScore = 0;
    let computerScore = 0;

    let humanSelection, computerSelection;
    
    // for (let index = 0; index < 5; index++) {
    //     humanSelection = getHumanChoice();
    //     computerSelection = getComputerChoice();

    //     playRound(humanSelection, computerSelection);
    // }

    // console.log("Final Score:");
    // console.log("Human:", humanScore);
    // console.log("Computer:", computerScore);
}
