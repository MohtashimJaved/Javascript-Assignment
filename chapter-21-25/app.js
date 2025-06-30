// Q-1

var first_name = prompt("Enter your first name")
var last_name = prompt("Enter your last name")
var result = alert("Thank you " + first_name + last_name + " for visit my site")

// Q-2
var mobile = prompt("Enter your favorite mobile name")
document.write("Your favorite mobile is : " + mobile + "<br/>")
document.write("Length of your string is : " + mobile.length + "<br/>" + "<br/>" + "<br/>")

// Q-3
var stringQ3 = "Pakistani"
var q3 = stringQ3.indexOf("n")
document.write("Your string is : " + stringQ3 + "<br/>")
document.write("Index of your string 'n' is : " + q3 + "<br/>" + "<br/>" + "<br/>")

// Q-4
var stringQ4 = "Hello world"
var q4 = stringQ4.lastIndexOf("l")
document.write("Your string is : " + stringQ4 + "<br/>")
document.write("last index of your string 'l' is : " + q4 + "<br/>" + "<br/>" + "<br/>")

// Q-5
var stringQ5 = "Pakistani"
var q5 = stringQ5.charAt(3)
document.write("Your string is : " + stringQ5 + "<br/>")
document.write("Letter at index '3' is : " + q5 + "<br/>" + "<br/>" + "<br/>")

// Q-6
var first_name = prompt("Enter your first name")
var last_name = prompt("Enter your last name")
var resultQ6 = "Thank you ".concat(first_name + last_name + " for visit my site")
alert(resultQ6)

// Q-7
var city = "Hyderabad"
var replaceQ7 = city.replace("Hyder", "Islam")
document.write("City : " + city + "<br/>")
document.write("After replacement : " + replaceQ7 + "<br/>" + "<br/>" + "<br/>")

// Q-8
var message = "Ali and Sami are best friends. They play cricket and football together.";
var replaceQ8 = message.replace(/and/g, "&")
document.write("Your message : " + message + "<br/>")
document.write("After replacement : " + replaceQ8 + "<br/>" + "<br/>" + "<br/>")

// Q-9
var q9Str = "3157";
var replaceQ9 = Number(q9Str)
document.write("Value : " + q9Str + "<br/>")
document.write("Type : " + typeof (q9Str) + "<br/>")
document.write("Value : " + replaceQ9 + "<br/>")
document.write("Type : " + typeof (replaceQ9) + "<br/>" + "<br/>" + "<br/>")

// Q-10
var userInputQ10 = "peanuts";
document.write("User input : " + userInputQ10 + "<br/>")
document.write("Upper case : " + userInputQ10.toUpperCase() + "<br/>" + "<br/>" + "<br/>")

// Q-11
var userInputQ11 = "javascript";
document.write("User input : " + userInputQ11 + "<br/>")
userInputQ11 = userInputQ11.charAt(0).toUpperCase() + userInputQ11.slice(1);
document.write("Title case : " + userInputQ11 + "<br/>" + "<br/>" + "<br/>")

// Q-12
var numQ12 = 35.36;
var strQ12 = " " + numQ12
var dot_remove = strQ12.replace(".", "")
document.write("Num = " + numQ12 + "<br/>")
document.write("Result = " + dot_remove + "<br/>" + "<br/>" + "<br/>")

// Q-13
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64
var usernameQ13 = prompt("Enter your name");
for (var i = 0; i < usernameQ13.length; i++) {
    if (usernameQ13[i].charCodeAt() == 33 || usernameQ13[i].charCodeAt() == 44 || usernameQ13[i].charCodeAt() == 46 || usernameQ13[i].charCodeAt() == 64) {
        alert("Please enetr a valid name")
    }
    break
}

// Q-14
var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"]
var userSearch = prompt("Welcome to ABC bakery what do you want sir/ma'm ?")
var lowercase = userSearch.toLowerCase()
for (var i = 0; i < bakeryItems.length; i++) {
    if (lowercase == bakeryItems[i]) {
        alert(lowercase + " is available at index " + i + " in our bakery")
        break
    }
    if (lowercase != bakeryItems) {
        alert("We are sorry " + lowercase + " is not available in our bakery");
        break
    }

}

// Q-15
var password = "";
password = prompt("Enter your password:");


for (var i = 0; i < password.length; i++) {

    var isValid = true;

    if (password.length < 6) {
        isValid = false;
    }


    var firstCharCode = password.charCodeAt(0);
    if (firstCharCode >= 48 && firstCharCode <= 57) {
        isValid = false;
    }

    var hasLetter = false;
    var hasDigit = false;

    for (var j = 0; j < password.length; j++) {
        var code = password.charCodeAt(j);

        if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
            hasLetter = true;
        }

        if (code >= 48 && code <= 57) {
            hasDigit = true;
        }
    }

    if (!hasLetter || !hasDigit) {
        isValid = false;
    }

    if (!isValid) {
        alert("Invalid password!");
        break;
    }
}

//Q-16
var university = "University of Karachi";
var resultQ16 = university.split("")
for (var i = 0; i < resultQ16.length; i++) {

    document.write(resultQ16[i] + "<br/>")
}
document.write("<br/>" + "<br/>")

// Q-17
var stringQ17 = "Pakistan"
var q17 = stringQ17.charAt(stringQ17.length - 1)
document.write("Your string is : " + stringQ17 + "<br/>")
document.write("Last letter of your sring  is : " + q17 + "<br/>" + "<br/>" + "<br/>")

// Q-18
var strQ18 = "The quick brown fox jumps over the lazy dog"
var lowercase = strQ18.toLowerCase()
var splited = lowercase.split(" ")
var countstr = "the"
var count = 0;
for (var i = 0; i < splited.length; i++){
    if(countstr == splited[i])
        count++;
}
document.write("In your string 'The' count is : " + count);
