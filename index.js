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