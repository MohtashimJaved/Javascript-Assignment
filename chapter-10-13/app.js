// Q#1
var num = prompt ("Enter the number or string");

if (num.charCodeAt(0) >= 65 && num.charCodeAt(0) <= 90)
{
    alert ("It is the upper case letter")
}
else if (num.charCodeAt(0) >= 97 && num.charCodeAt(0)<= 122)
{
    alert ("It is the lower case letter");
}
else if (num.charCodeAt() >= 48 && num.charCodeAt() <= 57)
{
    alert("Its an number");
}
else
{
    alert("It is something else");
}


// Q#2

var num1 = +prompt ("Enter the first number");

var num2 = +prompt ("Enter the second number");

if(num1 > num2)
{
    alert("The number 1 is larger");
}
else if(num2 > num1)
{
    alert("The number 2 is larger");
}
else if(num1 == num2)
{
    alert("The number 1 and number 2 are equal");
}

// Q#3
var num = Number(prompt("Enter any number"))
if ( num > 0 ) {
    alert("The Number you Enter is Positive")
}
else if ( num == 0 ) {
    alert("The Number you Enter is 0")
}
else {
alert("The Number you Enter is Negative")
}

// Q#4
var vowel = prompt("Enter a string of length 1");
if ( vowel === "a" || "e" || "i" || "o" || "u" || "A" || "E" || "I" || "O" || "U") {
  alert ("Your value is true");
}
else{
    alert ("Your value is False")
}

// Q#5
var password = "mypasswordjs"
var userPassword = prompt("Enter your Password")
if (userPassword == ""){
    alert('Please enter your password!')
}
else if (password == userPassword){
    alert("Correct!")
}
else {
    alert("Incorrect Password")
}

// Q#6
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}else {
greeting = "Good evening";
}

// Q#7
var time = prompt("What Time is it now!")
if (time>=0o0 && time<1200)
{
    alert("Good morning");
}
else if(time>=1200 && time<1700)
{
    alert("Good afternoon");
}
else if(time>=1700 && time<2100)
{
    alert("Good evening")
}
else if(time>=2100 && time<=2359)
{
    alert("Good night");
}
else
{
    alert("Where are you coming out of the required condition Its 24 hour time program");
}