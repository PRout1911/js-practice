//truthy values : "0", "false", " ", [], {}, function(){}
//falsy values  : 0, false, 0n, "", null, undefined, NaN

const user = "priyanka@123" //: true//0 : false //[] : true 
if (user) {
    console.log("true");
}else{
    console.log('false');
}

//to check if array is empty
const arr = []
if(arr.length === 0){
    console.log('Array is empty');
}

//to check if object is  empty
const obj = {}
if(Object.keys(obj).length === 0){
    console.log('Object is empty');
}

//****
false == 0 //true
false == "" //true
"" == 0 //true

//Nullish Coalescing Operator (??): null undefined 
// It is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, 
// and otherwise returns its left-hand side operand.
let val1 
val1 = null ?? 10// 10
val1 = 5 ?? 10//5
val1 = undefined ?? 15 //15
val1 = null ?? 10 ?? 20 //10 : first number will be choosen
val1 = null ?? undefined //undefined : since undifined means there's something that exists
console.log(val1);

// Terniary Operator
// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80") //more than 80