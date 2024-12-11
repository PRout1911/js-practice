//Strings
const firstName = "Priyanka"
const comp = "Comp Sci"
const age = 21
console.log(`Hello! My name is ${firstName}. I graduate in ${comp}. I am ${age}yrs old. `);

const str = new String('Limu')
const trimStr = '   hello'
const url = 'https://www.youtube.com/Chai%20aur%20code'

console.log(str.toUpperCase());
console.log(trimStr.trim()); //trims whitespaces from right & left both sides
console.log(url.replaceAll('%20', '_'));// 'replace': it replace just one whereas 'replaceAll': replaces all the matching element
console.log(str.__proto__); //output: {} - though the result shows empty braces it has all the sub properties in it
console.log(str[2]);

//Number
const num = 100
const number = new Number(200.923)
const num1 = 10000000
console.log(number.toPrecision(3));//provide precise value upto the given parameter
console.log(number.toString().length);
console.log(number.toFixed(2));//fix the decimal upto the parameter
console.log(num1.toLocaleString());//converts the number to the standard US (,) form!! To convert to IND pass 'en-IN' parameter!

//Math Library
console.log(Math);
console.log(Math.PI);
console.log(Math.round(2.63));
console.log(Math.ceil(3.5));//returns top value
console.log(Math.floor(3.5));//return lower value
console.log(Math.min(1,78,890,0));
console.log(Math.random());//returns any random value
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)