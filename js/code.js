console.log("Other message displayed on the console");

/*
* víceřádkové komentáře
* */

// jednořádkový komentář
let x;
x = 10;
if (x > 5) {
    // co se stane, když je podmínka splněna
    console.log("x > 5");
} else {
    // co se stane, pokud podmínka splněna není
    console.log("x <= 5");
}

const c = "konstanta";
// c = "jiná hodnota" // nelze změnit hodnot v konstantě

var foo = 10;
foo = "Lorem ipsum";
console.log(foo);

function ab() {
    if (true) {
        var a = 1;
        let b = 2;
    }

    console.log(a);     // prints 1 - "a" is "visible" inside the function
    // console.log(b);     // causes error "b is not defined" - "b" variable is "visible"
                        // in the same block of code where it was declared (if)
}

ab();                   // function call

// console.log(a);         // "a is not defined" error; "a" is "visible" only inside a function

function ab2() {
    let a, b;
    if (true) {
        a = 1;
        b = 2;
    }
    console.log(a);
    console.log(b);
}

ab2();

console.log(myVar);
myVar = "myVar";            // this piece of code is correct
var myVar;            // even though the variable is defined below

console.log(myVar);

var myVar1 = 10;
let myLet1 = 20;

var myVar1 = 15;
//let myLet1 = 30;
myLet1 = 30;


// Global variables

const global = "global const variable";
let global2 = "global let variable";

function test() {
    console.log(global); // I can display the global variable because it is of global scope
}

test();

// nepoužívat české znaky v názvech
let proměnná = 5;
console.log(proměnná);

// Primitive data types
let myString = "My string"
console.log(myString)

let myNumber = 15.5;

let myBool = true;

//console.log(myUndefinedVariable)

let myNullVariable;

// typeof
let myNumber1 = 15;
console.log(typeof myNumber1);
myNumber1 = "patnáct";
console.log(typeof myNumber1);

// instanceof
console.log([] instanceof Array);
console.log([] instanceof Object);

// Arrays
//const array = []; //empty array
const array2 = [1, 2, 3, 4]; //array with 4 numbers
const array3 = ["John", "Jack", "George", "Al"]; //array with 4 string elements
/*
function foo1() {
    console.log("Lorem ipsum");
}

const array = [1, "John", foo1];// 3 elements array

const array = [1, 2, 3, 4];
array[0]; // the first element of the array
array[3]; // the fourth element of the array
*/

// Popular methods

// push - adding a new item to the end of the set

const array1 = [1, 2, 3, 4];
array1.push(5);

console.log(array1);

// pop - deleting the last item, and then returning it
let lastNumber = array1.pop();
console.log(array1);
console.log(lastNumber);

// shift - deleting the first element from the array, and then returning it
let firstNumber = array1.shift();
console.log(array1);
console.log(firstNumber);

// unshift - adding an element to the beginning of the array
array1.unshift(0);
console.log(array1);

// join - combining successive elements into one text
let joined = array1.join();
console.log(joined);

// reverse - reversing array elements
array1.reverse();
console.log(array1);

// sort - sorting array elements
array1.sort();
console.log(array1);

// concat – combining arrays and returning a new joined one
const arrayA = [5, 6, 7, 8];
let concatenated = array1.concat(arrayA);
console.log(concatenated);

// forEach – performing a specific function on each element of the array.
concatenated.forEach(e => {
    console.log(e)
});

concatenated.forEach(i => {console.log(i*i)});

// map – creating a new array containing the results of calling the specified function for each array element.
let squared = concatenated.map(
    function (e) {
        return e*e;
    }
);
console.log(squared);

// includes – checking if the array contains a given element
console.log(squared.includes(64));

// filter – returning a new array with elements that satisfy the test specified in the function.
let filteredNumbers = squared.filter(
    function (e) {
        return e % 2 == 0;
    }
);
console.log(filteredNumbers);

// indexOf – returning the first (smallest) index with a specified value. If -1 is returned, the item is not in the array.
console.log(filteredNumbers.indexOf(16));

// slice – coping a part of the array and returning it as a new array. It takes two arguments - beginning and end. It does not copy the index specified in the latter one.
let slicedArray = filteredNumbers.slice(0,2);
console.log(slicedArray);

// splice – modifying the array by removing elements and adding new ones. If we don't provide new elements, splice will only delete the old ones. It takes the start, the number of removed items, and the added items.
squared.splice(0, 2, 9, 10, 11);
console.log(squared);

// The length property
// It returns the number of elements in an array.
console.log(squared.length);

// JavaScript: Loops
// The for loop
// for (counter_declaration; loop_condition; counter_change)
for (let i = 0; i < 3; i++) {
    console.log("for loop: " + i);
}

// The forEach loop
let array = [1, 2, 3];
array.forEach(function (element, index) {
    console.log("Element with Index: " + index + " has value " + element);
});

// The while loop
let i = 0;
while (i < 3) {
    console.log("While loop: " + i);
    i++;
}

// The do...while loop
i = 0;
do {
    console.log("do ... while loop: " + i);
    i++;
} while (i < 3);

i = 0
console.log("while loop: " + i);
i++;
while (i < 3) {
    console.log("while loop: " + i);
    i++;
}

// Breaking the loop
console.log("Breaking the loop");
i = 0;
while (i < 10) {
    console.log("While loop: " + i);
    i++;
    if (i === 7) {
        break;
    }
}

// Continuation of the loop
console.log("Continuation of the loop");
i = 0;
while (i < 10) {
    if (i === 7) {
        i++;
        continue;
    }
    console.log("While loop: " + i);
    i++;
}