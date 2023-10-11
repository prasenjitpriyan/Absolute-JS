let x = 100;
let y = 50;
function getSum(n1, n2) {
    let sum = n1 + n2;
    return sum
};
let sum1 = getSum(x, y);
let sum2 = getSum(10, 5);

// == Creation Phase 
// == Line 1: x variable is allocated memory and stores "undefined";
// == Line 2: y variable is allocated memory and stores "undefined";
// == Line 3: getSum() function is allocated memory and stores all the code;
// == Line 7: sum1 variable is allocated memory and stores "undefined";
// == Line 8: sum2 variable is allocated memory and stores "undefined";

// == Execution Phase
// == Line 1: Places the value of 100 into x variable;
// == Line 2: Places the value of 50 into the y variable;
// == Line 3: Skips the function because there is nothing to execute;
// == Line 7: Invokes the getSum() function and creates a new function execution context;


// == Function EC Creation Phase
// == Line 3: n1 & n2 variables are allocated memory and stores "undefined";
// == Line 4: sum variable is allocated memory and stores "undefined";

// == Function EC Execution Phase
// == Line 3: n1 & n2 are assigned 100 and 50;
// == Line 4: Calculation is done and 150 is put into the sum variable;
// == Line 5: return tells the function EC to return to the global EC with value of sum (150);
// == Line 7: Returned sum value is put into the sum1 variable;
// == Line 8: Open another function execution context and do the same thing with different parameters;
