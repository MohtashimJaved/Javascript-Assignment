// Q-1
var positive_integer = prompt("Enter a positive integer in a decimal value")
document.write("Positive Integer : " + positive_integer + "<br/>")
var q1Round = Math.round(positive_integer)
document.write("Round num : " + q1Round + "<br/>")
var q1Floor = Math.floor(positive_integer)
document.write("Floor num : " + q1Floor + "<br/>")
var q1Floor = Math.ceil(positive_integer)
document.write("Ceil num : " + q1Floor + "<br/>" + "<br/>" + "<br/>")

// Q-2
var negative_integer = prompt("Enter a negative integer in a decimal value")
document.write("Negative Integer : " + negative_integer + "<br/>")
var q1Round = Math.round(negative_integer)
document.write("Round num : " + q1Round + "<br/>")
var q1Floor = Math.floor(negative_integer)
document.write("Floor num : " + q1Floor + "<br/>")
var q1Floor = Math.ceil(negative_integer)
document.write("Ceil num : " + q1Floor + "<br/>" + "<br/>" + "<br/>")

// Q-3
var q3 = prompt("Enter a number")
var resultQ3 = parseFloat(q3)
document.write("Absolute num is : " + resultQ3 + "<br/>" + "<br/>" + "<br/>")

// Q-4
var q4Random = Math.random();
var q4num = (q4Random * 6) + 1;
var dice = Math.floor(q4num)
document.write("Your Dice random value is : " + dice + "<br/>" + "<br/>" + "<br/>")

// Q-5
var q5Random = Math.random();
var q5num = (q5Random * 2) + 1;
var game = Math.floor(q5num)
if (game == 1) {
    document.write("Random coin value is : Heads " + "<br/>" + "<br/>" + "<br/>")
} else if (game == 2) {
    document.write("Random coin value is : Tails " + "<br/>" + "<br/>" + "<br/>")
}

// Q-6
var q6Random = Math.random();
var q6num = (q6Random * 100) + 1;
var num_1to100 = Math.floor(q6num);
document.write("Random number between 1 to 100 is : " + num_1to100 + "<br/>" + "<br/>" + "<br/>")

// Q-7
var weight = prompt("Enter your weight in Kilograms");
document.write("Your weight is : " + weight + " Kilograms" + "<br/>" + "<br/>" + "<br/>");

// Q-8
var q8Random = Math.random();
var q8num = (q8Random * 10) + 1;
var secretNum = Math.floor(q8num);
var user_guess = Number(prompt("Guess secret number between 1 to 10"));
if (user_guess == secretNum) {
    alert("YOU WON")
} else if (user_guess != secretNum) {
    alert("TRY AGAIN!")
}


