//codes to handle guesses

let randNum = Math.round(Math.random() * 99) + 1;
const guess = document.querySelector("#numGuessed");
//let guessed = Number(guess);
console.log(randNum);
//console.log(guessed)
let attempt = 0;
const totalAttempt = 10;
let game = true;
//document.getElementById("messagep5").addEventListener("click", startNewGame)

//Event handling when the button is clicked in game mode
if(game == true){
    document.getElementById("btn").addEventListener("click", function(){
        //accepting guess from user
        const guessed = parseInt(guess.value);
        //console.log(guessed);
        checkGuess(guessed);
    }); 
}

//Guess validation process
function checkGuess(g){
  
  if(isNaN(g)){
     alert("Please enter a number between 1 and 100!");
     guess.value = "";
  } else if (g < 1){
    alert("Please enter a number greater than or equal to 1 but less than 101!");
    guess.value = "";
  } else if (g > 100){
      alert("Please enter a number less than or equal to 100 but greater than 0!")
      guess.value = "";
  } else{
    //increment the number of attempts
    attempt +=1;
    //Update the number of guesses and the remaining guesses
    document.getElementById("prevGuesses").innerHTML = attempt;
    document.getElementById("remGuesses").innerHTML = totalAttempt-attempt;
    
      //checking if all attempts have been used, if yes game over,
      //if not game continues
      if(attempt == 10){
        document.getElementById("messagep5").innerHTML = `Game over, 
        the number was ${randNum}. Click here to start a new game`; 
        gameOver();

        //Event handling to restart game when bottom message is clicked
        document.getElementById("messagep5").addEventListener("click", startNewGame);
      } else{
           compareGuess(g) ;  
      }
  }
}

//Comparing guessed number with the randomly generated number
//Appropriate message is displayed at the bottom to confirm whether
//the guess was correct or incorrect
function compareGuess(chkedGuess){
    if(chkedGuess < randNum){
        document.getElementById("messagep5").innerHTML = `Too low! Try again!`;
        guess.value="";
    }
    else if(chkedGuess > randNum){
        document.getElementById("messagep5").innerHTML = `Too high! Try again!`; 
        guess.value="";
    }
    else{
        document.getElementById("messagep5").innerHTML = `${guess.value} is correct. 
        Click here to start a new game. `;
        guess.value="";
        gameOver();
        document.getElementById("messagep5").addEventListener("click", startNewGame);
        
        //startNewGame();
    }
}

//function to disable the text box when game is over and 
//deactivate the game mode
function gameOver(){
       guess.value="";
       document.getElementById("numGuessed").disabled = true;
       game = false;
       //startNewGame();
}

//Function to start a new game at the end.
//All variables are reset
function startNewGame(){
   if ((attempt == 10) || (game == false)){
     document.getElementById("numGuessed").disabled = false;
     document.getElementById("messagep5").innerText = `New game, no guess submitted`;
     /*document.getElementById("messagep5").addEventListener("click", e=>{
        e.preventDefault();
    })*/
    
     randNum = Math.round(Math.random() * 99) + 1;
     const guess = document.querySelector("#numGuessed");
     //let guessed = Number(guess);
     console.log(randNum);
     //console.log(guessed)
     attempt = 0;
     document.getElementById("prevGuesses").innerHTML = attempt;
     const totalAttempt = 10;
     document.getElementById("remGuesses").innerHTML = totalAttempt;
     game = true;
   }
}






