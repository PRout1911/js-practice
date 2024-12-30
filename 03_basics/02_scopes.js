//scopes is the current context of execution in which values and expressions are "visible" or can be referenced. 
//If a variable or expression is not in the current scope, it will not be available for use.

let a = 20      //
const b = 30    //- global scope
var c = 40      //

if(true){
    let a = 300
    console.log(a);//300    - 
    console.log(b);//30     - local scope
    console.log(c);//40 : var has issue with scope in js hence var is not recommended
}
console.log('Outer: ',c);//40

//scope in function
function one(){
    const user = 'Hello';
    function  two(){
        const name = 'Bisha';
        console.log(user);//prints hello
    }
    console.log(name);// this won't execute as the varaiable is inside the function two() and can't be accessed outside it
    two()
}
one()

if(true){
    const username = 'Priyanka'
    if(username === 'Priyanka'){
        const surname = ' Rout'
        console.log(username + surname);
    }
    console.log(surname);//error: as the surname is being called outside the scope
}
console.log(username);//error: same outside the scope

//Hoisting : process of calling a function before the function is being declared(******)
// Function Declarations and Hoisting
console.log(myName(5));
function myName(num){ 
    return num + 1   
}

// Function Expressions and Hoisting
console.log(Class(6));//Cannot access 'Class' before initialization
const Class = function (num){
    return num + 1
}