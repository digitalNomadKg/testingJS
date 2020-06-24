let val;

const today  = new Date();
let birthday =  new Date('4-25-1987 11:25:00');
birthday =  new Date('September 10 1981');
val= today;

val= today.getFullYear();
val = today.getDate();
val =today.getDay();
val =  today.getHours();
val =today.getMinutes();
val = today.getMilliseconds();
val = today.getSeconds();
val =today.getUTCFullYear();
val =today.getTime();

console.log(val);


birthday.setMonth(4);
birthday.setDate(12);
birthday.setFullYear(1987);
birthday.setHours(18);
birthday.setMinutes(30);
birthday.setSeconds(55); 


console.log(birthday);