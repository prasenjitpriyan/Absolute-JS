let x;
let d = new Date();

x = d.toString();
x = d.getTime();
x = d.valueOf();

x = d.getFullYear();
x = d.getMonth() + 1;
//Date of the month
x = d.getDate();
//Date of the Week
x = d.getDay();


//Time
x = d.getHours();
x = d.getMinutes();
x = d.getSeconds();
x = d.getMilliseconds();

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

//Intl.DateTimeFormat is a modern and power full way to format dates in a local sensitive way
//Because of different places they interpret dated and times in different ways

x = Intl.DateTimeFormat('bn-IN').format(d);
x = Intl.DateTimeFormat('default').format(d);

x = Intl.DateTimeFormat('default', { month: 'long' }).format(d);
x = d.toLocaleString('default', { month: 'short' });

x = d.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minutes: 'numeric',
    second: 'numeric',
    timeZone: 'Indian/Christmas'
})

console.log(x);