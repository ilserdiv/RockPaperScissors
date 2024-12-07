function playerChoice() {
    let x = prompt("Choose between rock, paper, and scissors: ");
    x = x.toUpperCase();

    if (x == "ROCK" || x == "PAPER" || x == "SCISSORS") {
        document.getElementById("player_choice").innerHTML = x;
    }
    else if (x == "SCISSOR") {
        document.getElementById("player_choice").innerHTML = "SCISSORS";
    }
    else {
        alert("Invalid Choice. Please try again");
        return playerChoice();
    }
}

function computerChoice() {
    let choice = Math.random();

    if (choice < 0.33) {
        document.getElementById("computer_choice").innerHTML = "ROCK";
    }
    else if (choice < 0.66) {
        document.getElementById("computer_choice").innerHTML = "PAPER";
    }
    else {
        document.getElementById("computer_choice").innerHTML = "SCISSORS";
    }
}

playerChoice();
computerChoice();