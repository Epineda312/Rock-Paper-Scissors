//Declare Variables
let playerChoice = '';
let computerChoice = '';
let choices = ['paper', 'scissors', 'rock',]

//Function to randomly generate a choice
function generateSingleChoice(){
    thisChoice = Math.floor(Math.random() * 3) + 1;
    return choices[thisChoice - 1].toLowerCase();
}

// // Function to play a single round of PSR
function playRound(pc, cc){
    pc = prompt('Paper, Scissors, Rock?').toUpperCase();
    cc = generateSingleChoice().toUpperCase();
    let result = '';

    if( pc === 'ROCK' && cc === 'SCISSORS'
     || pc === 'PAPER' && cc === 'ROCK'
     || pc === 'SCISSORS' && cc ==='PAPER'){
        score = 'w';
        result = `   You Win!: ${pc} beats ${cc}`;
        console.log(result);
        return score;
    } else if (pc === cc){
        score = 't';
        result = `   Its a tie!: ${pc} equals ${cc}`;
        console.log(result);
        return score;
    } else {
        score = 'l';
        result = `   You Lose!: ${pc} succumbs to ${cc}`;
        console.log(result);
        return score;
    }
    // console.log(result.slice(0,9));
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
        console.log(`   Player Wins! Player Score: ${playerScore} Computer Score: ${computerScore} Ties: ${ties}`);
    } else if (computerScore > playerScore){
        console.log(`   Computer Wins! Player Score: ${playerScore} Computer Score: ${computerScore} Ties: ${ties}`)
    } else {    
        console.log(`   It's a draw! Player Score: ${playerScore} Computer Score: ${computerScore} Ties: ${ties}`)
    }
}

// //Test Functions - Run Game
game();
