// FIRST PART
// 1)
function firstPromise(result) {
  return new Promise ((resolve) => {
    resolve('done');
  });
} 
console.log(firstPromise(result));


// 2)
function secondPromise() {
  return new Promise ((resolve,reject) => {
    reject ('error');
  });
} 
console.log (secondPromise());


// 3)

function thirdPromise(isError) {
  return new Promise ((result, reject)=> {
    if (isError === false){
      result ('done');
    } else {
      reject ('error');
    }
  });
}
console.log (thirdPromise(isError));

// SECOND PART ASYNC/AWAIT

/* Make a change to transform this function to a async function */
async function fourthPromise() {
  return await firstPromise();
}

/* Make a change to transform this function to a async function */
async function fifthPromise(isError) {
  let result

  try {
    result = await thirdPromise(isError)
  }catch (isError){
    return ('Error')
  }
  return result 
}

