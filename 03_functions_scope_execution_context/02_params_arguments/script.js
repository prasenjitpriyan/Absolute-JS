//================ Default Params ===============

function registerUser(user = 'Bot') {
    return user + ' is registered';
};

console.log(registerUser());

//================ Rest Params ===============

function sum(...numbers) {
    let total = 0;

    for (const num of numbers) {
        total += num
    }
    return total;
};
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));

//================ Objects as Params ===============

function loginUser(user) {
    return `The user ${user.name} with the id of ${user.id} is logged in`;
};

const user = {
    id: 1,
    name: 'Prasenjit',
};

console.log(loginUser(user));
console.log(loginUser({
    id: 2,
    name: 'Dhriti',
}));

//================ Arrays as Params ===============

function getRandom(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const item = array[randomIndex];
    console.log(item);
};
getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
