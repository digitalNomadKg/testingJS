
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
// const li  = document.createElement('li');
// //creating class
// li.className = 'collection-item';
// //Add id
// li.id = 'new-item';
// //Add attribute
// li.setAttribute('title', 'New Item');
// // Create text node and append
// li.appendChild(document.createTextNode('Hello World'));
// // Create new link element
// const link = document.createElement('a');
// link.className = 'delete-item secondary-content';
// link.innerHTML = '<i class="fa fa-remove"></i>';
// li.appendChild(link);
// // Append li as a child to ul 
// document.querySelector('ul.collection').appendChild(li);


// console.log(link);
// console.log(li)

// console.log( ' ')

// // Div element example
// const div = document.createElement('div');
// div.className = 'new-item';
// div.id= 'footer';


// console.log(div);

// REMOVING and REPLACING ELEMENTS

// REPLACE ELEMENT

// // Create Element
// const newHeading = document.createElement('h2');
// // Add id
// newHeading.id = 'task-title';
// // New text node
// newHeading.appendChild(document.createTextNode('Task List'));

// // Get the old heading
// const oldHeading = document.getElementById('task-title');
// //Parent
// const cardAction = document.querySelector('.card-action');

// // Replace
// cardAction.replaceChild(newHeading, oldHeading);

// // REMOVE ELEMENT
// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// // Remove list item
// lis[0].remove();

// // Remove child element
// list.removeChild(lis[3]);

// // CLASSES & ATTR
// const firstLi = document.querySelector('li:first-child');
// const link = firstLi.children[0];

// let val;

// // Classes
// val = link.className;
// val = link.classList;
// val = link.classList[0];
// link.classList.add('test');
// link.classList.remove('test');
// val = link;

// // Attributes
// val = link.getAttribute('href');
// val = link.setAttribute('href', 'http://google.com');
// link.setAttribute('title', 'Google');
// val = link.hasAttribute('title');
// link.removeAttribute('title');
// val = link;

// console.log(val);

//EVENT LISTENER and THE EVENT OBJECT
// document.querySelector('.clear-tasks ').addEventListener('click', function(e){
//   console.log('Hello world');
//   // e.preventDefault();
// });


// document.querySelector('.clear-tasks ').addEventListener('click', onClick);
// function onClick(e){
//   console.log('Clicked' );
// }




