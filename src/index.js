// FIRST PART

function firstPromise() {
  const myfp = new Promise((res) => {
    res('done')
  });
  return myfp
}

function secondPromise() {
  const myfp2 = new Promise((res) => {
    res('error')
  });
  return myfp2
}

function thirdPromise(isError) {
  const mytp3 = new Promise((res, rej) => {
    if (isError) {
      rej('error')
    }
    res('done')
  })
  return mytp3
    .then(res => (res))
    .catch(err => (err))
}

// SECOND PART ASYNC/AWAIT

/* Make a change to transform this function to a async function */
async function fourthPromise() {
  const x = await firstPromise()
  return firstPromise(x)
}

/* Make a change to transform this function to a async function */
function fifthPromise(isError) {
  try {
    const promise = await thirdPromise(isError);
  } catch (error) {
    promise = { message: error } || new Error(error)
    return promise
  }

}
