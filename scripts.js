//Declare Variables
let playerChoice = '';
let computerChoice = '';
let choices = ['paper', 'scissors', 'rock',]

//Function to randomly generate a choice
function generateSingleChoice(){
    thisChoice = Math.floor(Math.random() * 3) + 1;
    return choices[thisChoice - 1];
}

// // Function to play a single round of Rock Paper Scissors
function playRound(pc, cc){
    pc = prompt('Paper, Scissors, Rock?').toUpperCase();
    cc = generateSingleChoice().toUpperCase();
    let result = '';

    if( pc === 'ROCK' && cc === 'SCISSORS'
     || pc === 'PAPER' && cc === 'ROCK'
     || pc === 'SCISSORS' && cc ==='PAPER'){
        score = 'w';
        result = `      You Win!: ${pc} beats ${cc}`;
        console.log(result);
    } else if (pc === cc){
        score = 't';
        result = `      Its a Tie!: ${pc} equals ${cc}`;
        console.log(result);
    } else {
        score = 'l';
        result = `      You Lose!: ${pc} succumbs to ${cc}`;
        console.log(result);
    }
    return score
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let ties = 0;

    for(let i = 0; i < 5; i++) { 
        console.log(`
                    Game: ${i + 1}`);
        console.log(`   Player Score: ${playerScore} Computer Score ${computerScore} Ties: ${ties}`);
        currentPlay = playRound(playerChoice, computerChoice);
        if( currentPlay === 'w'){
            playerScore++;
        } else if (currentPlay === 'l') {
            computerScore++;
        } else{
            ties++;
        }
    }

    if(playerScore > computerScore){
        console.log(`   \nPlayer Wins! ~ { Player Score: ${playerScore} ~ Computer Score: ${computerScore} ~ Ties: ${ties} }`);
    } else if (computerScore > playerScore){
        console.log(`   \nComputer Wins! ~ { Player Score: ${playerScore} ~ Computer Score: ${computerScore} ~ Ties: ${ties} }`);
    } else {    
        console.log(`   \nIt's a Draw! ~ { Player Score: ${playerScore} ~ Computer Score: ${computerScore} ~ Ties: ${ties} }`);
    }
}

//Run Game
game();
