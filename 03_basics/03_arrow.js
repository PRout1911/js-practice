//this
const user = {
    username : 'Priyanka',
    age : 21,
    func : function(){
        console.log(` Hi ${this.username}, i am ${this.age} year old!`);//to make a generalized and dynamic output we use this keyword
        console.log(this);
    }
}
user.func()
user.username = 'Nisha'
user.func()

//Window is the global object presnt in the browser

function inspect(){
    const abc = 'hello'
    console.log(this.abc);
}
inspect()//undefined 

const ins = function(){
    const abc = 'hello'
    console.log(this.abc);
}
ins()//undefined

//arrow function
const inspect = () => {
    const abc = 'hello'
    console.log(this.abc);
}
inspect()//still undefined

//1st method
const arr = (num1, num2) => { //if curly barces {} are being used then use 'return'
    return num1 + num2
}
console.log(arr(4, 6))

//2nd method
const arrow = (num1, num2) => num1 + num2 // without using return keyword
console.log(arrow(4, 6))
//OR
const arrow1 = (num1, num2) => ( num1 + num2 )// we can use paranthesis as well ()
console.log(arrow1(4, 6))

//3rd method : object in arrow function
const arrow2 = () => ({username: 'Priyanka'})
console.log(arrow2())