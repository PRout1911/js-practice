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

promiseOne.then(function(){//then have direct connection with the 'resolve' parameter
  console.log('promise consumed');//we need to call resolve() in above function to in-order to get this function execute
})//this function would always execute after the resolve() function is called

//promise 2 : same above but in a different way
new Promise(function(resolve, reject){
  setTimeout(function(){
    console.log('Async 2 task is completed');
    resolve();
  }, 2000)
}).then(function(){
  console.log('promise 2 consumed');
})

//promise 3
const promiseThree = new Promise(function(resolve, reject){
  setTimeout(function(){
    resolve({username: 'priyanka', email: 'priyanka@gmail.com'});//usually object is passed in this function
  }, 3000)
})

promiseThree.then(function(value){
  console.log(value);
})