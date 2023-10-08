//Values are stored on the stack
const name = 'Dhriti';
const age = 5;

//Reference values are stored on the heep
const person = {
    name: 'Prasenjit',
    age: 36
};

let newName = name;
newName = 'Priyush';

let newPerson = person;
newPerson.name = 'Pradipta'

console.log(name, newName);
console.log(person, newPerson);