// FIRST PART

function firstPromise() {
  const myFirstPromise = new Promise((res) =>{
    return res('done')
  })
 return myFirstPromise
}

function secondPromise() {
  const secondPromise = new Promise((res,rej) =>{
    res('done')
    rej('error')
  })
 return secondPromise
}

function thirdPromise(isError) {
  const thirdPromise = new Promise((res, rej) =>{
    if(!isError){
      return res('done')
    }else{
      return rej('error')
    } 
  })
 return thirdPromise
}

// SECOND PART ASYNC/AWAIT

/* Make a change to transform this function to a async function */
async function fourthPromise() {
  /* Change this with async/await*/
  return await firstPromise()
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
