
function bmiCalculator(weight, height){
  var bmi = weight/(height*height);
  return bmi
}

bmiCalculator(82,2);

// dice

function dice(){
  var n = Math.random();
  n= Math.floor(n*6) + 1;
  return n;
}
dice();

/////////////////////////////////////////////////////////////////////////////////////

//love calculator
// 1) Promt 2 names
// 2) Generate in random betweeen  1 and 100 in %
// 3) show result

function nameInput (){
  var firstName =  prompt("Please enter your name:");
  var secondName = prompt("Please enter your second name:");
  var nameResult = firstName +" and " + secondName;
return nameResult;
 }
nameInput();

function calculation (){
  var number  = Math.random();
  number = Math.floor((number*100)+1);
  if(number>75){
    return("You are the best fit " + "your score is " + number + "%");
  }else{
    if(number<25){
      return("You are both loosers " + "your score is " + number + "%");
    }else{
      return("Hey Dudes, you can be lovers and create families, but not sure, please think twice " +  "your score is " + number + "%");
    }
  }
   return number;
}
calculation();

