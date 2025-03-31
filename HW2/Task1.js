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
can you explain to me how is this possible using arrow function? 
as we all know, 'this' inside the arrow function will always refer to the 'this' where the arrow function was defined, 
not the context we're trying to bind, so arrow functions won't work.
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
