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
let round;
let userWon;
let computerWon;

function showBtn(e) {
    //reset stats each game
    round = 0;
    userWon = 0;
    computerWon = 0;
    //reset result msg each game
    content.textContent = ''
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
            content.textContent = "It's a tie!\n";
            console.log("Tie");
        } else if (userSelection === 'paper') {
            content.textContent = "Congrats, you won this round!\n";
            console.log("User won");
            userWon += 1;
        } else {
            content.textContent = "Oops, you lost this round!\n";
            console.log("Computer won");
            computerWon += 1;
        };

    } else if (computerSelection === 'paper') {
        if (userSelection === 'rock') {
            content.textContent = "Oops, you lost this round!\n";
            console.log("Computer won");
            computerWon += 1;
        } else if (userSelection === 'paper') {
            content.textContent = "It's a tie!\n";
            console.log("Tie")
        } else {
            content.textContent = "Congrats, you won this round!\n";
            console.log("User won");
            userWon += 1;
        };

    } else {
        if (userSelection === 'rock') {
            content.textContent = "Congrats, you won this round!\n";
            console.log("User won");
            userWon += 1;
        } else if (userSelection === 'paper') {
            content.textContent = "Oops, you lost this round!\n";
            console.log("Computer won");
            computerWon += 1;
        } else {
            content.textContent = "It's a tie!\n";
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
    content.textContent += 
    `Round: ${round}
    User: ${userWon}
    Computer: ${computerWon} \n`

    //display winner after someone won 5 rounds
    if (round >= 5) {
        if (userWon === 5) {
            content.textContent += 'User won 5 rounds first!';
            //display startgame button
            document.querySelector('.start').style.display='block'
            //hide three options
            buttons.forEach((button) => button.style.display = 'none');
        } else if (computerWon === 5) {
            content.textContent += 'Computer won 5 rounds first!';
            //display startgame button
            document.querySelector('.start').style.display='block'
            //hide three options
            buttons.forEach((button) => button.style.display = 'none');
        } else return;
    } else return;
};