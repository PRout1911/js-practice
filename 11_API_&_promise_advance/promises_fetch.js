/*
Promise is an object which act as a placeholder for a value that will be available in the future.
In simple words, promise is used to delay the activity or make it wait until the assigned tasks is completed.

A Promise is in one of these states:
    pending: initial state, neither fulfilled nor rejected.
    fulfilled: meaning that the operation was completed successfully.
    rejected: meaning that the operation failed.
*/

/*
                                                        async actions
                                                             |
                  fulfill               settled          -----
                ---------------.then(onFullfilemnet)-----|  ------
  Pending       |                                                |      pending
    Promise ----|                                                |----  Promise  ------ .then() ....
                |                                                |                      .catch()
                ---------------.then(..., onRejection)---|  ------
                               .catch(onRejection)       -----
                                                             |
                                                        error handling
*/

//promise 1
const promiseOne = new Promise(function(resolve, reject){
  //now we can do all the async tasks
  setTimeout(function(){
    console.log('Async tasks completed');
    resolve();//helps to consume the promise function
  }, 1000)
})

//below is the consuming the Promise process
promiseOne.then(function(){//'then' have connection with the 'resolve' parameter
  console.log('promise consumed');//we need to call resolve() in above function to in-order to get this function execute
})//this function would always execute after the resolve() function is called

//promise 2 : same above but in a different way
new Promise(function(resolve, reject){
  setTimeout(function(){
    console.log('Async 2 task is completed');
    resolve();
  }, 1000)
}).then(function(){
  console.log('promise 2 consumed');
})

//promise 3
const promiseThree = new Promise(function(resolve, reject){
  setTimeout(function(){
    resolve({username: 'priyanka', email: 'priyanka@gmail.com'});//usually object is passed in this function
  }, 1000)
})

promiseThree.then(function(value){
  console.log(value);
})

//Promise 4
const promiseFour = new Promise(function(resolve, reject){
  setTimeout(function(){
    let error = false
    if(!error){
      resolve({username: 'PQR', password: 'pqr@123'})
    }else{
      reject('ERROR Something went wrong')//'reject' have connection with the 'reject' parameter
    }
  }, 1000)
})

promiseFour
.then((user) => {
  console.log(user);
  return user.password;
})
//this below processes where we are using . & . is called chaining...in database it is used the most
.then((password) => {
  console.log(password);
})
.catch((error) => console.log(error))
.finally(() => console.log('The error is either rejected or resolved!'))

//Promise 5
const promiseFive = new Promise(function(resolve, reject){
  setTimeout(function(){
    let error = false
    if(!error){
      resolve({username: 'ABC', password: 'abc@123'})
    }else{
      reject('ERROR ABC went wrong')}
  }, 2000)
})

async function consumePromise5(){//async - await directly doesn't handle error hence we are using try, catch
  try{
    const reposne = await promiseFive;
    console.log(reposne);
  }catch(error){
    console.log(error);
  }
}

consumePromise5()

/*
                                   response =  fetch ('abc')
                                                  |
                                ------------------------------------------
                                |                                        |             
          -----------------xyz data (array) : __ (initialy empty)   will run either
          |            **private field we                            Web browser api/ node api
          |           can't push data in it                               |
          |                    |                                  either of them provide network request     |Global Memory
          |      1. OnFulfield[]-promise response-------                   |                                 |
          |      2. OnRejection[]-promise rejection    |            -------------                            |  response (after getting the required output the network request fires a query where reponse / 
                                                                                                                      reject have functions which fulfills data then the variable gets avaialable in global memory)
          |                                 |          | even errors|           |                            |     | 
          |                                 |          -------------✅-recieve ❌- not recieve              |     |
          |                                 |                                   |                            |     |
          |                                 -------------------------------------                            |     |      
          |                                                                                                  |     |
          ---------------------------------------------------------------------------------------------------------

*/

//fetching value from an api
//method 1
async function getUsers(){
  try{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json();//since json as well takes time hence we need to use await
    console.log(data);
  }catch(error){
    console.log(error);
  }
}

getUsers()

//method 2
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data);
})
.catch((error) => console.error())