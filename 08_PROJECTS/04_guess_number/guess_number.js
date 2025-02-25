let randNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt')
const input = document.querySelector('#guessField')
const guesses = document.querySelector('.guesses')
const chancesleft = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const againStart = document.querySelector('.resultParas')

// let p = document.createElement('p');

let prevGuess = [];
let numOfGuess = 1;

let userCanPlayGame = true;
if(userCanPlayGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(input.value);
        validateTheGuess(guess);
    });
}

function validateTheGuess(guessNum){
    if(isNaN(guessNum)){
        alert(`Please enter a valid number!`);
    }else if(guessNum < 1){
        alert(`Number is less than 1!`);
    }else if(guessNum > 100){
        alert(`Number is greater than 100!`);   
    }else{
        prevGuess.push(guessNum);
        if(numOfGuess >= 10){
            displayTheGuessNum(guessNum);
            displayTheMessage(`Game Over! The number was ${randNumber}`);
            endGame();
        }else{
            displayTheGuessNum(guessNum);
            checkTheGuess(guessNum);
        }
    }
}

function checkTheGuess(checkTheGuessNum){
    if(checkTheGuessNum === randNumber){
        displayTheMessage(`You guessed the correct number!`);
        endGame();
    }else if(checkTheGuessNum > randNumber){
        displayTheMessage(`Number is TOO High!!`);
    }else if(checkTheGuessNum < randNumber){
        displayTheMessage(`Number is TOO Low!!`);
    }
}

function displayTheGuessNum(displayTheNum){
    input.value = '';
    guesses.innerHTML += `${displayTheNum}, `;
    numOfGuess++;
    chancesleft.innerHTML = `${11 - numOfGuess}`;
}

function displayTheMessage(displayMessage){
    lowOrHi.innerHTML = `<h1>${displayMessage}</h1>`;
}

function endGame(){
    input.innerHTML = '';
    input.setAttribute('disabled', '');// If the attribute already exists, the value is updated; otherwise a new attribute is added with the specified name and value
    const button = document.createElement('button');
    button.setAttribute('id', 'button')
    button.innerHTML = 'Start';
    // button.innerHTML = `<button id = "button">Start</h4>`;
    againStart.appendChild(button);
    userCanPlayGame = false;
    newGame();
}

function newGame(){
    const newButton = document.querySelector('#button');
    newButton.addEventListener('click', function(e){
        randNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numOfGuess = 1;
        guesses.innerHTML = '';
        chancesleft.innerHTML = `${11 - numOfGuess}`;
        // input.innerHTML = '';
        input.removeAttribute('disabled');
        againStart.removeChild(button);
        userCanPlayGame = true;
        lowOrHi.innerHTML = ''
    });
}