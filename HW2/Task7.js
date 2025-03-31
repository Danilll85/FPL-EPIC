function getCounter(value) {
  let counter = value;

  function f() {}

  f.log = function () {
    console.log(counter);
    return this;
  };
  f.add = function (val) {
    counter += val;
    return this;
  };
  f.reset = function () {
    counter = 0;
    return this;
  };

  return f;
}

var c = getCounter(5);

c.log() // 5 <- should outputs the result
  .add(4) // <- shoild add some value to the result
  .log() // 9
  .add(3)
  .log() // 12
  .reset() // <- resets the result
  .log() // 0
  .add(8)
  .log(); // 8
