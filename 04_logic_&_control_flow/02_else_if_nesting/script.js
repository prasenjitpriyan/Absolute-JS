const d = new Date(10, 30, 2023, 6, 0, 0);
const hour = d.getHours();

if (hour < 12) {
    console.log('Good Morning');
} else if (hour < 18) {
    console.log('Good Afternoon');
} else {
    console.log('Good night');
}

// == Nested If

if (hour < 12) {
    console.log('Good Morning');
    if (hour === 6) {
        console.log('Wake Up!');
    }
} else if (hour < 18) {
    console.log('Good Afternoon');
} else {
    console.log('Good night');
    if (hour >= 20) {
        console.log('zzzzzzzzzz');
    }
}

// == logical and && also logical or ||

if (hour >= 7 && hour < 15) {
    console.log('It is work time');
};

if (hour === 6 || hour === 20) {
    console.log('Brush your teeth');
}