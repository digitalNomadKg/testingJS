
// console.log(document.getElementById('body'));
// console.log('Hello World');

// const items = document.getElementsByClassName('collection-item');
// console.log(items);

// let val;

// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item:first-child');
// val=listItem;
// val= list;

// //Get child nodes
// val = list.childNodes;
// val =list.childNodes[0];
// val = list.childNodes[1].nodeName;
// val = list.childNodes[3].nodeType;

// // 1- Element
// // 2 - Attribute (depricated)
// // 3 - Text node
// // 8 - Comment
// // 9 - Documnet itself
// // 10 - Doctype


// //Get childen element nodes
// val = list.children;
// val = list.children[0];
// val = list.children[0].textContent='Hello world';

// //Children of children

// list.children[3].children[0].id='test-link';
// val = list.children[3].children[0];

// //First child 
// val= list.firstChild;
// val= list.firstElementChild;

// //Last child
// val = list.lastChild;
// val= list.lastElementChild;

// //Count child elements
// val= list.childElementCount;

// //Get parent node
// val = listItem.parentNode;
// val= listItem.parentElement;
// val= listItem.parentElement.parentElement;

// //Get next sibling
// val= listItem.nextSibling;
// val= listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// //Get prev sibling
// val= listItem.previousSibling;
// val= listItem.previousElementSibling;
// console.log(val);



//CREATING ELEMENT
const li  = document.createElement('li');
//creating class
li.className = 'collection-item';
//Add id
li.id = 'new-item';
//Add attribute
li.setAttribute('title', 'New Item');
// Create text node and append
li.appendChild(document.createTextNode('Hello World'));
// Create new link element
const link = document.createElement('a');
link.className = 'delete-item secondary-content';
link.innerHTML = '<i class="fa fa-remove"></i>';
li.appendChild(link);
// Append li as a child to ul 
document.querySelector('ul.collection').appendChild(li);


console.log(link);
console.log(li)

console.log( ' ')

// Div element example
const div = document.createElement('div');
div.className = 'new-item';
div.id= 'footer';


console.log(div);

// REMOVING and REPLACING ELEMENTS



