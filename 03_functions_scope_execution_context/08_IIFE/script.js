// Biggest advantage is to avoid global scope pollution

// const user = 'Prasenjit';
// console.log(user);
//The above declaration is not possible due to the 'user' has already been declared in otherscript.js.

//In this situation the IIFE came to the picture.

(function () {
    const user = 'Prasenjit';
    console.log(user);
    const hello = () => console.log('Hello from the IIFE');
    hello()
})();

// You can not call the function outside of the IIFE.

(function (name) {
    console.log('Hello ' + name);
})('Prasenjit');

