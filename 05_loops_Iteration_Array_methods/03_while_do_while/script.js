// == Many programmers follow is to use a for loop when you know the number of times that you want to loop;

// == While loop have to use when the number of times the loop will run is unknown;

let i = 0;
while (i <= 20) {
    console.log('Number ' + i);
    i++;
}

// == Loop over arrays.

let j = 0
const array = [10, 20, 30, 40, 50];
while (j < array.length) {
    console.log(array[j]);
    j++;
}

// == Nesting while loops

let k = 1;
while (k <= 5) {
    console.log('Number ' + k);

    let l = 1;
    while (l <= 5) {
        console.log(`${k} * ${l} = ${k * l}`);
        l++
    }
    k++
}

// == Do..while.. loops == //

let d = 21;
do {
    console.log('Numbers ' + d);
    d++
} while (d <= 20);