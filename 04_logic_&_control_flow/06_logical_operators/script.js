// == Logical and must be all true
console.log(10 > 20 && 30 > 13);

// == Logical or = Just one of them has to be true
console.log(10 > 20 || 30 < 15);

// == && - will return first falsy value or the last value.
let a;

a = 10 && 20;
a = 10 && 20 && 30;
a = 10 && 0 && 30;
a = 10 && '' && 0 && 30;

console.log(a);

// For fetch api
const posts = ['Post One', 'Post Two'];
posts.length > 0 && console.log(posts[0]);

// == || - will return the first truthy value or the last value.
let b;

b = 10 || 20;
b = 0 || 20;
b = 0 || null || '' || undefined;

console.log(b);

// == ?? - will return the right side operand when the left is null or undefined;
let c;

c = 10 ?? 20;
c = null ?? 20;
c = undefined ?? 30;
c = 0 ?? 30;
c = '' ?? 30;

console.log(c);