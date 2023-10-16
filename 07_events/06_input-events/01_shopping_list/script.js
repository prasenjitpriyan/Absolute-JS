const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');
const heading = document.querySelector('h1');

function onInput(e) {
    //console.log(e.target.value);
    heading.textContent = e.target.value
};

function onFocus() {
    console.log('Input is focused');
    itemInput.style.outlineStyle = 'solid';
    itemInput.style.outlineWidth = '5px';
    itemInput.style.outlineColor = 'green'
}

function onBlur() {
    console.log('Input is not focused');
    itemInput.style.outlineStyle = 'none';
}

function onChecked(e) {
    //console.log(e.target.checked);
    const isChecked = e.target.checked;
    heading.textContent = isChecked ? 'Checked' : 'Not Checked';
}


itemInput.addEventListener('input', onInput);
itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);
priorityInput.addEventListener('change', onInput);
checkbox.addEventListener('input', onChecked);