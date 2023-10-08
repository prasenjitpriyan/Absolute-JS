//======= My Challenge ======//

const myString = 'developer';
//myNewString = myString.charAt([0]);
//myNewString = myString.toUpperCase()
//myNewString = myString.substring()

let x = myString.slice(0, 1);
let y = myString.slice(1, 9);
//console.log(x);
//console.log(y);

let myNewString = x.toUpperCase() + y
console.log(myNewString);

//======Solve======//

const string = 'developer';
let str;

//solution -- 1
str = string.charAt(0).toUpperCase() + string.substring(1);
//Solution -- 2
str = string[0].toUpperCase() + string.substring(1);
//Solution -- 3
str = `${string[0].toUpperCase()}${string.substring(1)}`
//Solution -- 4
str = `${string[0].toUpperCase()}${string.slice(1)}`
console.log(str);