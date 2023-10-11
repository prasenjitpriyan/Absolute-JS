let x;
let y;
let z;

const todo = new Object();
todo.id = 1;
todo.name = 'Buy Milk';
todo.completed = false;

x = todo;
x = Object.keys(todo).length;
x = Object.values(todo);
x = Object.entries(todo);
x = todo.hasOwnProperty('name');

console.log(x);

//=================================

const person = {
    address: {
        coords: {
            lat: 42.9383,
            lng: -71.3232,
        }
    }
}
y = person.address.coords.lat;

console.log(y);

//=============== Spread Operator ===================

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

//const obj3 = { obj1, obj2 };
const obj3 = { ...obj1, ...obj2 };
const obj4 = Object.assign({}, obj1, obj2)

z = obj3
z = obj4

console.log(z);

//================ Array Object ==================

const todes = [
    { id: 1, name: 'buy milk' },
    { id: 2, name: 'pickup kids from school' },
    { id: 3, name: 'take out trash' }
];

z = todes[0].name;

console.log(z);
