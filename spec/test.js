describe("Test for myPromise", function () {
  it("firstPromise - should return a fulfilled promise with value done", function () {
    return firstPromise().then((res) => expect(res).toEqual("done"));
  });

  it("secondPromise - should return a rejected promise with value done", function () {
    return secondPromise().catch((res) => expect(res).toEqual("error"));
  });

  it("thirdPromise should return a rejected response if isError true", function () {
    return thirdPromise(true).catch((res) => expect(res).toEqual("error"));
  });

  it("thirdPromise should return a fulfilled response if isError false", function () {
    return thirdPromise(false).then((res) => expect(res).toEqual("done"));
  });
});
