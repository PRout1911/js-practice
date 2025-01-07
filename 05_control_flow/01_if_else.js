//if-else
const temperature = 19
if(temperature > 40){
    console.log('Temperature is greater than 40');
}else{
    console.log('Temperature is smaller than 40');
}

// (IMPORTANT)
const score = 200
if(score > 100){
    var value = 'Hello' // VAR CREATES AMBIGUITY IN SCOPE AS IT TAKES EVERYTHING A GLOBAL SCOPE HENCE DO NOT USE VAR 
}
console.log(`The user is saying ${value}`);

//if-else if-else
let num = 1000
if(num < 200){
    console.log('less than 200');
}else if(num < 500){
    console.log('less than 500');  
}else if(num < 800){
    console.log('less than 800');  
}else{
    console.log('less than 1200');
}

//&& (and) , || (or)
const loggedIn = true
const debitCard = true
const loggedInGoogle = true
const loggedInEmail = false

if(loggedIn && debitCard){//checks whether both the condition is true or not...
    console.log('User can do shopping!');
}
if(loggedInEmail || loggedInGoogle){//checks whether either of the condition is true or not...
    console.log('logged in using google or email');
}