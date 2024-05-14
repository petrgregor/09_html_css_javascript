let elementById = document.getElementById("id-name");

let elementsByClassName = document.getElementsByClassName("class-name");

let elementsByTagName = document.getElementsByTagName("p");

// returns only first found
let elementByQuerySelector = document.querySelector(".class-name");
// returns the array of all found
let elementsByQuerySelector = document.querySelectorAll(".class-name");


// createElement(typ) - creates an HTML element
let elementDiv = document.createElement("div");

// appendChild(element) - adds an item as the last child of the parent

let parent = document.getElementById("parent-div");
let child = document.createElement("div");

parent.appendChild(child);
let newParagraph = document.createElement("p");
child.appendChild(newParagraph);

// removeChild(element) - removes the child of a given element
//child.removeChild(newParagraph);

// innerHTML - is used to obtain and set the HTML code in a given element

document.getElementById("id-name").innerHTML = "<p>Set the html code on the element</p>";

let text = document.getElementById("id-name").innerHTML; // returns the HTML of the children in the element
console.log(text);

// innerText - is used to obtain and set the text in an element

document.getElementById("id-name").innerText = "Set the text in the element";

text = document.getElementById("id-name").innerText; // returns the text of the children in the element
console.log(text);

//classList API
console.log(document.getElementById("id-name").classList);
console.log(document.getElementById("id-name").classList.contains("class-name"));

// add – adds one or more classes to the element’s class list
document.getElementById("id-name").classList.add("new-class-name");
console.log(document.getElementById("id-name").classList);

// remove - removes one or more classes from the element’s class list
document.getElementById("id-name").classList.remove("blue-colored")
console.log(document.getElementById("id-name").classList);
