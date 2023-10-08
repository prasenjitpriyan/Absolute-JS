let x;
let y;

//Array Literal
const number = [12, 24, 56, 100, 89];
x = number.length
x = number[0] + number[3]
console.log(x);

//Array Constructor
const fruits = new Array('apple', 'grapes', 'orange');
y = `My favorites fruit is ${fruits[1]}`;
fruits[2] = 'pear';
fruits[3] = 'strawberry';
fruits[fruits.length] = 'blueberry';
fruits[fruits.length] = 'peach';
y = fruits
console.log(y);

