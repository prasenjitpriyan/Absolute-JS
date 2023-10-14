const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];

//console.log(socials.__proto__);
socials.forEach((item, index, arr) => {
    console.log(`${index} - ${item}`, arr);
});


// == Another way;

function logSocials(item) {
    console.log(item);
};
socials.forEach(logSocials)


// == In object

const socialObject = [
    { name: 'Twitter', url: 'https://twitter.com' },
    { name: 'Facebook', url: 'https://facebook.com' },
    { name: 'Linkedin', url: 'https://linkedin.com' },
    { name: 'Instagram', url: 'https://instagram.com' },
];

socialObject.forEach((item) => console.log(item.name));