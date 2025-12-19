// Q-----1
var num1 = parseFloat(prompt("Enter a positive number:"));
document.write("Number: " + num1 + "<br>");
document.write("Round off value: " + Math.round(num1) + "<br>");
document.write("Floor value: " + Math.floor(num1) + "<br>");
document.write("Ceil value: " + Math.ceil(num1) + "<br><br>");

// Q-2: 
var num2 = parseFloat(prompt("Enter a negative floating point number:"));
document.write("Number: " + num2 + "<br>");
document.write("Round off value: " + Math.round(num2) + "<br>");
document.write("Floor value: " + Math.floor(num2) + "<br>");
document.write("Ceil value: " + Math.ceil(num2) + "<br><br>");

// Q-3:
var num3 = parseFloat(prompt("Enter a number:"));
document.write("The absolute value of " + num3 + " is " + Math.abs(num3) + "<br><br>");

// Q-4:
var diceValue = Math.floor(Math.random() * 6) + 1;
document.write("Random dice value: " + diceValue + "<br><br>");

// Q-5:
var toss = Math.floor(Math.random() * 2);
document.write("Random coin value: " + (toss === 0 ? "Heads" : "Tails") + "<br><br>");

// Q-6:
var randomNumber = Math.floor(Math.random() * 100) + 1;
document.write("Random number between 1 and 100: " + randomNumber + "<br><br>");

// Q-7:
var userInput = prompt("Enter your weight:");
var weight = parseFloat(userInput);
document.write("Your weight is: " + weight + " kgs<br><br>");

// Q-8: r
var secretNumber = Math.floor(Math.random() * 10) + 1;
var userGuess = parseInt(prompt("Guess the secret number (1 to 10):"));
if (userGuess === secretNumber) {
    document.write("Congratulations! You guessed the secret number 🎉<br><br>");
} else {
    document.write("Sorry! The secret number was " + secretNumber + "<br><br>");
}

// Q-1
var currentDate1 = new Date();
document.write("Current date and time: " + currentDate1 + "<br><br>");

// Q-2:
var months = ["January", "February", "March", "April", "May", "June",
              "July", "August", "September", "October", "November", "December"];
var nowQ2 = new Date();
alert("Current month is: " + months[nowQ2.getMonth()]);

// Q-3
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var nowQ3 = new Date();
alert("Today is: " + days[nowQ3.getDay()]);

// Q-4
var nowQ4 = new Date();
var dayIndexQ4 = nowQ4.getDay();
if (dayIndexQ4 === 0 || dayIndexQ4 === 6) {
    document.write("It's Fun day 🎉<br><br>");
} else {
    document.write("Today is a working day.<br><br>");
}

// Q-5
var nowQ5 = new Date();
var dateQ5 = nowQ5.getDate();
if (dateQ5 < 16) {
    document.write("First fifteen days of the month<br><br>");
} else {
    document.write("Last days of the month<br><br>");
}

// Q-6:
var nowQ6 = new Date();
var minutesSince1970 = Math.floor(nowQ6.getTime() / (1000 * 60));
document.write("Minutes since midnight, Jan 1, 1970: " + minutesSince1970 + "<br><br>");

// Q-7:
var nowQ7 = new Date();
var hoursQ7 = nowQ7.getHours();
alert(hoursQ7 < 12 ? "It's AM" : "It's PM");

// Q-8:
var laterDate = new Date(2020, 11, 31);
document.write("Later date: " + laterDate + "<br><br>");

// Q-9:
var ramadanStart = new Date(2015, 5, 18);
var nowQ9 = new Date();
var daysPassed = Math.floor((nowQ9 - ramadanStart) / (1000 * 60 * 60 * 24));
alert("Days passed since 1st Ramadan 2015: " + daysPassed);

// Q-10:
var referenceDate = new Date();
var start2015 = new Date(2015, 0, 1);
var secondsElapsed = Math.floor((referenceDate - start2015) / 1000);
document.write("Seconds elapsed between January 1, 2015 and now: " + secondsElapsed + "<br><br>");

// Q-11:
var currentDateQ11 = new Date();
document.write("Current hours: " + currentDateQ11.getHours() + "<br>");
currentDateQ11.setHours(currentDateQ11.getHours() + 1);
document.write("Updated date and time (1 hour ahead): " + currentDateQ11 + "<br><br>");

// Q-12: 
var currentDateQ12 = new Date();
currentDateQ12.setFullYear(currentDateQ12.getFullYear() - 100);
alert("Date 100 years back: " + currentDateQ12);

// Q-13
var age = parseInt(prompt("Enter your age:"));
var currentYear = new Date().getFullYear();
var birthYear = currentYear - age;
document.write("Your birth year is: " + birthYear + "<br><br>");

// Q-14:
var customerName = prompt("Enter customer name:");
var nowQ14 = new Date();
var currentMonth = months[nowQ14.getMonth()];
var numberOfUnits = parseFloat(prompt("Enter number of units consumed:"));
var chargesPerUnit = parseFloat(prompt("Enter charges per unit:"));
var latePaymentSurcharge = parseFloat(prompt("Enter late payment surcharge:"));
var netAmountPayable = (numberOfUnits * chargesPerUnit).toFixed(2);
var grossAmountPayable = (parseFloat(netAmountPayable) + latePaymentSurcharge).toFixed(2);
chargesPerUnit = chargesPerUnit.toFixed(2);
latePaymentSurcharge = latePaymentSurcharge.toFixed(2);

document.write("<h2>K-Electric Bill</h2>");
document.write("Customer Name: <b>" + customerName + "</b><br>");
document.write("Month: <b>" + currentMonth + "</b><br>");
document.write("Number of units: <b>" + numberOfUnits + "</b><br>");
document.write("Charges per unit: <b>" + chargesPerUnit + "</b><br>");
document.write("Net Amount Payable (within Due Date): <b>" + netAmountPayable + "</b><br>");
document.write("Late Payment Surcharge: <b>" + latePaymentSurcharge + "</b><br>");
document.write("Gross Amount Payable (after Due Date): <b>" + grossAmountPayable + "</b><br><br>");