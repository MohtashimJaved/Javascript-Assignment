// Q#1
// var city = prompt ("Enter Your City");
// alert ("Welcome to the " + city + " city");

// Q#2
// var gender = prompt ("Enter Your Gender");
//  if (gender === "male") {
//     alert ("Good Morning Sir");
//  } 
//  else if (gender === "female") {
//     alert ("Good Morning Ma’am");
//  } 
//  else {
//     alert ("Please enter a valid gender");
//  }
 
 // Q#3
//  var signal = prompt ("Enter color of Traffic signal");
//   if (signal === "red") {
//      alert ("Must stop");
//   } 
//   else if (signal === "yellow") {
//      alert ("Ready to move");
//   } 
//   else if (signal === "green") {
//      alert ("Move now");
//   } 
//   else {
//      alert ("Please enter a valid color");
//   }

// Q#4
// var fuel = prompt ("Enter your Car Fuel (In Litres)" );
// if (fuel < 1) {
//     alert ("Please refill the fuel in your car");
// }

// Q#6
// var subject1 = +prompt ("Enter your First Subject obtain marks")
// var subject2 = +prompt ("Enter your Second Subject obtain marks")
// var subject3 = +prompt ("Enter your Third Subject obtain marks")
// var obtainedMarks = subject1 + subject2 +subject3
// var totalMarks = 300
// var percentage = obtainedMarks / totalMarks * 100 
// if (percentage >= 80) {
//     alert (
//         "Total Marks : " + totalMarks + 
//         "\nMarks Obtained : " + obtainedMarks +
//         "\nPercentage : " + percentage + "%" +
//         "\nGrade : " + "A One" +
//         "\nRemarks : " + "Excellent"    )
// }
// else if (percentage >= 70) {
//     alert (
//         "Total Marks : " + totalMarks + 
//         "\nMarks Obtained : " + obtainedMarks +
//         "\nPercentage : " + percentage + "%" +
//         "\nGrade : " + "A" +
//         "\nRemarks : " + "Good"     )
    
// }
// else if (percentage >= 60) {
//     alert (
//         "Total Marks : " + totalMarks + 
//         "\nMarks Obtained : " + obtainedMarks +
//         "\nPercentage : " + percentage + "%" +
//         "\nGrade : " + "B" +
//         "\nRemarks : " + "You need to improve"     )
    
// }
// else if (percentage < 60) {
//     alert (
//         "Total Marks : " + totalMarks + 
//         "\nMarks Obtained : " + obtainedMarks +
//         "\nPercentage : " + percentage + "%" +
//         "\nGrade : " + "Fail" +
//         "\nRemarks : " + "Sorry"     )
    
// }

// Q#7
// var game = +prompt ("Guess the Secret Number (1-10)")
// if (game === 7) {
//     alert ("Bingo! Correct answer.")
// }else if (game === 6) {
//     alert ("Close enough to the correct answer.")
// }

// Q#8
// var divisible = +prompt ("Enter a number")
// if (divisible % 3 === 0) {
//     alert ("Your number is Divisible by 3")
// }

// Q#9
// var evenOdd = +prompt ("Enter a number")
// if (evenOdd % 2 === 0) {
//     alert ("Your number is Even")
// }else if (evenOdd % 2 !== 0) {
//     alert ("Your number is Odd")
// }

// Q#10
// var temprature = prompt ("Enter Today Temprature") 
// if (temprature > 40) {
//     alert ("It is too hot outside.")
// }
// else if (temprature > 30) {
//     alert ("The Weather today is Normal.")
// }
// else if (temprature > 20) {
//     alert ("Today’s Weather is cool.")
// }
// else if (temprature > 10) {
//     alert ("OMG! Today’s weather is so Cool.")
// }

// Q#11
var firstNum = +prompt ("Enter Your First Number") 
var secondNum = +prompt ("Enter Your Second Number") 
var operation = prompt ("Enter Your Operator (+,-,*,/,%)") 
if (operation === "+") {
    alert (firstNum + secondNum)
}else if (operation === "-") {
    alert (firstNum - secondNum)
}else if (operation === "*") {
    alert (firstNum * secondNum)
}else if (operation === "/") {
    alert (firstNum / secondNum)
}else if (operation === "%") {
    alert (firstNum % secondNum)
}