const computerPlay = function(){
    let options = ["ROCK", "PAPER", "SCISSORS"];
    let choice = options[Math.floor(Math.random()*options.length)];
    return choice
}

function playRound(playerSelection, computerSelection) {
    let pS = playerSelection
    let cS = computerSelection
    updateChoice(pS,cS)
    if (pS == cS){
        return "IT'S A TIE!"
    } else if (pS == "ROCK" && cS == "SCISSORS"){
        updateScorePlayer()
        return "YOU WIN, ROCK > SCISSORES"
    } else if (pS == "ROCK" && cS == "PAPER"){
        updateScoreComputer()
        return "YOU LOSE, PAPER > ROCK"
    } else if (pS == "SCISSORS" && cS == "ROCK"){
        updateScoreComputer()
        return "YOU LOSE, ROCK > SCISSORES"
    } else if (pS == "SCISSORS" && cS == "PAPER"){
        updateScorePlayer()
        return "YOU WIN, SCISSORSS > PAPER"
    } else if (pS == "PAPER" && cS == "SCISSORS"){
        updateScoreComputer()
        return "YOU LOSE, SCISSORES > PAPER"
    } else if (pS == "PAPER" && cS == "ROCK"){
        updateScorePlayer()
        return "YOU WIN, PAPER > ROCK"
    }
  }

const updateChoice = function(pC,cC){
    updatePlayerChoice(pC)
    updateComputerChoice(cC)
}

const updateScorePlayer = function(){
    let playerScore = document.querySelector(".playerScore")
    playerScore.innerHTML = parseInt(playerScore.innerHTML) + 1
}

const updateScoreComputer = function(){
    let computerScore = document.querySelector(".computerScore")
    computerScore.innerHTML = parseInt(computerScore.innerHTML) + 1
}

const updatePlayerChoice = function(choice){
    let playerChoice = document.querySelector(".playerChoice")
    playerChoice.innerHTML = choice
}

const updateComputerChoice = function(choice){
    let computerChoice = document.querySelector(".computerChoice")
    computerChoice.innerHTML = choice
}


const roundPlay = function(pChoice){
    let cS = computerPlay();
    playRound(pChoice, cS);
};

let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", function(){
        roundPlay(button.getAttribute("class"));
    });
});