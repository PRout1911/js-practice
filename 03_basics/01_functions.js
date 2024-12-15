//  func name   execution
//        |     |    
function myName() {
    console.log('Hi');
}
myName()
//     |
// execution

//ways to write functions
//             parameters
// 1st method       |
function myfunc(num1, num2){
    console.log(num1 + num2);// this would just print the result in console but doesn't return anything
}
myfunc(3, 4)
//       |
//   arguments
//2nd method
function myfunc1(num1, num2){
    let result = num1 + num2
    return result
    //console.log('hello'); after return function will discard anything
}
const result = myfunc1(4, 5)
console.log("Result: ",result);

//3rd method 
function myfunc2(num1, num2){
    return num1 + num2          // saves some memory space
}
const result1 = myfunc1(4, 1)
console.log("Result: ",result1);

//user conditions
function myUser(username){ //or username = "sam" then there won't be any undefined issue
    if (!username){ //or if(username === undefined)
        console.log('Please enter a username!');
        return
    }
    return `${username} login successfully!`
}
console.log(myUser('Priya'));

//rest (...) operator
function calPrice(...num1){//prints array of unlimited dynamically results
    return num1
}
console.log(calPrice(3,4,5));

function cal(val1, val2,...num1){//prints array of unlimited dynamically results
    return num1
}
console.log(cal(3,4,5,6,7));//prints only [5,6,7] as val1 = 3, val2 = 4

//objects in functions
const obj = {
    username : 'priyanka',
    price : 233
}
function myObj(anyobj){
    console.log(`Username is ${anyobj.username} and Price is ${anyobj.price}.`);
}
console.log(myObj(obj));// we can also pass object values durectly as arguments

//array in function
const arr = [100,200,300,400]
function myArr(anyArr){
    return anyArr[3]
}
console.log(myArr(arr));// we can also pass an array directly as arguments