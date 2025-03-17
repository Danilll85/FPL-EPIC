const fizzBuzz = () => {
    const arr = [];
    for (let i = 1; i <= 100; i++){
        arr[i - 1] = i;
    }

    for (let i = 2; i < 100; i += 3) {
        arr[i] = "Fizz";         
    }

    for (let i = 4; i < 100; i += 5) {
        arr[i] = "Buzz";         
    }

    for (let k = 14; k < 100; k += 15){
        arr[k] = "FizzBuzz"
    }
    
    console.log(arr);    
}

const fizzBuzzWithConditionals = () => {
    let arr = [];

    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0){
           arr[i - 1] = "FizzBuzz"; 
        } else if (i % 3 == 0) {
            arr[i - 1] = "Fizz"; 
        } else if (i % 5 == 0) {
            arr[i - 1] = "Buzz"; 
        } else {
            arr[i - 1] = i;
        }
    }

    console.log(arr);
}

fizzBuzz();
fizzBuzzWithConditionals();