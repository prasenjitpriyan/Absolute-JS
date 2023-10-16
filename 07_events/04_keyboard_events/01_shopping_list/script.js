const itemInput = document.getElementById('item-input');

const onKeyPress = (e) => {
    console.log('Keypress');
}

const onKeyUp = (e) => {
    console.log('Keyup');
}

// const onKeyDown = (e) => {
//     console.log('Keydown');
// }

const onKeyDown = (e) => {
    // == key
    if (e.key === 'Enter') {
        alert('You pressed enter')
    };
    // == keyCode
    // == https://www.toptal.com/developers/keycode/table-of-all-keycodes
    if (e.keyCode === 13) {
        alert('you pressed enter')
    }

    // == code
    if (e.code === 'Digit1') {
        console.log(('You pressed 1'));
    }

    // == repeat
    if (e.repeat) {
        console.log('You are holding down ' + e.key);
    }

    console.log('Shift: ' + e.shiftKey);
    console.log('Control: ' + e.ctrlKey);
    console.log('Alt: ' + e.altKey);

    if (e.shiftKey && e.key === 'K') {
        console.log('You hit shift + K');
    }
}

itemInput.addEventListener('keypress', onKeyPress);
itemInput.addEventListener('keyup', onKeyUp);
itemInput.addEventListener('keydown', onKeyDown);
