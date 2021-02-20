// User entering the name
//System checking the name/ array of names.
// if user in the list, welcome, if not, sorry next time

var getName = prompt("Please enter the name to check");

const nameList = ["Timur", "Manas","Asyl", "Miku", "Emir"];

if(getName===nameList){
  alert("welcome " + getName);
}else{
  alert("Sorry next time");
}
