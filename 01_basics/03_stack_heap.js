//Stack (Primitive): we get the copy of the value 
let nameOne = "abc"
let nameTwo = nameOne
nameTwo = "pqr"
console.log(nameTwo);
console.log(nameOne);

// Heap (Non-Primitive): we get the reference of the value
let myObj = {
    email: "anc@gmail.com",
    id: 123
}
let myObj1 = myObj
myObj1.email = "abc@gmail.com"
console.log(myObj.email);
console.log(myObj1.email);