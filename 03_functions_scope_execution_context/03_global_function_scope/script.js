//window.alert('Hello');
//alert('Hello');
//console.log(window.innerWidth);

const x = 100;
console.log(x, 'in global scope');

function run() {
    //console.log(window.innerHeight);
    console.log(x, 'in function scope');
}
run();

if (true) {
    console.log(x, 'in block scope');
};

// Functions have their own scope

function add() {
    const y = 50;
    console.log(y, 'only function scope');
}
//console.log(y);
add();