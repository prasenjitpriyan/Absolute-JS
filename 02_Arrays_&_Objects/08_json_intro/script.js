const post = {
    id: 1,
    title: 'Post One',
    body: 'This is the body'
};

// == Convert to JSON string
const string = JSON.stringify(post);
console.log(string.id);

// == Parse JSON ==
const object = JSON.parse(string);
console.log(object.id);


const posts = [
    {
        id: 1,
        title: 'Post One',
        body: 'This is the body'
    },
    {
        id: 2,
        title: 'Post Two',
        body: 'This is the body'
    }
];

const string2 = JSON.stringify(posts);

console.log(string2);