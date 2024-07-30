console.log("Hello, World!");

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

let humanScore = 0;
let computerScore = 0;