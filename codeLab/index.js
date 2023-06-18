// Challenge 1: Student Grade Generator (Toy Problem)

let myGrader = function (mymarks) {
  let grade;

  if (mymarks > 79 && mymarks <= 100) {
    grade = "A";
  } else if (mymarks >= 60 && mymarks <= 79) {
    grade = "B";
  } else if (mymarks > 49 && mymarks <= 59) {
    grade = "C";
  } else if (mymarks >= 40 && mymarks <= 49) {
    grade = "D";
  } else if (mymarks < 49 && mymarks > 0) {
    grade = "E";
  } else {
    grade = "invalid marks ";
  }

  console.log(grade);
  return grade;
};

// Challenge 2: Speed Detector (Toy Problem)

let mySpeedDetector = function (speed) {
  //naming my variables in the local scope
  let myLimit = 70;
  let message;

  let cheaker;
  //  checking to the speed value so as to procced to the next step
  if (speed >= myLimit) {
    cheaker = speed - myLimit;

  } else if (speed < myLimit) {
    cheaker = 0;
    message ="Ok";


  }

  //  using the value we got in the global variable checker to identity the point that the
  // driver has i am using the if and else statment to evaluate the results
  if (cheaker == 5) {
    message = "points:1 ";
  } else if (cheaker == 10) {
    message = "points:2";
  } else if (cheaker == 15) {
    message = "points:3";
  } else if (cheaker == 20) {
    message = "points:4";
  } else if (cheaker == 25) {
    message = "points:5";
  } else if (cheaker == 30) {
    message = "points:6";
  }

 else if (cheaker == 35) {
    message = "points:7";
  }

  else if (cheaker == 40) {
    message = "points:8";
  }

  else if (cheaker == 45) {
    message = "points:9";
  } 

  else if (cheaker == 50) {
    message = "points:10";
  }

  else if (cheaker == 55) {
    message = "points:11";
  }

  else if (cheaker  ==60) {
    message = "points:12";
  }

  else if (cheaker >60) {
    message = "License suspended";
  }

// after using if and else statement to evaluate the code i submit the message ;  
// uding console.log to test my code in the terminal
console.log(message);
  return message;
};

//Challenge 3: Net Salary Calculator (Toy Problem)

let netSalary = function (mySalary) {
  let mygross = mySalary;
  let mypaye;
  let NHIFDeductions;
  let NSSFDeductions;
  let netpay;

  //  calculating the payee

  if (mygross >= 2400) {
    mypaye = mygross / 10;
  } else if (mygross >= 24001 && mygross <= 32333) {
    mypaye = (mygross * 25) / 100;
  } else if (mygross > 32333) {
    mypaye = (mygross * 30) / 100;
  }

  // nhif

  if (mygross < 5999) {
    mypaye = 0;
    NHIFDeductions = 0;
    NSSFDeductions = (mygross * 6) / 100;
    netpay = mygross - NSSFDeductions;
  } else if (mygross <= 5999) {
    NHIFDeductions = 150;

    NSSFDeductions = (mygross * 6) / 100;

    netpay = mySalary - (NHIFDeductions + mypaye + NSSFDeductions);
  } else if (mygross >= 6000 && mygross <= 7999) {
    NHIFDeductions = 300;

    NSSFDeductions = (mygross * 6) / 100;

    netpay = mySalary - (NHIFDeductions + mypaye + NSSFDeductions);
  } else if (mygross >= 8000 && mygross <= 11999) {
    NHIFDeductions = 400;

    NSSFDeductions = (mygross * 6) / 100;

    netpay = mySalary - (NHIFDeductions + mypaye + NSSFDeductions);
  } else if (mygross >= 12000 && mygross <= 14999) {
    NHIFDeductions = 500;

    NSSFDeductions = (mygross * 6) / 100;

    netpay = mySalary - (NHIFDeductions + mypaye + NSSFDeductions);
  } else if (mygross >= 15000 && mygross <= 19999) {
    NHIFDeductions = 600;

    NSSFDeductions = (mygross * 6) / 100;

    netpay = mySalary - (NHIFDeductions + mypaye + NSSFDeductions);
  } else if (mygross >= 20000 && mygross <= 24999) {
    NHIFDeductions = 750;

    NSSFDeductions = (mygross * 6) / 100;
    netpay = mySalary - (NHIFDeductions + mypaye + NSSFDeductions);
  } else if (mygross >= 25000 && mygross <= 29999) {
    NHIFDeductions = 850;

    NSSFDeductions = (mygross * 6) / 100;

    netpay = mySalary - (NHIFDeductions + mypaye + NSSFDeductions);
  } else if (mygross >= 30000 && mygross <= 34999) {
    NHIFDeductions = 900;

    NSSFDeductions = (mygross * 6) / 100;

    netpay = mySalary - (NHIFDeductions + mypaye + NSSFDeductions);
  } else if (mygross >= 35000 && mygross <= 39999) {
    NHIFDeductions = 950;

    NSSFDeductions = (mygross * 6) / 100;

    netpay = mySalary - (NHIFDeductions + mypaye + NSSFDeductions);
  } else if (mygross >= 40000 && mygross <= 44999) {
    NHIFDeductions = 1000;

    NSSFDeductions = (mygross * 6) / 100;

    netpay = mySalary - (NHIFDeductions + mypaye + NSSFDeductions);
  } else if (mygross >= 45000 && mygross <= 49999) {
    NHIFDeductions = 1100;

    NSSFDeductions = (mygross * 6) / 100;

    netpay = mySalary - (NHIFDeductions + mypaye + NSSFDeductions);
  } else if (mygross >= 50000 && mygross <= 59999) {
    NHIFDeductions = 1200;

    NSSFDeductions = (mygross * 6) / 100;

    netpay = mySalary - (NHIFDeductions + mypaye + NSSFDeductions);
  } else if (mygross >= 60000 && mygross <= 69999) {
    NHIFDeductions = 1300;

    NSSFDeductions = (mygross * 6) / 100;

    netpay = mySalary - (NHIFDeductions + mypaye + NSSFDeductions);
  } else if (mygross >= 70000 && mygross <= 79999) {
    NHIFDeductions = 1400;

    NSSFDeductions = (mygross * 6) / 100;

    netpay = mySalary - (NHIFDeductions + mypaye + NSSFDeductions);
  } else if (mygross >= 80000 && mygross <= 89999) {
    NHIFDeductions = 1500;

    NSSFDeductions = (mygross * 6) / 100;

    netpay = mySalary - (NHIFDeductions + mypaye + NSSFDeductions);
  } else if (mygross >= 90000 && mygross <= 99999) {
    NHIFDeductions = 1600;

    NSSFDeductions = (mygross * 6) / 100;

    netpay = mySalary - (NHIFDeductions + mypaye + NSSFDeductions);
  } else if (mygross >= 100000) {
    NHIFDeductions = 1700;

    NSSFDeductions = (mygross * 6) / 100;

    netpay = mySalary - (NHIFDeductions + mypaye + NSSFDeductions);
  }

  console.log(netpay);
  return netpay;
};
// code below is for testing the functions
myGrader(40);
netSalary(1200);
mySpeedDetector(30);
