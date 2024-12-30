// Immediately Invoked Function Expression (IIFE) 
// A function that runs as soon as it is defined
// global scope creates pollution while declaration hence IIFE is used to prevent it 
//()()

//named IIFE
(function harry(){
    console.log('Harry')
})()

//un-named IIFE
(() => {
    console.log('Harry')
})(); //when we have more than one IIFE function then we use explicit semicolon ; to end the previous function

((name) => {
    console.log(`Hi, ${name}`);
})('Priyanka')// to pass an argument we can use it like this