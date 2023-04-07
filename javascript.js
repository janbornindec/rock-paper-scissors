//make three choices into an object's own enumerable string-keyed property key-value pairs
const choices = {0: 'rock', 1: 'paper', 2: 'scissors'};

//computer to choose randomly and return as computerSelection
function getComputerChoice() {
    computerSelection = Math.floor(Math.random() * 3);
    return computerSelection;
};

//user to input their choice
function getUserChoice() {
    userSelection = prompt("Choose Rock, Paper or Scissors: ").toLowerCase();

    if (userSelection === 'rock' || userSelection === 'paper' || userSelection === 'scissors') {
        return userSelection;
    } else {
        alert("Invalid answer. Please check your spelling again. Choose Rock, Paper or Scissors.");
        getUserChoice();
    };
};

//compare both choices, announce the winner
let userWon = 0;
let computerWon = 0;
function chooseWinner() {
    if (computerSelection === 'rock') {

        if (userSelection === 'rock') {
            alert("It's a tie!");
            console.log("Tie");
        } else if (userSelection === 'paper') {
            alert("Congrats, you won this round!");
            console.log("User won");
            userWon += 1;
        } else {
            alert("Oops, you lost this round!");
            console.log("Computer won");
            computerWon += 1;
        };

    } else if (computerSelection === 'paper') {
        if (userSelection === 'rock') {
            alert("Oops, you lost this round!");
            console.log("Computer won");
            computerWon += 1;
        } else if (userSelection === 'paper') {
            alert("It's a tie!");
            console.log("Tie");
        } else {
            alert("Congrats, you won this round!");
            console.log("User won");
            userWon += 1;
        };

    } else {
        if (userSelection === 'rock') {
            alert("Congrats, you won this round!");
            console.log("User won");
            userWon += 1;
        } else if (userSelection === 'paper') {
            alert("Oops, you lost this round!");
            console.log("Computer won");
            computerWon += 1;
        } else {
            alert("It's a tie!");
            console.log("Tie");
        };
    };
};

//game if not started when the button is not clicked
let gameOn = false;

//link button to game() function 
const startGame = document.querySelector('.startGame');
startGame.addEventListener('click', game);

//function to switch on the game
function game() {
    answer = prompt('Are you ready to play? Y or N: ');
    if (answer === null) {
        alert("You've cancelled the game. Refresh the page to start again.");
    } else if (answer[0].toUpperCase() === 'Y') {
        gameOn = true;
        //reset the stats each game
        let playRound = 0;
        userWon = 0;
        computerWon = 0;
        while (gameOn) {
            playRound += 1;
            //print round number
            msg = console.log("Round " + playRound + ":");
            getComputerChoice();
            getUserChoice();
            chooseWinner();
            //make the game stops after one user/computer won 5 rounds
            if (userWon === 5) {
                alert("Congrats! You won 5 rounds first!");
                console.log("GAME OVER. User won the game");
                //display results
                console.log("User: " + userWon + " Computer: " + computerWon);
                break;
            } else if (computerWon === 5) {
                alert("Uh oh! Computer won 5 rounds first!");
                console.log("GAME OVER. Computer won the game");
                //display results
                console.log("User: " + userWon + " Computer: " + computerWon);
                break;
            } else {
                continue;
            };
        };
    } else if (answer[0].toUpperCase() === 'N') {
        alert("You've exited the game. Refresh the page to start again.");
    } else {
        alert('Invalid answer. Please enter Y or N.');
    };
};

//V1 - without button.
//while (game) {

//    startGame = prompt('Are you ready to play? Y or N: ') ;

    //if user quit by other methods than entering N
//    if (startGame === null) {
//        alert("You've cancelled the game. Refresh the page to start again.")
//        game = false;
    
//    } else if (startGame[0].toUpperCase() === 'Y') {
        //adding round each game
//        playRound += 1;
        //print round number
//        msg = console.log("Round " + playRound + ":");
//        getComputerChoice();
//        computerSelection = choices[getComputerChoice()];
//        getUserChoice();
//        chooseWinner();
        //make the game stops after one user/computer won 5 rounds
//        if (userWon === 5) {
//            alert("Congrats! You won 5 rounds first!");
//            console.log("GAME OVER. User won the game");
            //display results
//            console.log("User: " + userWon + " Computer: " + computerWon);
//            break;
//        } else if (computerWon === 5) {
//            alert("Uh oh! Computer won 5 rounds first!");
//            console.log("GAME OVER. Computer won the game");
            //display results
//            console.log("User: " + userWon + " Computer: " + computerWon);
//            break;
//        } else {
//            continue;
//        };

//    } else if (startGame[0].toUpperCase() === 'N') {
//        alert("You've exited the game. Refresh the page to start again.")
//        game = false;
        
//    } else {
//        alert('Invalid answer. Please enter Y or N.');
//        continue;
//    };
//};