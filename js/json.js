var person = {
    name: "John",
    surname: "Doe"
}

var strJSON = JSON.stringify(person);
console.log(strJSON);

var personCopy = JSON.parse(strJSON);
console.log(personCopy);
