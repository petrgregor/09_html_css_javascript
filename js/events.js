function displayText() {
    console.log("The button was clicked");
    document.getElementById("id-button").removeEventListener('click', displayText);
}

function displayText2() {
    console.log("The button was double clicked");
}

function mouseoverEvent() {
    console.log("Mouseover event")
}

document.getElementById("id-button").addEventListener('click', displayText);
document.getElementById("id-button").addEventListener('dblclick', displayText2);
document.getElementById("id-button").addEventListener('mouseover', mouseoverEvent);
