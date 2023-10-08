let x;
const name = 'Prasenjit';
const age = '36';
x = 'Hello my name is ' + name + ' and I am ' + age + ' years old';
console.log(x);

//Template Literals
x = `Hello my name is ${name} and I am ${age} years old`;
console.log(x);

//String properties and methods
const s = 'Hello World!';
//dot length is a property. so we don't add the parenthesis methods.
//methods are more like function but properties are more like attributes.
//x = s.length;
x = typeof s;
console.log(x);

//String as Object
const st = new String('Hello World');
y = typeof st;
y = st.length;

//Access value by key
y = st[0];
y = st.__proto__;
y = st.toUpperCase();
y = st.toLowerCase();
y = st.charAt(0);
y = st.indexOf('H');
y = st.substring(0, 5);
y = st.substring(7);
y = st.slice(-11, -6);
//Remove white spaces with trim()
y = st.trim();
y = st.replace('World', 'Dhriti');
//To find particular word use includes()
y = st.includes('Hell');
y = st.split('')
console.log(y);