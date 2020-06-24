//WINDOW METHODS/ OBJECTS/ PROPERTIES


// //ALERT
// alert('Hello World');

// //PROMPT
// const input = prompt('Please enter text: ');
// alert(input);

// //CONFIRM
// if(confirm('Are you sure')){
//   console.log('YES');
// }else{
//   console.log('NO');
// }

let val;

// //Outter height and width
// val = window.outerHeight;
// val = window.outerWidth;

//Inner height and width
val = window.innerHeight;
val = window.innerWidth;

//Scroll points
val = window.scrollY;

//Location Object
val = window.location;
val = window.location.port;
val = window.location.protocol;
val = window.location.href;
val = window.location.hostname;
val = window.location.pathname;
val = window.location.search;

// //Redirct 
// window.location.href= 'https://google.com';

// // Reload
// window.location.reload();

// //History Object
// window.history.go(-3);

//History lenght
val =  window.history.length;

//Navigator object
val = window.navigator;
console.log(val);
val = window.navigator.appName;
console.log(val);
val = window.navigator.appVersion;
console.log(val);
val = window.navigator.userAgent;
console.log(val);
val = window.navigator.platform;
console.log(val);
val = window.navigator.vendor;
console.log(val);
val = window.navigator.language;
console.log(val);
val = window.navigator.languages;

console.log(val);