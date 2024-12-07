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

playerChoice();