// ========== Falsy Values ========== //

// == false;
// == 0;
// == "" or '' (Empty string);
// == null
// == undefined
// == NaN

// ========== Truthy Values ========== //

// == Everything else that is not falsy;
// == true;
// == '0' (0 in a string);
// == ' ' (spaces in a string);
// == 'false' (false in a string);
// == [] (empty array);
// == {} (empty object);
// == function () {} (empty function)

const x = false;

if (x) {
    console.log('This is truthy');
} else {
    console.log('This is falsy');
};

console.log(Boolean(x));

// ============== Truthy and falsy caveats ==================//

const children = 3;

if (!isNaN(children)) {
    console.log(`You have ${children} children`);
} else {
    console.log('Please enter number of children');
};

// =========== Checking for empty arrays ====================//

const post = ['Post One']

if (post.length > 0) {
    console.log('List Posts');
} else {
    console.log('No Posts to list');
}

// =========== Checking for empty objects ====================//

const user = {
    name: 'Prasenjit'
};

if (Object.keys(user).length > 0) {
    console.log('List user');
} else {
    console.log('No user');
}

// ================ Loose Equality (==) ===================//

console.log(false == 0);
console.log(false === 0);

console.log('' == 0);
console.log('' === 0);

console.log(null == undefined);
console.log(null === undefined);