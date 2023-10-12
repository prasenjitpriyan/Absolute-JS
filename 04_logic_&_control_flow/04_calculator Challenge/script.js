const calculator = (num1, num2, operator) => {
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;

        default: result = 'Invalid Operator'
            break;
    }
    return result
}

console.log(calculator(5, 2, '+'));
