const colorObject = {
    color1: 'red',
    color2: 'blue',
    color3: 'orange',
    color4: 'green',
};
for (const key in colorObject) {
    console.log(key, colorObject[key]);
}

const colorArray = ['red', 'blue', 'orange', 'green'];
for (const color in colorArray) {
    console.log(color);
}
for (const key in colorArray) {
    console.log(colorArray[key]);
}