for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}

// == Both are correct == //

for (let index = 1; index <= 50; index++) {
    if (index % 15 === 0) {
        console.log('FizzBuzz');
    } else if (index % 3 === 0) {
        console.log('Fizz');
    } else if (index % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(index);
    }
}

