// Q#1
var q1Arr = [[1, 2, 3]]

// Q#2
var q2Arr = [[0, 1, 2, 3],
[1, 0, 1, 2],
[2, 1, 0, 1]]
document.write(q2Arr[0] + "<br>" + q2Arr[1] + "<br>" + q2Arr[2] + "<br>")
document.write("<br/>")
document.write("<br/>")
document.write("<br/>")

// Q#3
for (var q3 = 1; q3 <= 10; q3++) {
    document.write(q3 + "<br/>")
}
document.write("<br/>")
document.write("<br/>")
document.write("<br/>")

// Q#4
var q4num = +prompt("Enetr a number to show its multiplication table")
var q4length = +prompt("Enter length multiplication table")
document.write("Multiplication table of " + q4num + "<br/>" + " Length " + q4length + " is " + "<br>")
document.write("<br/>")
for (var q4 = 1; q4 <= q4length; q4++) {
    document.write(q4num + " x " + q4 + " = " + q4num * q4 + "<br/>")
}
document.write("<br/>")
document.write("<br/>")
document.write("<br/>")

// Q#5
var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
for (var i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>")
}
for (var i = 0; i < fruits.length; i++) {
    document.write("Element at index " + i + " is " + fruits[i] + "<br>");
}
document.write("<br/>")
document.write("<br/>")
document.write("<br/>")

// Q#6
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
document.write("<b> Counting: </b> <br>");
for (var i = 1; i <= 15; i++) {
    document.write(i + " , ");
}
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
document.write("<br> <br> <b> Reverse Counting: </b> <br>");
for (var i = 10; i >= 1; i--) {
    document.write(i + " , ");
}
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
document.write("<br> <br> <b> Even: </b> <br>");
for (var i = 0; i <= 20; i = i + 2) {
    document.write(i + " , ");
}
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
document.write("<br> <br> <b> Odd: </b> <br>");
for (var i = 1; i <= 20; i = i + 2) {
    document.write(i + " , ");
}
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
document.write("<br> <br> <b> Series: </b> <br>");
for (var i = 0; i <= 20; i = i + 2) {
    document.write(i + "k, ");
}
document.write("<br/>")
document.write("<br/>")
document.write("<br/>")

// Q#7
var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"]
var userSearch = prompt("Welcome to ABC bakery what do you want sir/ma'm ?")
for (var i = 0; i < bakeryItems.length; i++) {
    if (userSearch == bakeryItems[i]) {
        alert(userSearch + " is available at index " + i + " in our bakery")
        break
    }
    if (userSearch != bakeryItems) {
        alert("We are sorry " + userSearch + " is not available in our bakery");
        break
    }
    
}
// Q#8
var q8 = [24, 53, 78, 91, 12];
var max = 0;

document.write("Array Items:   " + q8);
document.write("<br/>")

for (var i = 0; i < q8.length; i++) {
    if (max < q8[i]) {
        max = q8[i];
    }
}
document.write("The largest number is " + max)
document.write("<br/>")
document.write("<br/>")
document.write("<br/>")

// Q#9
var q9 = [24, 53, 78, 91, 12];
var min = q9[0];

document.write("Array Items:   " + q9);
document.write("<br/>")

for (var i = 0; i < q9.length; i++) {
    if (min > q9[i]) {
        min = q9[i];
    }
}
document.write("The Smallest number is " + min)
document.write("<br/>")
document.write("<br/>")
document.write("<br/>")


// Q#10
for (var i = 1; i <= 100; i++) {
    if (i %= 5 == 0) {
        document.write(i + " , ");
    }
}