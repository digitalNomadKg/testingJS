// Example of String Casing Name

var greeting = prompt("Please enter your name");

var firstChar = greeting.slice(0,1).toUpperCase();
var lastChar  = greeting.slice(1,greeting.length).toLowerCase();

var fullName = firstChar+lastChar;

alert("Hello " + fullName);
