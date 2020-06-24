// for, while, do while

// //FOR loop-- mostly used for defined iterations

//  for(let i =0; i<=10; i++){
//   if(i === 2){
//     console.log('2 is my favourite number')
//     continue;
//   }else if(i%2){
//     console.log(i + ' it is odd number');
//     continue;
//   }
// console.log('Number is ' + i);
//  }


//  // while loop --used for undefined iterations
//  let i=0;
//  while(i<=10){
//    console.log('Number ' + i)
//    i++;
//  }


//  //DO WHILE
//  let i = 0;
//  do{
//   console.log('Number ' + i);
//   i++;
//  }
//  while(i<=10);


// //LOOP through ARRAY
// const cars  = ['Ford', 'Honda', 'Toyota', 'Mercedes-Benz'];
// // for(let i=0; i<cars.length; i++){
// //   console.log(i +' '+cars[i]);
// // }

// //FOREACH method
// cars.forEach(function(car){
//   console.log(car);
// });

//MAP
const users = [
  {id:1, name: 'John', lastName: 'Kirves', age:33},
  {id:2, name: 'Sara', lastName:'Brooklyn', age: 25},
  {id:3, name: 'Karen', lastName: 'Bronx', age:32},
  {id:4, name: 'Tim', lastName: 'Balta', age: 55}
];

const ids = users.map(function(user){
return user.id;
});

const names = users.map(function(userName){
  return userName.name;
});

const lastNames = users.map(function(userLastName){
  return userLastName.lastName;
});



console.log(ids);
console.log(names);
console.log(lastNames);


