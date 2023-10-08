let date;
date = new Date();
console.log(date, typeof date);

// convert date to string
date = date.toString();

let d
d = new Date(2021, 0, 10, 12, 30, 0);
d = new Date('2021-07-10T12:30:00');
d = new Date('07/10/2021 12:30:00');
d = new Date('2021-07-10');
d = new Date('07-10-2021')

d = Date.now();

d = new Date();
d = d.getTime();
d = d.valueOf();

d = new Date(1696780365321);

d = Math.floor(Date.now() / 1000);

console.log(d);