//Declare Variables
let playerChoice = '';
let computerChoice = '';
let choices = ['paper', 'scissors', 'rock',];
const selectionButtons = document.querySelectorAll('[data-selection]');
const yourScoreSpan = document.querySelector('[data-your-score');
const computerScoreSpan = document.querySelector('[data-computer-score]');
const tieScoreSpan = document.querySelector('[data-tie-score');
const final = document.querySelector('[data-final-score]');
const roundResult = document.querySelector('[data-round-result]');
let gameOn = true;

//Function to randomly generate a choice
function generateSingleChoice(){
    thisChoice = Math.floor(Math.random() * 3) + 1;
    return choices[thisChoice - 1];
}

//Add event listeners to game buttons, Play a "round" when clicked
selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection.toUpperCase();
        playRound(selectionName)
    });
});

//Function to play a single round of Rock Paper Scissors
function playRound(pc, cc){
    cc = generateSingleChoice().toUpperCase();
    let result = '';
    
    while(gameOn){
        if(pc === 'ROCK' && cc === 'SCISSORS'
        || pc === 'PAPER' && cc === 'ROCK'
        || pc === 'SCISSORS' && cc ==='PAPER'){
            if(parseInt(yourScoreSpan.innerText) < 5 && parseInt(computerScoreSpan.innerText) != 5){
                incrementScore(yourScoreSpan);
                score = 'w';
                result = `      You Win!: ${pc} beats ${cc}`;
                roundResult.innerText = result;
                console.log(result);
            } if (parseInt(yourScoreSpan.innerText) === 5){
                final.innerText ='Player Wins!';
                gameOn = false;
            }
        } else if (pc === cc){
            incrementScore(tieScoreSpan);
            score = 't';
            result = `      Its a Tie!: ${pc} equals ${cc}`;
            roundResult.innerText = result;
            console.log(result);
        } else {
            if(parseInt(computerScoreSpan.innerText) < 5 && parseInt(yourScoreSpan.innerText) != 5){
                incrementScore(computerScoreSpan);
                score = 'l';
                result = `      You Lose!: ${pc} succumbs to ${cc}`;
                roundResult.innerText = result;
                console.log(result);
            } if (parseInt(computerScoreSpan.innerText) === 5){
                final.innerText ='Computer Wins!';
                gameOn = false;
            } 
        }
        return score
    }
}

function incrementScore(scoreSpan){
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
}