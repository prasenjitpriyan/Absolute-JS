let x;

x = 5 + '5';
x = 5 + Number('5');
console.log(x, typeof x);

//Javascript coercion
x = 5 * '5';
console.log(x, typeof x);

//The value of null is 0
x = Number(null)
x = 5 + null;
console.log(x, typeof x);

//True has a number and False is 0.
x = Number(true);
x = 5 + true;
console.log(x, typeof x);
x = Number(false);
x = 5 + false;
console.log(x, typeof x);


