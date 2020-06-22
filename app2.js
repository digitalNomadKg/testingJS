//Template literals

const name = 'John';
const age = 30;
const job = 'software developer';
const city = 'Tallinn';

let html;

//witohut template strings (es5)

// html = '<ul><li>Name: '+name+'</li><li>Age: '+age+'</li><li>Job: '+job+'</li><li>City: '+city+'</li></ul>';


// html = '<ul>' +
// '<li>Name: '+name+'</li>'+
// '<li>Age: '+age+'</li>'+
// '<li>Job: '+job+'</li>'+
// '<li>City: '+city+'</li>'+
// '</ul>';

function hello(){
  return 'hello world';

}

// with template strings(es6) mostly used

html = `
<ul>
<li>Name: ${name} </li>
<li>Age: ${age} </li>
<li>Job: ${job} </li>
<li>City: ${city} </li>
<li>${2+2}</li>
<li>${"this is test"}</li>
<li>${hello()}</li>
<li>${age>50? 'Over the 30': 'under the 30'}</li>
</ul>
`;

document.body.innerHTML=html; 