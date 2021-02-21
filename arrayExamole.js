// User entering the name
//System checking the name/ array of names.
// if user in the list, welcome, if not, sorry next time

function nameCheck() {
  var getName = prompt("Please enter the name to check");
  var nameList = ["Timur", "Manas", "Asyl", "Miku", "Emir"];

  if (nameList.includes(getName)) {
    alert("Welcome " + getName);
  } else {
    alert("Sorry " + getName + " next time");
  }
}

nameCheck();



