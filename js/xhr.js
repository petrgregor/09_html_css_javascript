// 1. Create a new XMLHttpRequest object
let xhr = new XMLHttpRequest();

// 2. Configure it: GET-request for the URL
xhr.open('GET', './resources/data.txt');

// 3. This will be called after the response is received
xhr.onload = function () {
    if (xhr.status != 200) { // analyze HTTP status of the response
        // alert('Error ${xhr.status}: ${xhr.statusText}'); // e.g. 404: Not Found
        document.getElementById("result").innerText = "Error";
    } else { // show the result
        //alert('Done, got ${xhr.response.length} bytes'); // response is the server
        document.getElementById("result").innerHTML = xhr.responseText;
    }
};

// 4. This will be called on error
xhr.onerror = function () {
    alert("Request failed");
};

// 5. Send the request over the network
xhr.send();
