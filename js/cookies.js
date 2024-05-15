// add
document.cookie = "nick=John Doe";
// add another one
document.cookie = "phone=999999999";
// ATTENTION! Contrary to intuition, the above line
// will NOT cause the "nick" cookie to be removed!

var cookieStr = document.cookie;
// 'nick=John Doe; phone=999999999' string
// will be written to the cookieStr variable
console.log(cookieStr);

// js-cookie library
// set the cookie:
Cookies.set("key", "value");
Cookies.set("name", "value", {expires: 7, path: ""});

// get the value by key:
let cookieKey = Cookies.get("key");             // returns "value"
console.log(cookieKey);
Cookies.get("nothing in here"); // returns undefined

// get all cookies as an object:
let cookies = Cookies.get();                  // returns {key: "value"}
console.log(cookies);

// localStorage
// store data
localStorage.setItem("someKey", "someValue");
localStorage.someKey = "someValue";     // both lines do the same

// read data
let cookieSomeKey = localStorage.getItem("someKey");
localStorage.someKey;               // both lines do the same
console.log(cookieSomeKey);

// remove
localStorage.removeItem("someKey");
cookieSomeKey = localStorage.getItem("someKey");
console.log(cookieSomeKey);

//sessionStorage
sessionStorage.setItem("sessionKey", "sessionValue");
sessionStorage.sessionKey2 = "sessionValue2";

let sessionKey = sessionStorage.sessionKey2;
console.log(sessionKey);
