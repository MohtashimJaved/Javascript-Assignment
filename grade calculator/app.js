// Grade Calculator
var grade = prompt ("Enter Your Percentage");

if (grade >= 90 && grade <= 100) {
    alert ("Your Grade is = A ONE ")
} else if (grade >= 80 && grade <= 89) {
    alert ("Your Grade is = A")
} else if (grade >= 70 && grade <= 79) {
    alert ("Your Grade is = B+")
} else if (grade >= 60 && grade <= 69) {
    alert ("Your Grade is = B")
} else if (grade >= 50 && grade <= 59) {
    alert ("Your Grade is = C")
} else if (grade < 50) {
    alert ("You are FAIL")
}else {
    alert ("Enter a valid number")
}