//variable declaration
const abc = 1
let name1 = "abs"
var mail = "abc@maiil.com" /* Don't use VAR to declare varaibles as js have some issues with block and functional scope*/
let xyz; // js will name it as undefined
console.log(name1); // use to print a single output
console.table([name1, mail]); // use to print multiple output in a tabular form
xyz = '123' //without declaration this is not a good practice

//data types
//Primtive DT 
let num = "abc" //String => typeof - string
let a = 1   //Number => typeof - number
            //null => standalone value t
            // undefined => value is not assigned
            // Symbol => uniqueness => typeof - symbol
            // Boolean => true/false => typeof - boolean
            // BigInt => typeof - bigint
console.log(typeof null)// result: object
console.log(typeof undefined)// the result: undefined
//Refernece (Non- Primitive dT)
const myArray = ["abc", "pqr"] // Array => typeof - object
const myObj = {                 // Object => typeof - object
    name: "mno",
    age: 20
}
const myFunc = function(){      //Function => typeof - Function Object
    console.log("hello");
}

//Conversions
let pqr = 33
let pqrConvertToNum = String(pqr) //provide the conversion to a diff data type .... use it like Number, Boolean
console.log(typeof pqrConvertToNum)
console.log(typeof(pqrConvertToNum))

//if converted to Numebr: "33" - 33 | "33qwe" - NaN | true - 1 | false - 0
// if converted to Boolean: 0 - false |1 - true | "" - false | "hitesh" - true

//Operations
console.log(+true);//1
console.log(+"");//0

let game = 100
game++; //the increment operator increments and returns the value before incrementing.
console.log(game);
++game; //the increment operator increments and returns the value after incrementing.

//Comparisons
console.log(null == 0);//false
console.log(null >= 0);//t
console.log(null <= 0);//t

console.log(null >= 0);//t
console.log(null <= 0);//t
console.log(null == 0);//false

//strict equality => whether its two operands are equal, returning a Boolean result.
// strict equality operator always considers operands of different types to be different.
console.log( "2" === 2);//false
"hello" === "hello"; // true
"hello" === "hola"; // false
3 === 3; // true
3 === 4; // false
true === true; // true
true === false; // false
null === null; // true