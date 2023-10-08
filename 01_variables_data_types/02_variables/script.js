//Ways to declare a variable
//var, let, const

let firstName = 'Prasenjit';
let lastName = 'Das';
console.log(firstName, lastName, age);

//age hoisted
var age = 30;
console.log(age);

//-----Naming Conventions-----
// - Only letters, numbers, underscores and dollar sign
//- can't start with a number.

//-----Multi-word Formatting-----
//firstName = camelCase
//first_name = underscore
//FirstName = PascalCase
//firstname = lowercase

//-----Re-assigning Variables-----
age = 31
console.log(age);

let score;
score = 1;
console.log(score);


if (true) {
    score = score + 1
}
console.log(score);


const x = 100;

//-----With Array-----
const array = [1, 2, 3, 4];
array.push(5);
console.log(array);

//-----With Object-----
const person = {
    name: 'Prasenjit',
}
person.name = 'Priyan';
person.email = 'prasenjitpriyan@gmail.com';
console.log(person);

//Declare multiple values at once
let a, b, c;
const d = 10, e = 20, f = 30;
console.log(a); //undefined
console.log(d); //10
