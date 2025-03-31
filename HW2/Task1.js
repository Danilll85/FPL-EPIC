function bind(fn, context, args) {
  return function () {
    return fn.apply(context, args);
  };
}

const foo = function () {
  console.log(arguments);
  return this.name;
};

/*
Can we explain to me, how can we do that with arrow function, if we all know, that arrow functions haven't got a 'this' keyword?
const foo = () => {
  return this.name;
};
*/

const context = {
  name: "Danila",
  age: 19,
  getInfo() {
    return `${this.name} is ${this.age} years old`;
  },
}; // any context, object, array, etc.

const data = [20, 32, 34]; // any object, array, etc.

const bindedFunction = bind(foo, context, data);

console.log(bindedFunction());
