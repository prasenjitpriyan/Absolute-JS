// Arrow function syntax
const add = (a, b) => {
    return a + b
};
console.log(add(1, 2));

//Implicit Return
const subtract = (a, b) => a - b;
console.log(subtract(10, 5));

// Can leave off () with a single param
const double = a => a * 2;
console.log(double(10));

//Returning a object
const createObject = () => ({
    name: 'Prasenjit',
});
console.log(createObject());

// Work with array
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (n) {
    console.log(n);
});

// Arrow function in a callback
numbers.forEach((n) => console.log(n));