function sum2(x, y) {
  // 2 parameters
  return x + y;
}
function sum4(a, b, c, d) {
  // 4 parameters
  return a + b + c + d;
}


const curry = (fn) => {
    return function curriedFunction(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        } else {
            return function (...next) {
                return curriedFunction (...args, ...next);
            }
        }
    }
}

console.log(curry(sum2)(1)(2));
