//------Convert a string to a number-----//
let amount = '100';

amount = parseInt(amount);
amount = +amount;
amount = Number(amount)

//console.log(Number);
console.log(amount, typeof amount);

//------Convert string to decimal------//
let temperature = '98.4';
//temperature = parseInt(temperature);
temperature = parseFloat(temperature)

console.log(temperature, typeof temperature);


//------Convert a number to a string------//
let price = 100;
price = price.toString();
price = String(price)

//console.log(toString);
console.log(price, typeof price);

//------Convert Number to boolean------//
let priceTag = -1;
priceTag = Boolean(priceTag);

console.log(priceTag, typeof priceTag);

