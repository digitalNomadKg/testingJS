// //to declare variables
// // var, let, 
// // const (used mostly constant )

// // var name = ' John Doe';
// // console.log(name);
// // name = 'Steve Smith';
// // console.log(name);

// // //initializng variable

// // var greeting;
// // console.log(greeting);
// // greeting = 'Hello world';
// // console.log(greeting);
// // //reaasigning
// // greeting = 'Fucck the covid-19';
// // console.log(greeting);

// // var firstName = 'Tim'; //camel case
// // var first_name = 'Sarah'; //underscore
// // var FirstName = 'John'; //pascal case //oop will be used fro the obejct


// // //let
// // let name = ' John Doe';
// // console.log(name);
// // name = 'Steve Smith';
// // console.log(name);
  
// // //find type of varible
// // const surname = 'tim';
// // console.log(typeof name);

// // //refrence type -- objects
// // //array

// // var hobbies = ['skiing', 'music','killingBugs'];
// // console.log(hobbies);
// // console.log(typeof hobbies);



// //type conversion

// let val;
// val = String(555);
// val = String(4+4+5);

// //boolean to string
// val = String(true);

// //date to string
// val = String(new Date());

// //array to string
// val =String([1,2,3,4,5]);

// //toString()
// val = (4).toString();
// val = (true).toString();


// //String to number
// val = Number('10');
// val = Number(true);
// val = Number (false);
// val = Number(null);
// val = Number('Hello'); //result will be NaN
// val = Number([1,2,3,4]) //result will be NaN

// val = parseInt('100.30');
// val = parseFloat('103.30');


// // //output
// // console.log(val);
// // console.log(typeof val);
// // // console.log(val.length);
// // console.log(val.toFixed(2));

// // //tofixed(show decimals)


// //type coercion
// const num1 = String('5');
// const num2 = String ('6');
// const sum = num1+num2;


// console.log(sum);
// console.log(typeof sum);


// const num1 = 100;
// const num2 = 63;

// let sum;

// //simple math with numbers
// sum = num1 + num2;
// console.log(sum)

// sum = num1 * num2;
// console.log(sum)

// sum = num1 - num2;
// console.log(sum)

// sum = num1 % num2;
// console.log(sum)

// sum = num1 / num2;
// console.log(sum)

// //Math Object

// sum = Math.PI;
// console.log(sum);

// sum = Math.E;
// console.log(sum);

// sum = Math.round(2.6)
// console.log('round value for 2.6 is: '+sum);

// sum = Math.round(2.4)
// console.log('round value for 2.4 is: '+sum);

// sum = Math.floor(2.6);
// console.log('floor value of 2.6 is: '+sum);

// sum = Math.sqrt(64);
// console.log(sum)

// sum = Math.abs(-10);
// console.log(sum)

// sum = Math.pow(5,4);
// console.log(sum)

// sum = Math.max(2,5);
// console.log('max value is: ' + sum)

// sum = Math.min(3,1,5,25, -2, -2, 0);
// console.log('min value is:  ' + sum)

// sum =  Math.random();
// console.log(sum)

// sum = Math.floor(Math.random() * 20+1);
// console.log(sum);

// console.log(' ');


// String concateation

const firstName = 'Timati';
const lastName = 'Kirves';
const age = 33;
const text = 'Hello world this world is being crazy';

let result;

//Concatenation
result = firstName + ' ' + lastName;
console.log(result);

//Append
result = 'Brad ';
result += 'Traversy';
console.log(result);

result = 'Hello, my name is ' + firstName + ' and I am ' + age + ' years old.';
console.log(result);

// Escaping
result = "that's awesome, I can't wait";
console.log(result);

//Lenght method
result = firstName.length;
console.log(result);

// concat method
result = firstName.concat(' ', lastName);
console.log(result);

//change case
result = firstName.toLocaleUpperCase();
console.log(result);

result = lastName.toLocaleLowerCase();
console.log(result);

result = firstName[2];
console.log(result);

result = firstName.charAt('1');
console.log(result);

// get last char
result = firstName.charAt(firstName.length -1);
console.log(result);

//get substring
result = firstName.substring(0,4);
console.log(result);

//slice
result = firstName.slice(0,5);
console.log(result);

//split
result = text.split(' ');
console.log(result);

//replace
result = text.replace('world', 'Manas');
console.log(result);

//includes
result = text.includes('fizzBUzz');
console.log(result);


