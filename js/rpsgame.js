let playerSelection;
let computerSelection;
let roundResult;
let finalResult;
const scoreBoard = document.querySelector(".scoreBoard");
const roundsNumberHtml = document.querySelector(".roundsNumber");
const scoresHtml = document.querySelector(".scores");
const computerScoreHtml = document.querySelector(".computerScore");
const gameConclusionHtml = document.querySelector(".gameConclusion");
let gameResult;
let roundsToPrint;
let list;
let playerScore = 0;
let computerScore = 0;
let playerInput = "";
let containsOnlyDigits = /^[0-9]+$/
let totalRounds = 0;
let gameConclusion;






function isNumber(value) {
    var numberPattern = /^[0-9]+$/; 
    return numberPattern.test(value);
  }


function computerPlay(){

let newArray = ["Rock", "Paper", "Scissors"];
let max = newArray.length;
let randomPick = newArray[Math.floor(Math.random() * max)];

return randomPick.toLowerCase().toString();
}


function playRound(playerSelection, computerSelection) {
    
    playerSelection = playerSelection.toLowerCase().toString();

        

            if (playerSelection == computerSelection) {
                return "It's a tie!";
            } else if (playerSelection == "rock" && computerSelection == "paper") {
                computerScore += 1;
                return `You Lose! ${computerSelection} beats ${playerSelection}!`;
            } else if (playerSelection == "rock" && computerSelection == "scissors") {
                playerScore += 1;
                return `You Win! ${playerSelection} beats ${computerSelection}!`;
            } else if (playerSelection == "paper" && computerSelection == "scissors") {
                computerScore += 1;
                return `You Lose! ${computerSelection} beats ${playerSelection}!`;
            } else if (playerSelection == "paper" && computerSelection == "rock") {
                playerScore += 1;
                return `You Win! ${playerSelection} beats ${computerSelection}!`;
            } else if (playerSelection == "scissors" && computerSelection == "rock") {
                computerScore += 1;
                return `You Lose! ${computerSelection} beats ${playerSelection}!`;
            } else if (playerSelection == "scissors" && computerSelection == "paper") {
                playerScore += 1;
                return `You Win! ${playerSelection} beats ${computerSelection}!`;
        
        

    }
  }
  

  do {
    totalRounds = prompt("How many rounds do you want to play? Make sure to type a number!","")
  } while (isNumber(totalRounds) == false || totalRounds == null || totalRounds == undefined || totalRounds === 0);

proundsToPrint = document.createElement("h3");
roundsNumberHtml.appendChild(roundsToPrint);
roundsToPrint.textContent = `Rounds Played: ${totalRounds}`


    function game(){

        for(let i = 1;i <= totalRounds;i++) {
            
            do {
            playerMainInput = prompt(`ROUND ${i}: Type Rock, Paper or Scissors! Be sure to have a good spelling!\nYou'll get to see the results after ${totalRounds} rounds!`  ,"");
            
            } while (playerMainInput == null || playerMainInput == undefined)
            playerInput = playerMainInput.toLowerCase();


            if (playerInput != "rock" && playerInput != "paper" && playerInput != "scissors"
                    && playerInput != null && playerInput != undefined) {
            i--; continue; 
            }
            
            
            playerSelection = playerInput;
            computerSelection = computerPlay();
            let result = playRound(playerSelection,computerSelection);
            console.log(`Round ${i}: ${result}`);
            list = document.createElement("li");
            scoreBoard.appendChild(list);
            list.textContent = `Round ${i}: ${result}`;
            
            

        }

        gameResult = document.createElement("div");
        scoresHtml.appendChild(gameResult);
        gameResult.textContent = `Player Score: ${playerScore}`
        gameResult = document.createElement("div");
        scoresHtml.appendChild(gameResult);
        gameResult.textContent = `Computer Score: ${computerScore}`


            if (playerScore == computerScore) {
                gameConclusion = `It's a tie! Try more rounds!`
            } else if (playerScore > computerScore) {
                gameConclusion = `Player Wins!`
            } else {
                gameConclusion = `Computer Wins!`
            }
        
            gameResult = document.createElement("div");
            gameConclusionHtml.appendChild(gameResult);
            gameResult.textContent = gameConclusion;
        
    }

 

    game();
