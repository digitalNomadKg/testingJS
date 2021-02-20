// input some year
// 1) divisible by 4- leap/i not then not leap year.
// 2) divisible by 100 - leap/if not then not leap year
// 3) divisible by 400 - leap/if not the not leap year

function getYear(inputYaer) {

  var inputYear = prompt("Hello please enter year");

  var inputNumber = inputYear;

  if (inputNumber % 4 === 0) {
    alert("The year " + inputNumber + " is leap year");
  } else if (inputNumber % 100 === 0) {
    alert("The year " + inputNumber + " is leap year");
  } else if (inputNumber % 100 === 0) {
    alert("The year " + inputNumber + " is leap year");
  } else {
    alert("The year " + inputNumber + " is not a leap year");
  }
}

getYear();



