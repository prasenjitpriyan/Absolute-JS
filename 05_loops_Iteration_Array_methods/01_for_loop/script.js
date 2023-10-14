//for ([initialExpression]; [conditionExpression]; [incrementExpression]) statement;

// == Initial Expression == Initialize a variable/counter

// == Condition Expression == Condition that the loop will continue to run as long as it is met or until the condition is false;

// == Increment Expression == Expression that will be executed after each iteration of the loop. Usually increments the variable;

// == Statement == Code that will be executed each time the loop is run. To execute a `block` of code, use the `{}` syntax;

for (let i = 0; i <= 10; i++) {
    if (i === 7) {
        //console.log('7 is my lucky number');
    } else {
        //console.log('Number ' + i);
    }
}

// == Nest loops ==

for (let i = 0; i <= 5; i++) {
    //console.log('Number ' + i);
    for (let j = 0; j <= 5; j++) {
        //console.log(`${i} * ${j} = ${i * j}`);
    }
}

// == Loop through an array ==//

const names = ['Brad', 'Sam', 'Sara', 'John', 'Tim'];

for (let i = 0; i < names.length; i++) {
    if (names[i] === 'John') {
        console.log(names[i] + ' is the best');
    } else {
        console.log(names[i]);
    }
}