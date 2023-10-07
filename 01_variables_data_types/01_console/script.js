console.log();
//console is an object
//Objects have properties and methods
//log() is a method
//method is a function
//to execute a function you have to use parentheses ();
// The dot . syntax to access properties in methods
console.log(100);
//In this methods we can pass a number as argument
//console.log(object)
console.error('Alert')
console.warn('Warning');
console.table({
    name: 'Prasenjit Das',
    email: "prasenjitpriyan@gmail.com"
});

const x = 100;
console.group('simple')
console.log(x);
console.error('Alert');
console.warn('Warning');
console.groupEnd()

//Adding style in console
const style = 'padding: 10px; background-color: white';
console.log('%cHello World!', style);