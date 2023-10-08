let x;
const array = [34, 23, 45, 64, 89, 110];

//Push = put a value on the end of the array.
array.push(100)
array.pop();

array.unshift(99);
array.shift();

array.reverse() // Manipulate the current array

//With this method we can get something from array.
x = array.includes(20) //True or false
x = array.indexOf(34);

x = array.slice(1, 4).reverse().toString().charAt(0); //Not changing the array
// x - array.splice(1, 5);

console.log(x);