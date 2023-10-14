// == Challenge 1

const people = [
    {
        firstName: "John",
        lastName: "Doe",
        email: "john@gmail.com ",
        phone: "111-111-1111",
        age: 30,
    },
    {
        firstName: "Jane",
        lastName: "Poe",
        email: "jane@gmail.com ",
        phone: "222-222-2222",
        age: 25,
    },
    {
        firstName: "Bob",
        lastName: "Biswas",
        email: "bob@gmail.com ",
        phone: "333-333-3333",
        age: 45,
    },
    {
        firstName: "Sara",
        lastName: "Soe",
        email: "Sara@gmail.com ",
        phone: "444-444-4444",
        age: 19,
    },
    {
        firstName: "Banana",
        lastName: "Kola",
        email: "Banana@gmail.com ",
        phone: "555-555-5555",
        age: 23,
    },
];
const youngPeople = people
    .filter((item) => item.age <= 25)
    .map((item) => ({
        name: item.firstName + ' ' + item.lastName,
        email: item.email
    }))
console.log(youngPeople);

// == Challenge 2

const numbers = [2, -20, 50, 20, -12, -9, 7];
const positiveSum = numbers
    .filter((item) => item > 0)
    .reduce((acc, curr) => acc + curr, 0);
console.log(positiveSum);

// == Challenge 3

const words = ['coder', 'programmer', 'developer'];
const cWord = words.map((item) => {
    return item[0].toUpperCase() + item.slice(1, item.length)
});
console.log(cWord);