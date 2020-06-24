//Object literals

const person  = {
  firstName: 'Tim',
  lastName: 'Kirves',
  age: 30,
  email: 'test@test.com',
  hobbies: ['music', 'baseball'],
  address:{
    city: 'Tallinn',
    state: 'EE'
  },
  getBirhtYear: function(){
    return 2017- this.age;
  }
}

let val;
val=person;
//Get specific value
val = person.firstName;
val = person.lastName;
val = person.age;
val = person.hobbies;
val= person.address.state;
val =  person.address.city;
val = person.getBirhtYear();

console.log(val);

const people = [
  {name: 'Tim', age: 30},
  {name: 'Mike', age: 45},
  {name: 'Nancy', age: 40}
];

for(let i=0; i<people.length; i++){
  console.log(people[i].name);
}

