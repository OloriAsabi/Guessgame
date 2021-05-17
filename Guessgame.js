/*const submitBtn = document.querySelector(".guessSubmit");
const textField = document.querySelector('.guessField');
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

 let randomNum = Math.floor(Math.random() * 100) + 1;
 let guessCount = 1;
 let resetButton;

 //gueesCount max = 10

 submitBtn.onclick = function checkGuess(){
     let userGuess = Number(textField.value);
     if(guessCount === 1){
         guesses.textContent = 'Previous guessess: ';
     }
     guesses.textContent += userGuess +  " " ;

     if (userGuess === randomNum){
         lastResult.textContent = 'Congratulations! You got it right';
         lastResult.style.color = 'white';
         lowOrHi.textContent = " ";
         setGameOver();
     } else if(guessCount === 10){
         lastResult.textContent = "GameOver!!!";
         setGameOver();
     } else{
         lastResult.textContent = 'Wrong!';
         lastResult.style.color = 'red';
     
        if(userGuess < randomNum){
            lowOrHi.textContent = 'Last guess was too low!';
        } else if(userGuess > randomNum){
            lowOrHi.textContent = 'Last guess was too high';
        }
        }
guessCount++;
textField.value = ' ';
  textField.focus();   
 }

 function setGameOver(){
     textField.disabled = true;
     submitBtn.disabled = true;
     resetButton = document.createElement('button');
     resetButton.textContent = 'Start New Game';
     resetButton.style.fontSize = '15px';
     resetButton.style.backgroundColor = 'grey';
     resetButton.style.color = 'black';
     resetButton.style.padding = '5px';
     resetButton.style.borderRadius = '5px';
     document.body.append(resetButton);
     resetButton.addEventListener('click', resetGame);

 };


 function resetGame(){
     guessCount = 1;
     const resetParas = document.querySelectorAll('results');
     for (let i = 0; i < resetParas.length; i++){
         resetParas[i].textContent = ' ';
     }
     resetButton.parentNode.removeChild(resetButton);
     textField.disabled = false;
     submitBtn.disabled = false;
     textField.value = ' ';
     textField.focus();

     randomNum =    Math.floor(Math.random() * 100) + 1;
    
 }*/

const textField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');


let randomNum = Math.floor(Math.random() * 100) + 1;
let guessCount = 1;
let resetButton;

guessSubmit.onclick = function(){
    let userGuess = Number(textField.value);
    if(guessCount === 1){
        guesses.textContent = 'Previous Guesses ';
        guesses.style.color = 'Red';
        
    }guesses.textContent += userGuess + ' ';
    if (userGuess === randomNum){
        lastResult.textContent = "Congratulations you are right!!!";
        lastResult.style.color = 'white';
        setGameOver();
    }else if(guessCount === 10){
        lastResult.textContent = "GameOver";
        lastResult.style.color = 'Red';
        setGameOver();
    }else {
        lastResult.textContent = 'Wrong';
        lastResult.style.color = 'Red';
    }
    if(userGuess < randomNum){
        lowOrHi.textContent = 'Last guess was too low';
        lowOrHi.style.color = 'Red';
    }else if(userGuess > randomNum){
        lowOrHi.textContent = 'Last guess was too high';
        lowOrHi.style.color = "Green";
    }

    guessCount++;
    textField.value = ' '
    textField.focus();
};

function setGameOver(){
    textField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = "Start New Game";
    resetButton.style.fontSize = '15px';
     resetButton.style.backgroundColor = 'grey';
     resetButton.style.color = 'black';
     resetButton.style.padding = '5px';
     resetButton.style.borderRadius = '5px';
     resetButton.style.cursor = "pointer";
     document.body.querySelector('.results').append(resetButton);
     resetButton.addEventListener('click', resetGame);

}

function resetGame(){
    guessCount = 1;
    const reset = document.querySelectorAll('.result');
    for (let i = 0; i < reset.length; i++) {
        reset[i].textContent = ' ';
    }
    resetButton.parentNode.removeChild(resetButton);
    textField.disabled = false;
    guessSubmit.disabled = false;
    textField.value = ' '
    textField.focus();
    randomNum = Math.floor(Math.random() * 100) + 1;
}