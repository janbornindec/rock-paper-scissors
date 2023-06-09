//make three choices
const choices = ['rock','paper','scissors'];

//computer to choose randomly and return as computerSelection
function getComputerChoice() {
    computerSelection = choices[Math.floor(Math.random() * 3)];
    return computerSelection;
};

//add computer card to DOM
const computerHands = document.querySelector('.computer-hands');
const compCardText = document.createElement('div');
computerHands.appendChild(compCardText);
const compCard = document.createElement('img');
computerHands.appendChild(compCard);

//shuffle computer card
const compRock = document.createElement('img')

//display computer card choice img of current round
function displayCompCard() {
    if (computerSelection === 'rock') {
        compCard.src = "images/rock-min1.png";;
    } else if (computerSelection === 'paper') {
        compCard.src = "images/paper-min1.png";
    } else {
        compCard.src = "images/scissors-min1.png";
    };
};

const buttons = document.querySelectorAll('.btn');
//make each game option invisible unless game has started
buttons.forEach((button) => button.style.display = 'none');

//make game options visible once StartGame btn is clicked
document.querySelector('.start').addEventListener('click', showBtn); 

//add text content div to html
const container = document.querySelector('#result');
const message = document.createElement('div');  
const scores = document.createElement('div');  
scores.setAttribute('id','content');
message.setAttribute('id','content');
container.appendChild(scores);
container.appendChild(message);

//default stats
let round;
let userWon;
let computerWon;
//show only computer card choice of the current round
compCard.src = '';

function showBtn(e) {
    //reset stats each game
    round = 0;
    userWon = 0;
    computerWon = 0;
    //reset result msg each game
    container.style.display = 'none';
    message.textContent = '';
    scores.textContent = '';
    buttons.forEach((button) => button.style.display = 'block');
    e.preventDefault();
    document.querySelector('.start').style.display='none'; //make startgame btn disappear
};

//once player click any of the three buttons, return the button id
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        userSelection = button.id;
        playRound(userSelection);
    });
});

//compare both choices, announce the winner
function chooseWinner() {
    if (computerSelection === 'rock') {

        if (userSelection === 'rock') {
            message.textContent = "It's a tie!\n";
            console.log("Tie");
        } else if (userSelection === 'paper') {
            message.textContent = "Congrats, you won this round!\n";
            console.log("User won");
            userWon += 1;
        } else {
            message.textContent = "Oops, you lost this round!\n";
            console.log("Computer won");
            computerWon += 1;
        };

    } else if (computerSelection === 'paper') {
        if (userSelection === 'rock') {
            message.textContent = "Oops, you lost this round!\n";
            console.log("Computer won");
            computerWon += 1;
        } else if (userSelection === 'paper') {
            message.textContent = "It's a tie!\n";
            console.log("Tie")
        } else {
            message.textContent = "Congrats, you won this round!\n";
            console.log("User won");
            userWon += 1;
        };

    } else {
        if (userSelection === 'rock') {
            message.textContent = "Congrats, you won this round!\n";
            console.log("User won");
            userWon += 1;
        } else if (userSelection === 'paper') {
            message.textContent = "Oops, you lost this round!\n";
            console.log("Computer won");
            computerWon += 1;
        } else {
            message.textContent = "It's a tie!\n";
            console.log("Tie");
        };
    };
};

function playRound() {
    round += 1;
    //print round number
    msg = console.log("Round " + round + ":");
    computerHands.style.display = 'block';
    compCardText.textContent = "Computer's card:";
    //get random choice from computer
    getComputerChoice();
    //display computer card choice
    displayCompCard()
    console.log("Computer chooses: " + computerSelection);
    console.log("User chooses: " + userSelection);
    chooseWinner();

    //display running score in div
    container.style.display = 'block';
    scores.textContent = 
    `Round ${round}:
    User: ${userWon}
    Computer: ${computerWon} \n`;

    //display winner after someone won 5 rounds
    if (round >= 5) {
        if (userWon === 5) {
            alert('Congrats! You defeated the computer!')
            message.textContent = "You defeated the computer! You're pretty smart I guess?";
            //display startgame button
            document.querySelector('.start').style.display='block'
            //hide three options
            buttons.forEach((button) => button.style.display = 'none');
            computerHands.style.display = 'none';
        } else if (computerWon === 5) {
            alert('Yikes! You lost to a computer!')
            message.textContent = "You lost, no surprise there! Computer rules!";
            //display startgame button
            document.querySelector('.start').style.display='block'
            //hide three options
            buttons.forEach((button) => button.style.display = 'none');
            computerHands.style.display = 'none';
        } else return;
    } else return;
};