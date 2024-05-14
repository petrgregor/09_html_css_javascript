// Creating objects

// literal - by inserting curly braces
/*
const person = {
    firstName = "John",
    lastName = "Smith"
}*/

// object constructor

//const person = new Object();
/*
const person = {};
person.firstName = "John";
person.lastName = "Smith";
*/

// constructor function
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const person = new Person("John", "Smith");


// class keyword
/*
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person = new Person("John", "Smith");
*/

// dot notation - does not allow the use of variables as keys or numbers
console.log(person.firstName + " " + person.lastName);

// bracket notation - allows the use of variables and numbers
console.log(person['firstName'] + " " + person['lastName']);

person.firstName = "Jack";
person['lastName'] = "Wick";
console.log(person.firstName + " " + person.lastName);


