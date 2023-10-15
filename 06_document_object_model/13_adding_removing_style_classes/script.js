const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = itemList.querySelectorAll('li');

function run() {
    // == className
    //text.className = 'card dark'

    // == classList
    //text.classList.forEach((item) => console.log(item));
    // text.classList.add('dark');
    // text.classList.remove('card');
    text.classList.toggle('dark');
    //text.classList.toggle('hidden');
    //text.classList.replace('card', 'dark');

    // == Change style
    //itemList.style.lineHeight = '2';
    items.forEach((item, index) => {
        item.style.color = 'red';

        if (index === 2) {
            item.style.color = 'blue'
        }
    })
}

document.querySelector('button').onclick = run;