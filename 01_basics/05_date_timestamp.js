//date
const myDate = new Date();
console.log(typeof myDate);//object
console.log(myDate.toString());//returns current date and time : Tue Dec 10 2024 09:56:00 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());//returns a string representing the date portion : Tue Dec 10 2024
console.log(myDate.toLocaleString('en-IN'));//returns a string with a language-sensitive representation of the date : 12/10/2024, 10:01:51 A
 
let yourDate = new Date(2023, 0, 23);
console.log(yourDate);//2023-01-22T18:30:00.000Z : in js month starts with 0
console.log(yourDate.toDateString());//Mon Jan 23 2023

let yourdate = new Date('01-23-2023')
console.log(yourdate.toDateString());

//timestamp
let myTime = Date.now()
console.log(myDate.getTime());// returns the number of milliseconds since the Jan 1
console.log(Math.floor(Date.now()/1000));//returns the time in seconds with a floor value

let newDate = new Date()
console.log(newDate.getMonth() + 1);//12
console.log(newDate.getDay());//2: tuesday
console.log(
 newDate.toLocaleString('default', {     //helps to more customize the date eg: weekday long means Tuesday in full
    weekday: "long",
}));