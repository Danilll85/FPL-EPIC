const calc = (a, b) => {
    return function (op) {
        return eval(`${a}${op}${b}`)
    }
}

console.log(calc(1,2)('+'));
console.log(calc(1,2)('-'));
console.log(calc(1,2)('/'));
console.log(calc(1,2)('*'));


