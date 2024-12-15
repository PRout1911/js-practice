//Singleton :  Object.create

//Object literals
const mySym = Symbol('key')
const obj = {
    name : 'Priyanka',
    age: 23,
    [mySym] : 'myKey',
    arr : ['hii', 'bye', 'good'],
    bool : true,
    "last name" : 'rout'  
}
//  console.log(obj.name);
//  console.log(obj['name']);//another way to access object elements
//  console.log(obj['last name']);
//  console.log([mySym]);//to accesss Symbol use it inside [] without ''

obj.name = 'Nisha'
//  console.log(obj);
// Object.freeze(obj) //this would restrict any chnages made in the object after it is being written
obj.name = 'Riya'
//  console.log(obj);

obj.myFunc = function(){ 
    console.log('Hello! i am xyz.');
}
obj.myFunc2 = function(){ console.log(`Hello! i am ${this.name}`);
}
//  console.log(obj.myFunc());
//  console.log(obj.myFunc2());

//const tinderUser = new Object()
const tinderUser = {}// other way to declare object
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const objUser = {
    email : 'p@gmail.com',
    age : 21,
    userCred : {
        UserName : {
            firstName : 'Priyanka',
            lastName : 'Rout'
        }
    }
}
//  console.log(objUser.userCred.UserName.firstName);//we can access objects of objects 

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

const obj5 = {obj1, obj2}//it creates objects of object : { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
const obj6 = Object.assign({}, obj1, obj2, obj3)//copies all enumerable own properties from one or more source objects to a target object { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
const obj7 = {...obj1, ...obj2, ...obj3}//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const Objb = [      //array of objects
    {
        name : 'rahul',
        age : 20
    },{
        name : 'rahul',
        age : 20
    },{
        name : 'rahul',
        age : 20
    }
]
//  console.log(Object.keys(tinderUser)); //prints the array of key of objects 
//  console.log(Object.values(tinderUser));//prints the array of values of objects
//  console.log(Object.entries(tinderUser));//[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ] : prints array of array of the objects

//  console.log(tinderUser.hasOwnProperty('isLoggedIn'));//checks whether the object has any element similar

 //de-structuring
const subject = {
    subName : 'Comp Sci',
    subId : 121,
    subTeacher : 'Rahul'
}
const {subName : Name} = subject //subject.subName is fine but this is other method
//      |         |         |
//  attribute   new       object 
//             variable    name
// console.log(Name);

//JSON : javascript object notation : used to transmit data in web app
{
    "name" : "priyanka",
    "age" : 21,
    "sub" : "science"
}
// or it can written as array 
[
    {},
    {}
]