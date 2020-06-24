// if stetment conditions

let val;

// if(something){
//   do semothing
// }else{
//   do somethong else
// }




// // equal to
// if (id ==100){
//   console.log('CORRECT')
// }else{
//   console.log('INCORRECT')
// }

// if(id !=101){
//   console.log('CORRECT')
// }else{
//   console.log('INCORRECT')
// }


// //equal to value and type
// if (id === 100){
//   console.log('CORRECT')
// }else{
//   console.log('INCORRECT')
// }


// if(id !==100){
//   console.log('CORRECT')
// }else{
//   console.log('INCORRECT')
// }

// // test if undefined
// if(typeof id !== 'undefined'){
//   console.log(`the ID is ${id}`);
// }else{
//   console.log('No ID');
// }

//<> than
// if(id >= 200){
//   console.log('CORRECT')
// } else{
//   console.log('INCORRECT')
// }

//if else

// const color = 'yellow';

// if(color === 'red'){
//   console.log('Color is red');
// }else if(color === 'blue'){
//   console.log('Color is blue');
// }else{
//   console.log('Color is not red or blue');
// }

//logical operators
const name = ' Steve';
const age = 22;

if( age<=5){
  console.log(`${name} is a baby`)
}
else if(age>5 && age<13){
  console.log(`${name} is a child`);
}else if(age >= 13 && age <=19){
  console.log(`${name} is a teenager`);
}else{
  console.log (`${name} is an adult`);
}


// ternary operator
const id = 100;
console.log(id===100 ? 'CORRECT':'INCORRECT');