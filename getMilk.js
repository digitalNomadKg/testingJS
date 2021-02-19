// getMilk();

function getMilk(money){
  console.log("buy " + bottleCalculation(money,1.5) + " bottles of Milk");
  return changeCalculation(money,1.5);
  
}

function bottleCalculation(startingMoney, costPerBottle){
  var numberOfBottles= Math.floor(startingMoney/costPerBottle);
  return numberOfBottles;
}

function changeCalculation(startingMoney, costPerBottle){
  var change = startingMoney%costPerBottle;
  return change;
}

getMilk(5);