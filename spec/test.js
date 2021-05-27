describe("Test for myPromise", function () {
  describe("firstPromise()", function () {
    it("should return a fulfilled promise with value done", function () {
      return firstPromise().then((res) => expect(res).toEqual("done"));
    });
  });

  describe("secondPromise()", function () {
    it("should return a rejected promise with value done", function () {
      return secondPromise().catch((res) => expect(res).toEqual("error"));
    });
  });

  describe("thirdPromise()", function () {
    it("should return a rejected response if isError true", function () {
      return thirdPromise(true).catch((res) => expect(res).toEqual("error"));
    });

    it("should return a fulfilled response if isError false", function () {
      return thirdPromise(false).then((res) => expect(res).toEqual("done"));
    });
  });

  describe("async/await", function () {
    describe("fourthPromise()", function () {
      it("should return a fulfilled promise with value done", function () {
        return fourthPromise().then((res) => expect(res).toEqual("done"));
      });
    });

    describe("fifthPromise()", function () {
      it("should return a fulfilled promise with value done", function () {
        return fifthPromise(false).then((res) => expect(res).toEqual("done"));
      });

      it("should return a rejected promise with value error", function () {
        return fifthPromise(true).then((res) => expect(res.message).toEqual("error"));
      });
    });
  });
});
