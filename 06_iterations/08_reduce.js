const num = [1, 2, 3, 4]

//function
let myNum = num.reduce( function (accumulator, currentValue) {
    console.log(`Accumulator: ${accumulator} & Current Value: ${currentValue} `)
    //                              |                               |
//The value resulting from the previous call to callbackFn.     The value of the current element.
//On the first call, its value is initialValue is specified;    On the first call, its value is array[0] if initialValue is specified;
//otherwise its value is array[0]                               otherwise its value is array[1].
    return accumulator + currentValue
}, 0)
// |_ initial value
console.log(myNum)

//arrow function
const myReduce = num.reduce( (acc, curr) => acc + curr, 5)
console.log(myReduce)