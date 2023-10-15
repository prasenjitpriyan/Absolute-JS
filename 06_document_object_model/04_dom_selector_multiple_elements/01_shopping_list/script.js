// == querySelectorAll() 

const listItem = document.querySelectorAll('.item');
console.log(listItem[1].innerText);

// // == Single list Item style
// listItem[1].style.color = 'red';

// // == All list item style
// listItem.forEach((item, index) => {
//     item.style.color = 'red';

//     if (index === 1) {
//         item.remove()
//     }

//     if (index === 0) {
//         item.innerHTML = `Oranges 
//         <button class="remove-item btn-link text-red">
//                     <i class="fa-solid fa-xmark"></i>
//                 </button>`
//     }
// })

const listItems2 = document.getElementsByClassName('item');
console.log(listItems2[2].innerText);

const listItemsArray = Array.from(listItems2);
listItemsArray.forEach((item) => {
    console.log(item.innerText);
})

const listItems3 = document.getElementsByTagName('li');
console.log(listItems3[0].innerText);