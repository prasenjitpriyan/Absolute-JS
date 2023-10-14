// == Loop through arrays
const items = ['book', 'table', 'chair', 'kite'];
for (const item of items) {
    console.log(item);
};

// == Loop through array object
const users = [
    { name: 'Brad' },
    { name: 'Kate' },
    { name: 'Steve' }
];
for (const user of users) {
    console.log(user.name);
};

// == Loop over strings
const string = 'World';
for (const letter of string) {
    console.log(letter);
}

// == Loop over Maps
const map = new Map();
map.set('name', 'Prasenjit');
map.set('age', '36');

for (const [key, value] of map) {
    console.log(key, value);
}


