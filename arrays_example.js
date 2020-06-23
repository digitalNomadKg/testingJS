// Testing arrays

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


// //Mutating arrays with methods, functions
// //add on the end
// numbers.push(250);
// // add on to front
// numbers.unshift(1452);
// //take off from the end
// numbers.pop();
// // take of from the from
// numbers.shift();
// // splice values
// numbers.splice(1,1);
// // Reverse
// numbers.reverse();

// // concatenate
// val =numbers.concat(numbers2)

//Sorting arrays
val = fruits.sort();
// val = numbers.sort();

// // use the "compare funcltiuon"
// val = numbers.sort(function(x,y){
//   return x-y;
// });

// //reverse sort
// val = numbers.sort(function(x,y){
//   return y-x;
// });

//find
function under50(num){
  return num <50;
}
val = numbers.find(under50);

function over50(num){
  return num >50;
}
val = numbers.find(over50);


console.log(numbers);
console.log(val);

