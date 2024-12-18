//scopes is the current context of execution in which values and expressions are "visible" or can be referenced. 
//If a variable or expression is not in the current scope, it will not be available for use.

let a = 20      //
const b = 30    //- glabal scope
var c = 40      //

if(true){
    let a = 300
    // console.log(a);//300    - 
    // console.log(b);//30     - local scope
    // console.log(c);//40 : var has issue with scope in js hence var is not recommended
}

// console.log('Outer: ',c);//40

//scope in function
function one(){
    const user = 'Hello';
    function  two(){
        const name = 'Bisha';
        // console.log(user);//prints hello
    }
    //console.log(name);// this won't execute as the varaiable is inside the function two() and can't be accessed outside it
    two()
}
one()
