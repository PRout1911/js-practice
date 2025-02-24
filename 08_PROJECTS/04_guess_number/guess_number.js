const randNumber = parseInt(Math.random() * 100 + 1)

const input = document.querySelector('#guessField')
const submit = document.querySelector('#subt')
const guesses = document.querySelector('.guesses')
const lastResult = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const againStart = document.querySelector('.resultParas')

let p = document.createElement('p')

let prevGuess = []
let numOfGuess = 1

let userCanPlayGame = true
if(userCanPlayGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(input.value)
        validateTheGuess(guess);
    });
}

function validateTheGuess(guessNum){
    
}
