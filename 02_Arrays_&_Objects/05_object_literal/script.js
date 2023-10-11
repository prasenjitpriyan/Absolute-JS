//A common data structure that holds key-value pairs.
let x;
let y;
const person = {
    name: 'Dhriti',
    age: 5,
    isAdmin: true,
    address: {
        street: '57 P. Majumder Road',
        area: 'Haltu',
        city: 'Kolkata',
        state: 'West Bengal',
    },
    hobbies: ['music', 'sports'],
};
//To access a specific property from an object, we use the dot syntax.
x = person.name;
x = person['age'];
x = person.address.state;
x = person.hobbies[0];

//Edit/Update object
person.name = 'Prasenjit';
person['age'] = 36;

//Delete from object.
delete person.age;

//Addition to object.
person.hasChildren = true;

//Function and call of key-value pair using (this) key-word

person.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
};
person.greet()

x = person;
console.log(x);

//==================================================

const person2 = {
    'first name': 'Prasenjit',
    'last name': 'Das',
}

y = person2['first name'];
console.log(y);