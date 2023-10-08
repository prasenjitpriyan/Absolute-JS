//======Nesting========//
let x;
const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];

fruits.push(berries);

x = fruits[3][1];
console.log(x);

const allFruits = [fruits, berries];
x = allFruits[1][0];
console.log(x);

//=======Concat======//
let y;
const fruit = ['apple', 'pear', 'orange'];
const berrie = ['strawberry', 'blueberry', 'rasberry'];

y = fruit.concat(berrie);
console.log(y);

//======Spread Operator (...) ======//
let z;
const frui = ['apple', 'pear', 'orange'];
const berri = ['strawberry', 'blueberry', 'rasberry'];

z = [...frui, ...berri];
console.log(z);

//======Flatten Arrays======//
let a;
const array = [1, 2, [3, 4], 5, [6, 7], 8];
console.log(array);

a = array.flat();
console.log(a);

//======Static Methods on Array Object======//
a = Array.isArray('array');
a = Array.from('12345');

const b = 1;
const c = 2;
const d = 3;
a = Array.of(b, c, d);

console.log(a);