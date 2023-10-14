const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const initialValue = 0;
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

console.log(sum);

// == Using a for loop
const sum2 = () => {
    let accumulator = 0;
    for (const currentValue of numbers) {
        accumulator += currentValue
    }
    return accumulator
}
console.log(sum2());


//========================================
const cart = [
    { id: 1, name: 'Product 1', price: 130 },
    { id: 2, name: 'Product 2', price: 150 },
    { id: 3, name: 'Product 3', price: 175 },
];

const total = cart.reduce((acc, product) => {
    return acc + product.price;
}, 0)
console.log(total);
