function removeClearButton() {
    const clearBtn = document.querySelector('#clear');
    clearBtn.remove()
}
//removeClearButton()

function removeFirstItem() {
    const ul = document.querySelector('ul');
    const li = document.querySelector('li:first-child');

    ul.removeChild(li)
};
//removeFirstItem()

// ==================================

function removeItem(item) {
    const ul = document.querySelector('ul');
    const li = document.querySelectorAll('li')[item - 1];

    ul.removeChild(li)
}
//removeItem(3)

function removeItem2(item) {
    const ul = document.querySelector('ul');
    const li = document.querySelector(`li:nth-child(${item})`);

    ul.removeChild(li)
}
//removeItem2(1)

function removeItem3(item) {
    const li = document.querySelectorAll('li');
    li[item - 1].remove()
}
//removeItem3(1)

const removeItem4 = (item) => document.querySelectorAll('li')[item - 1].remove();
removeItem4(1)
