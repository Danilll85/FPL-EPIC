const notNew = () => {
    console.log('...');
}

try {
    let obj = new notNew();
} catch {
    console.log(`it's wrong (notNew function)`); //this will be output
}

const yesNew = function () {
    console.log('...');
}

try {
    let obj = new yesNew();
    console.log("it's work (yesNew function)");
} catch {
    console.log("it's wrong");
}