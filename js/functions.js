// Function parameters
function sumTwoNumbers(param1, param2) {
    return param1 + param2;
}

let additionResult = sumTwoNumbers(10, 20); // function call
console.log("Result = " + additionResult);

// Function direct declaration
additionResult = (function (a, b) {
    return a + b;
})(10, 20);
console.log("Result = " + additionResult);

// Function expression
const add = function (a, b) {
    return a + b;
}
console.log("Add result = " + add(15, 25));

// Arrow function
const add2 = (a, b) => {
    return a + b;
}
console.log("Add result = " + add2(150, 250));

