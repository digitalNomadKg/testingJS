// writing function which will select randomName from nameList
// Selected randomName will pay for the lunch



function whoWillPay(names) {

  var numberOfPeople = names.lenght;

  var randomPersonPosition = Math.floor(Math.random() * numberOfPeople)

  var randomPerson = names[randomPersonPosition];

  return randomPerson + " is going to buy lunch today!"

}
whoWillPay();