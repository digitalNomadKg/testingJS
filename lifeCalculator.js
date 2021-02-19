function life(age) {

  var daysLeft =(90*365)-(age*365);
  var weeksLeft =(90*52)-(age*52);
  var monthLeft =(90*12)-(age*12);
  
  var result = ("You have " + daysLeft + " days, " + weeksLeft +" weeks, and " + monthLeft + " months left.");
  console.log(result)
  
  }
  
  life(56);