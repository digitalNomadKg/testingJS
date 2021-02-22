// numbers between 1 and 100;
// dividied by 3 fizz
// divided by 5 buzz
// divided by 15 fizzBuzz

var output = [];
var count = 1;

function fizzBuzz() {

  if (count % 3 === 0 && count % 5 === 0) {
    output.push("fizzBuzz");

  } else if (count % 3 === 0) {
    output.push("fizz");

  } else if (count % 5 === 0) {
    output.push("Buzz");
  }
  else {
    output.push(count);
  }
}