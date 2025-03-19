/*A Promise is in one of these states:
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