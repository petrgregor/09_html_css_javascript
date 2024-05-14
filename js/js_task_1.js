// Task a: 2 numerical variables on which you will perform basic mathematical operations
//  and display the results of these operations on the console, each on a separate line,
let num1 = 20;
let num2 = 10;
console.log(num1 + " + " + num2 + " = " + (num1+num2));
console.log(num1 + " - " + num2 + " = " + (num1-num2));
console.log(num1 + " * " + num2 + " = " + num1*num2);
if (num2 !== 0) {
  console.log(num1 + " / " + num2 + " = " + num1/num2);
} else {
  console.log("ERROR: division zero");
}

// Task b: you will use the if else conditional statement to tell the console
//  which number is greater and which is less,
let lower;
let higher;
if (num1 > num2) {
  console.log("Greater: " + num1 + ", less: " + num2);
  lower = num2;
  higher = num1;
} else if (num1 < num2) {
  console.log("Greater: " + num2 + ", less: " + num1);
  lower = num1;
  higher = num2;
} else {
  console.log("Numbers are same: " + num1);
  lower = num1;
  higher = num2;
}

// Task c: you will use a for loop to calculate the sum of all numbers
//  from lower to higher (inclusive) and display the obtained sum on the console,
let result = 0;
for (let i = lower; i <= higher; i++) {
  result += i;
}
console.log("Sum of all numbers from " + lower + " to " + higher + " is " + result);

// Task d: you will write the function showSum, which will take two numbers
//  and based on the previous algorithm will display the obtained sum in a dialog window (alert),
const showSum = (a, b) => {
  let lower = a;
  let higher = b;
  if (a > b) {
    lower = b;
    higher = a;
  }
  let result = 0;
  for (let i = lower; i <= higher; i++) {
    result += i;
  }
  alert("Sum of all numbers from " + lower + " to " + higher + " is " + result);
  return result;
}
//alert("Sum of all numbers from " + lower + " to " + higher + " is " + showSum(num1, num2));

// Task e: you call the function showSum on a set of 3 different pairs of values.
let numbers = [[0, 10], [11, 20], [21, 30]];
for (let i = 0; i < numbers.length; i++) {
  console.log("Sum of all numbers from " + numbers[i][0] + " to " + numbers[i][1] + " is " + showSum(numbers[i][0], numbers[i][1]));
}
numbers.forEach(pair => {
  console.log("Sum of all numbers from " + pair[0] + " to " + pair[1] + " is " + showSum(pair[0], pair[1]));
});

// TODO: Bonus task: Write all these results to html using DOM.
