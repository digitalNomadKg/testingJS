const numbers = [1,2,13,45,457];
const numbers2 = new Array(22,4,4,5,7,7,66,7);
const fruits = ['apple','banana','oranges', 'pear'];
const mixed = [22, 'Hello', true, undefined,null, {a:1, b:1}, new Date()];


let val;
//lenght 
val = numbers.length;
//check if smt an array
val = Array.isArray(numbers); 
//get single value
val = numbers[3];
// insert into array
numbers[3]= 100;
// find index of the value
val = numbers.indexOf(457);


//Mutating arrays with methods, functions
//add on the end
numbers.push(250);
// add on to front
numbers.unshift(1452);
//take off from the end
numbers.pop();
// take of from the from
numbers.shift();
// splice values
numbers.splice(1,1);



console.log(numbers);
console.log(val);

