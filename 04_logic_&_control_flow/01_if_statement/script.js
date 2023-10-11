// == Format of If statement

if (true) {
    console.log('this is true');
}
if (false) {
    console.log('this is false');
}

// == Example

const x = 10;
const y = 5;

if (x >= y) {
    console.log(`${x} is greater than or equal to ${y}`);
}

// == Example of if..else..

if (x === y) {
    console.log(`${x} is equal to ${y}`);
} else {
    console.log(`${x} is not equal to ${y}`);
}

// == Shorthand if..else..

if (x >= y) console.log(`${x} is greater than or equal to ${y}`), console.log('This is true');
else console.log('This is false');