const clearBtn = document.querySelector('#clear');

// clearBtn.onclick = function () {
//     alert('Clear Items')
// };

// == addEventListener();
// clearBtn.addEventListener('click', () => alert('Clear Items'));
// clearBtn.addEventListener('click', () => console.log('Clear Items'));

// function onClear() {
//     const itemList = document.querySelector('ul');
//     itemList.innerHTML = '';
// };
// clearBtn.addEventListener('click', onClear);

function onClear() {
    const itemList = document.querySelector('ul');
    const items = itemList.querySelectorAll('li');

    items.forEach((item) => item.remove());
};
clearBtn.addEventListener('click', onClear);

//setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);
//setTimeout(() => clearBtn.click(), 5000);

