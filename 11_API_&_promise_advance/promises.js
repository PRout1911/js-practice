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