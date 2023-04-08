//make three choices
const choices = ['rock','paper','scissors'];

//computer to choose randomly and return as computerSelection
function getComputerChoice() {
    computerSelection = choices[Math.floor(Math.random() * 3)];
    return computerSelection;
};

const buttons = document.querySelectorAll('.btn');
//make each game option invisible unless game has started
buttons.forEach((button) => button.style.display = 'none');

//make game options visible once StartGame btn is clicked
document.querySelector('.start').addEventListener('click', showBtn); 

//default stats
let round = 0;
let userWon = 0;
let computerWon = 0;
let winner;

function showBtn(e) {
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
    if (computerSelection === '0') {

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

    } else if (computerSelection === '1') {
        if (userSelection === 'rock') {
            alert("Oops, you lost this round!");
            console.log("Computer won");
            computerWon += 1;
        } else if (userSelection === 'paper') {
            alert("It's a tie!");
            console.log("Tie")
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

//add text content div to html
const container = document.querySelector('#result');
const content = document.createElement('div');  
content.setAttribute('id','content');
container.appendChild(content);

function playRound() {
    round += 1;
    //print round number
    msg = console.log("Round " + round + ":");
    getComputerChoice();
    console.log("Computer chooses: " + computerSelection);
    console.log("User chooses: " + userSelection);
    chooseWinner();

    //display running score in div
    content.textContent = 
    `Round: ${round}
    User: ${userWon}
    Computer: ${computerWon}`

    //display winner after someone won 5 rounds
    if (round >= 5) {
        if (userWon === 5) {
            content.textContent += 'User won 5 rounds first!';
        } else if (computerWon === 5) {
            content.textContent += '\nComputer won 5 rounds first!';
        } else return;
    } else return;
};