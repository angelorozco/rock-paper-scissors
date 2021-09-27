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
                return `You Lose! ${computerSelection} beats ${playerSelection}!`;
            } else if (playerSelection == "rock" && computerSelection == "scissors") {
                return `You Win! ${playerSelection} beats ${computerSelection}!`;
            } else if (playerSelection == "paper" && computerSelection == "scissors") {
                return `You Lose! ${computerSelection} beats ${playerSelection}!`;
            } else if (playerSelection == "paper" && computerSelection == "rock") {
                return `You Win! ${playerSelection} beats ${computerSelection}!`;
            } else if (playerSelection == "scissors" && computerSelection == "rock") {
                return `You Lose! ${computerSelection} beats ${playerSelection}!`;
            } else if (playerSelection == "scissors" && computerSelection == "paper") {
                return `You Win! ${playerSelection} beats ${computerSelection}!`;
        
        

    }
  }
  
  let playerSelection;
  let computerSelection;
  let roundResult;
  let finalResult;
  const scoreBoard = document.querySelector(".scoreBoard");
  let list;
  let playerScore = 0;
  let computerScore = 0;
  let playerInput = "";
  let containsOnlyDigits = /^[0-9]+$/



  let totalRounds = 0;

  do {
    totalRounds = prompt("How many rounds do you want to play? Make sure to type a number!","")
  } while (isNumber(totalRounds) == false || totalRounds == null || totalRounds == undefined || totalRounds === 0);



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

        
    }

 

    game();
