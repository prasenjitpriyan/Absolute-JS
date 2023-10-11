const firstName = 'Dhriti';
const lastName = 'Das';
const age = 5;

const person = {
    firstName,
    lastName,
    age,
};
console.log(person.age);

// =============== Destructuring ===================//

const todo = {
    id: 1,
    title: 'Take out trash',
    user: {
        name: 'Dhriti',
    },
};

const { id: todoId, title, user: { name }, } = todo;

console.log(todoId);

// =================== Destructure arrays ===================

const numbers = [23, 67, 33, 49, 52];
const [first, second, ...rest] = numbers;

console.log(first, second, rest);
