const sleep = async function (delay) {
  delay *= 1_000;
  function tmp() {
    return new Promise((resolve) => setTimeout(resolve, delay));
  }

  await tmp();
};

console.log(new Date()); // Sun Oct 08 2017 10:44:34 GMT+0300 (+03)
await sleep(9);
console.log(new Date()); // Sun Oct 08 2017 10:44:43 GMT+0300 (+03)

//I don't know how to implement this without async/await, also we cannot use only setTimeout becouse of event loop
