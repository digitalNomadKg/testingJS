// control struction- function
//3 types of functions

// //Function declaration
function greet(firstName = 'Steve', lastName = 'Kira'){
  // console.log('Hello');
return 'Hello ' + firstName + ' ' + lastName;

}
console.log(greet());


// // //function expressions
// const square = function(i){
// return i*i;
// };

// console.log(square(5))

//IIFEs Immidiately invokable function expression
//will be used in design patterns

(function(){
  console.log('IIFE ran...');
})();



(function(name){
  console.log('Hello '+ name);
})('Tim Kirves');

//PROPERTY METHODS

const todo = {
  add: function(name = 'Tim') {
    console.log('Add todo..' +  name);
  },
  edit: function(id){
    console.log(`Edit todo ${id}`);
  }

}

todo.delete=function(){
  console.log('Delete todo...');
}

todo.add();
todo.edit(25);
todo.delete();
