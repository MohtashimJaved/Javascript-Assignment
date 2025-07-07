// Q-1
function getDate() {
    var currentDate = new Date();
    document.write("Current Date & Time : " + currentDate);
}

// Q-2
function greetUser(firstName, lastName) {
    alert("Welcome " + firstName + " " + lastName + " on my Webpage")
}

// Q-3
function getsum(num1, num2) {
    var sum = +num1 + +num2
    document.write("Sum of your number is : " + sum)
}

// Q-4
function calculator(num1, num2, operator) {
    if (operator == "+") {
        var result = num1 + num2
        alert("Result of your operation is : " + result)
    } else if (operator == "-") {
        result = num1 - num2
        alert("Result of your operation is : " + result)
    } else if (operator == "*") {
        result = num1 * num2
        alert("Result of your operation is : " + result)

    } else if (operator == "/") {
        result = num1 / num2
        alert("Result of your operation is : " + result)

    } else if (operator == "%") {
        result = num1 % num2
        alert("Result of your operation is : " + result)

    } else {
        alert("Enetr an valid operator !")
    }
}

// Q-5
function square(num) {
    var square = num * num
    document.write("Square Of your number : " + square);
}

// Q-6
function factorial(num) {
    var fact = num;
    for (var i = num - 1; i > 0; i--) {
        fact = fact * i
    } document.write("Factorial of your number is : " + fact)
}

// Q-7
function counting(startnum, endnum) {
    var count = ""
    if (startnum <= endnum) {
        for (var i = startnum; i <= endnum; i++) {
            count += i + "<br/>"
        }
    } else if (startnum >= endnum) {
        for (var i = startnum; i >= endnum; i--) {
            count += i + "<br/>"
        }
    } else {
        alert("Enter an valid number")
    }
    document.write(count)
}

// Q-10
function palindrome(str) {
    var string = str.toLowerCase()
    var palindrome = string.split("").reverse().join("");
    if (palindrome == string) {
        alert("Your word is Palindrome")
    } else if (palindrome != string) {
        alert("Your word is not Palindrome")
    } else {
        alert("Enter an valid word")
    }
}

// Q-11
function titleCase(str) {
    var strArr = str.split(" ");
    for (var i = 0; i < strArr.length; i++) {
        var titleCase = strArr[i]
        strArr[i] = titleCase.charAt(0).toUpperCase() + titleCase.slice(1)
        var final = strArr.join(" ")
    }
    document.write("Your Titlecase string  is here : " + final);
}

// Q-12
function longestWord(str) {
    var longestWord = [];
    var strArr = str.split(" ")
    for (var i = 0; i < strArr.length; i++) {
        if (strArr[i].length > longestWord.length) {
            longestWord = strArr[i]
        }
        // var letter = strArr[i]
        // for(var j = 0;j<letter;j++ ){
        // }
    }
    alert("The longest word in your given string is : " + longestWord);
}

// Q-13
function specifiedLetter(string, letter) {
    var letter = letter
    var specifiedcount = 0;
    for (var i = 0; i < string.length; i++) {
        if (letter == string[i]) {
            specifiedcount++
        }
    }
    alert("In your string '" + string + "' the letter '" + letter + "' is '" + specifiedcount + "' Times")
}
// Function Call :

// (1)
document.write("<br/>" + "<h2>")
getDate();
document.write("<h2/>")

// (2)
greetUser(prompt("Enter your firstname"), prompt("Enter your lastname"));

// (3)
document.write("<h2>")
getsum(+prompt("Enter your first num"), +prompt("Enter your last num"));
document.write("<h2/>")

// (4)
calculator(Number(prompt("Enter your first num")), Number(prompt("Enter your last num")), prompt("Enter An Operator (+, -, *, /, %)"));

// (5)
document.write("<h2>")
square(Number(prompt("Enter a number for square")));
document.write("<h2/>")

// (6)
document.write("<h2>")
factorial(Number(prompt("Enter number for factorization")))
document.write("<h2/>")

// (7)
document.write("<h2>")
counting(Number(prompt("Enter starting num")), Number(prompt("Enter Ending number")))
document.write("<h2/>")

// (10)
palindrome(prompt("Enter a word to check word is Palindrome or not"))

// (11)
document.write("<h2>")
titleCase(prompt("Enter your sentence for convert into Titlecase"))
document.write("<h2/>")

// (12)
longestWord(prompt("Enter a sentence"))

// (13)
specifiedLetter(prompt("Enter a string to find specific letter"), prompt("Enter a specific letter"))