//Challenge - 1

const getCelsius = (fahrenheit) => (5 / 9) * (fahrenheit - 32);
console.log(`The temperature is ${getCelsius(32)}\xB0C`);

//Challenge - 2

const minMax = (array) => {
    const min = Math.min(...array);
    const max = Math.max(...array);
    //console.log(min, max);

    return {
        min,
        max,
    }
};
console.log(minMax([1, 2, 3, 4, 5]));

//Challenge - 3

(function (l, w) {
    const area = l * w;
    console.log(`The area of a rectangle with a length of 10 and a width of 5 is ${area}`);
})(10, 5)
