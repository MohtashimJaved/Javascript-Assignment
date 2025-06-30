// Q-1
var q1 = new Date();
document.write("<br/>" + q1 + "<br/>" + "<br/>" + "<br/>");

// Q-2
var monthNames = ["January", "Febraury", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var q2 = new Date();
var month = q2.getMonth()
var resultQ2 = monthNames[month];
document.write("Current month is : " + resultQ2 + "<br/>" + "<br/>" + "<br/>");

// Q-3
var dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
var q3 = new Date();
var day = q3.getDay()
var resultQ3 = dayNames[day];
document.write("Today is : " + resultQ3 + "<br/>" + "<br/>" + "<br/>");

// Q-4
var dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
var q4 = new Date();
var day = q4.getDay()
var resultQ4 = dayNames[day];
if (day == 5 || day == 6) {
    document.write("Today is : Funday " + "<br/>" + "<br/>" + "<br/>");
} else {
    document.write("Today is : " + resultQ4 + "<br/>" + "<br/>" + "<br/>");
}

// Q-5
var q5 = new Date();
var dateq5 = q5.getDate()
if (dateq5 <= 15) {
    document.write("First fifteen days of the month " + "<br/>" + "<br/>" + "<br/>");
} else {
    document.write("Last days of the month " + "<br/>" + "<br/>" + "<br/>");
}

// Q-6
var q6 = new Date();
var secondsq6 = q6.getTime()
var minutesq6 = Math.floor(secondsq6 * 60)

document.write("Current date : " + q6 + "<br/>");
document.write("Elapsed seconds since january 1, 1970 : " + secondsq6 + "<br/>");
document.write("Elapsed minutes since january 1, 1970 : " + minutesq6 + "<br/>" + "<br/>" + "<br/>");

// Q-7
var q7 = new Date();
var hourq7 = q7.getHours()
if (hourq7 < 12) {
    document.write("Its AM" + "<br/>" + "<br/>" + "<br/>");
} else {
    document.write("Its PM" + "<br/>" + "<br/>" + "<br/>");
}

// Q-8
var laterdate = new Date(2020, 11, 31)
document.write("Later date : " + laterdate + "<br/>" + "<br/>" + "<br/>");

// Q-9
var ramazan = new Date(2015, 7, 18);
var currentDate = new Date();
var diffrenceQ9 = currentDate.getTime() - ramazan.getTime();
var resultQ9 = Math.round(diffrenceQ9 / (1000 * 60 * 60 * 24));
document.write("You have passed days since Ramazan 1, 2015 : " + resultQ9 + "<br/>" + "<br/>" + "<br/>");

// Q-10
var refrenceDate = new Date(1970, 0, 1);
var beginDate = new Date(2015, 0, 1);
var diffrenceQ10 = beginDate.getTime() - refrenceDate.getTime();
var resultQ10 = Math.round(diffrenceQ10 / 1000);
document.write("On refrence date : " + beginDate + "<br/>" +
    + resultQ10 + " Secondes has passed since begining of 2015" + "<br/>" + "<br/>");

// Q-11
var q11 = new Date();
document.write("current date : " + q11 + "<br/>");
var q11hour = q11.getHours();
var resultQ11 = q11.setHours(q11hour - 1)
document.write("1 hour ago : " + q11 + "<br/>" + "<br/>" + "<br/>");

// Q-12
var q12 = new Date();
var q12year = q12.getFullYear();
document.write("current date : " + q12 + "<br/>");
var resultQ12 = q12.setFullYear(q12year - 100)
document.write("100 years ago : " + q12 + "<br/>" + "<br/>" + "<br/>");

// Q-13
var age = prompt("Enter your age")
document.write("current age : " + age + "<br/>");
var q13 = new Date();
var q13year = q13.getFullYear();
q13.setFullYear(q13year - age);
document.write("Your birth year is : " + q13 + "<br/>" + "<br/>" + "<br/>");

// Q-14
document.write("<h1>" + "K-Electric" + "<h1/>" + "<br/>" + "<br/>");
document.write("Costumer Name : " + "<h1>" + "Mohtashim Javed" + "<h1/>");
document.write("Month : " + "<h1>" + "July" + "<h1/>");
document.write("Numbers of units : " + "<h1>" + "410" + "<h1/>" );
document.write("Charges per unit : " + "<h1>" + "16" + "<h1/>" + "<br/>" );
document.write("Net Amount payable (within due date) : " + "<h1>" + "6560" + "<h1/>" );
document.write("Late payment surcharge : " + "<h1>" + "350" + "<h1/>"  );
document.write("Gross Amount payable (after due date)   : " + "<h1>" + "6910" + "<h1/>" );
