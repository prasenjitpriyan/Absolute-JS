//------Primitive Data Types ------ //
//Stored directly in the memory called "stack", where it is accessed from//

//String - Sequence of characters. Must be in quotes or backticks.
const firstName = 'Dhriti';
const fName = firstName
console.log(fName, typeof firstName);

//Number - Integers as well as floating-point numbers.
const age = 5;
const bodyTemperature = 98.9;
console.log(age, bodyTemperature, typeof bodyTemperature, typeof age);

//Boolean - Logical entity / true or false.
const kids = true;

//Null - Intentional absence of any object value.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null
const aptNumber = null;
console.log(aptNumber, typeof aptNumber); //null object

//Undefined - A variable that has not yet been defined / assigned.
let score;
const scoreOutput = score;
console.log(scoreOutput, typeof scoreOutput);

//Also
let run = undefined;
const netRun = run;
console.log(netRun, typeof netRun);

//Symbol - Built in object whose constructor return a unique symbol.
let id = Symbol('id');
const idOutput = id;
console.log(idOutput, typeof idOutput);

//BigInt - Numbers that are greater than the "Number" type can handle.
const n = 6000000000292202000000n;
const bigNumber = n;
console.log(bigNumber, typeof bigNumber);


// ------ Reference Types (Objects) ------ //
//Stored in the memory called heap and accessed by reference//

//Reference types or "objects" are a non primitive value.
//When assigned to a variable, the variable is given a reference to that value.
//Object literals, arrays and functions are all reference types.

//Arrays - object
const numbers = [1, 2, 3, 4, 5];
const outputNumbers = numbers;
console.log(outputNumbers, typeof outputNumbers);

//Object
const persons = {
    name: 'Dhriti',
    age: 5,
}
const outputPersons = persons;
console.log(outputPersons, typeof outputPersons);

//Function - object
function sayHello() {
    console.log('Hello');
};
const outputSayHello = sayHello;
console.log(outputSayHello, typeof outputSayHello);

// ------ Dynamic Types vs Static Type ------//

//JavaScript is a dynamically-typed language. 
//This means, we don not explicitly define the types for our variables.
//TypeScript is a superset of JavaScript, which allows static-typing.
//This can make your code more verbose and less prone to errors. 



