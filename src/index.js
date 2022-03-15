// FIRST PART

function firstPromise() {
  const firstPromise = new Promise((res) => {
      res('done');
  });
  return firstPromise
}


function secondPromise() {
  const secondPromise = new Promise((res, rej) => {
    rej('error')
    res('done');
});
return secondPromise
}

function thirdPromise(isError) {
  const thirdPromise = new Promise((res, rej) => {
    if (isError === true) {
      rej('error')
    } else {
      res('done');
    }
      
});
return thirdPromise
}

// SECOND PART ASYNC/AWAIT

/* Make a change to transform this function to a async function */
async function fourthPromise() {
  /* Change this with async/await*/
  return await firstPromise();
}

/* Make a change to transform this function to a async function */
async function fifthPromise(isError) {
  let result
  
  try {
    result = await thirdPromise(isError)
  } catch (isError) {
    result = new Error (isError)
    //result = { message: isError }
  }
  return result
}