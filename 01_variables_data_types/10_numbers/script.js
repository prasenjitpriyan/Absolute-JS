let x;
const number = new Number(50.34567);

x = number.toString();
x = number.toString().length;
x = number.toFixed(2);
x = number.toPrecision(3);
x = number.toExponential(2)
x = number.toLocaleString('bn-IN')
x = number.valueOf();

x = Number.MAX_VALUE;
x = Number.MIN_VALUE;

console.log(x);