const myArr = [1,2,3,4,5]
const Arr = ['hello','bye']
const yourArr = new Array(7,8,9,0)
console.log(myArr[3]);//4
console.log(Arr[1]);//bye
console.log(yourArr[0]);

//array methods
myArr.push(6)//adds the element at the extreme end
myArr.pop()// removes the extreme end element (no need to pass any paarmete

yourArr.unshift(6)//adds the element  at the extreme start (not recomended as it is time consuming)
yourArr.shift()//removes the first element

console.log(myArr.includes(7));
console.log(myArr.indexOf(12));//if index is out of range then js shows -1
console.log(typeof myArr.join());//string : returns a new string by concatenating all of the elements
console.log(myArr.join('-'))

// slice, splice
console.log("A ", myArr);//[ 1, 2, 3, 4, 5 ]
const myn1 = myArr.slice(1, 3)//slice returns a shallow copy (whose properties share the same references (point to the same underlying values) as those of the source object) of a portion
console.log(myn1);// doesn't effect the original array : [ 2, 3
console.log("B ", myArr);
const myn2 = myArr.splice(1, 3)//changes the contents of an array by removing or replacing existing elements and/or adding new elements in plac
console.log("C ", myArr);
console.log(myn2);//changes the existing array by removing the earlier one

const myarr = ['hello', 'bye', 'hii', 'good']
const arr1 = ['bad', 'excel', 'nice']
myarr.push(arr1)
console.log(myarr);//[ 'hello', 'bye', 'hii', 'good', [ 'bad', 'excel', 'nice' ] ] - result is array of array 

myarr.concat(arr1)
console.log(myarr);//result same as push

// console.log([...myarr, ...arr1]);//spread : ['hello', 'bye', 'hii','good', 'bad', 'excel','nice']

const newArr = [1,2,3,[4,5],6,7,[0,8,9]]
// console.log(newArr.flat(Infinity));//creates a new array with all sub-array elements : [1,2,3,4,5,6,7,0,8,9], removes the blank values

console.log(Array.isArray("Hitesh"))//checks whether it's an array or not
console.log(Array.from("Hitesh"))//converts the string into sub-string array
console.log(Array.from({name: "hitesh"})) // retuens an object : []

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));

