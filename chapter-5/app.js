// Q#1
var firstNum = 31
var secondNum = 7
var result = firstNum+secondNum
document.writeln ("Sum of 31 and 7 is " + result)
document.writeln ("<br/>")
// Q#2
var firstNum = 31
var secondNum = 7
var result = firstNum-secondNum
document.writeln ("Subtract 7 from 31 is " + result)
document.writeln ("<br/>")

var firstNum = 31
var secondNum = 7
var result = firstNum*secondNum
document.writeln ("Multiply of 31 by 7 is " + result)
document.writeln ("<br/>")

var firstNum = 31
var secondNum = 7
var result = firstNum-secondNum
document.writeln ("Division of 31 with 7 is " + result)
document.writeln ("<br/>")

var firstNum = 31
var secondNum = 7
var result = firstNum%secondNum
document.writeln ("Modulus of 31 with 7 is " + result)
document.writeln ("<br/>")
document.writeln ("<br/>")
document.writeln ("<br/>")
document.writeln ("<br/>")

// Q#3
var num = 
document.writeln ("Value after variable declaration is: " + num)
document.writeln ("<br/>")
var num2 = 31
document.writeln ("Initial value: " + num2++)
document.writeln ("<br/>")
document.writeln ("Value after increment is: " + num2)
document.writeln ("<br/>")
num2 = num2 + 7
document.writeln ("Value after addition is: " + num2--)
document.writeln ("<br/>")
document.writeln ("Value after decrement is: " + num2)
document.writeln ("<br/>")
document.writeln ("The remainder is : " + num2 % 3)
document.writeln ("<br/>")
document.writeln ("<br/>")
document.writeln ("<br/>")
document.writeln ("<br/>")

// Q#4
var movie_ticket = 600
movie_ticket = movie_ticket * 5
document.writeln ("Total cost to buy 5 tickets to a movie is " + movie_ticket + "PKR")
document.writeln ("<br/>")
document.writeln ("<br/>")
document.writeln ("<br/>")
document.writeln ("<br/>")

// Q#5
var table = 5
document.writeln ("Table of 5")
document.writeln ("<br/>")
document.writeln ("5 x 1 = " + table * 1)
document.writeln ("<br/>")
document.writeln ("5 x 2 = " + table * 2)
document.writeln ("<br/>")
document.writeln ("5 x 3 = " + table * 3)
document.writeln ("<br/>")
document.writeln ("5 x 4 = " + table * 4)
document.writeln ("<br/>")
document.writeln ("5 x 5 = " + table * 5)
document.writeln ("<br/>")
document.writeln ("5 x 6 = " + table * 6)
document.writeln ("<br/>")
document.writeln ("5 x 7 = " + table * 7)
document.writeln ("<br/>")
document.writeln ("5 x 8 = " + table * 8)
document.writeln ("<br/>")
document.writeln ("5 x 9 = " + table * 9)
document.writeln ("<br/>")
document.writeln ("5 x 10 = " + table * 10)
document.writeln ("<br/>")
document.writeln ("<br/>")
document.writeln ("<br/>")
document.writeln ("<br/>")

// Q#7
var item1_price = 350
var item1_quantity = 5
var item2_price = 750
var item2_quantity = 3
var shipping = 500
document.writeln ("Price of item 1 is " + item1_price)
document.writeln ("<br/>")
document.writeln ("Quantity of item 1 is " + item1_quantity)
document.writeln ("<br/>")
document.writeln ("Price of item 2 is " + item2_price)
document.writeln ("<br/>")
document.writeln ("Quantity of item 2 is " + item2_price)
document.writeln ("<br/>")
document.writeln ("Shipping charges " + shipping)
document.writeln ("<br/>")
document.writeln ("<br/>")
item1_price = item1_price * item1_quantity
item2_price = item2_price * item2_quantity
var total = item1_price + item2_price +shipping
document.writeln ("total cost of your order is " + total )
document.writeln ("<br/>")
document.writeln ("<br/>")
document.writeln ("<br/>")
document.writeln ("<br/>")

// Q#8
var total_marks = 800
document.writeln ("Total marks : " + total_marks)
document.writeln ("<br/>")
var obtain_marks = 550
document.writeln ("Obtained marks : " + obtain_marks)
document.writeln ("<br/>")
var result = obtain_marks / total_marks * 100
document.writeln ("Percentage : " + result)
document.writeln ("<br/>")
document.writeln ("<br/>")
document.writeln ("<br/>")
document.writeln ("<br/>")

// Q#9
var US_dollar = 80
document.writeln ("US Dollars : " + US_dollar)
document.writeln ("<br/>")
US_dollar = US_dollar * 104.80
var Saudi_riyal = 50
document.writeln ("Saudi Riyal : " + Saudi_riyal)
document.writeln ("<br/>")
Saudi_riyal = Saudi_riyal * 28 
var PKR = US_dollar + Saudi_riyal
document.writeln ("Total currency in PKR is : " + PKR)
document.writeln ("<br/>")
document.writeln ("<br/>")
document.writeln ("<br/>")
document.writeln ("<br/>")

// Q#10
var arithmetic = 5
arithmetic = arithmetic + 5
arithmetic = arithmetic * 10
arithmetic = arithmetic / 2
document.writeln (arithmetic)
document.writeln ("<br/>")
document.writeln ("<br/>")
document.writeln ("<br/>")
document.writeln ("<br/>")

// Q#11
var current_year = 2025
document.writeln ("Current Year : " + current_year)
document.writeln ("<br/>")
var birth_year = 2007
document.writeln ("Birth Year : " + birth_year)
document.writeln ("<br/>")
var current_age = current_year - birth_year
document.writeln ("Your Age : " + current_age)
document.writeln ("<br/>")
document.writeln ("<br/>")
document.writeln ("<br/>")
document.writeln ("<br/>")

// Q#13
var favorite_snack = "Snackers"
document.writeln ("Favorite Snack = " + favorite_snack)
document.writeln ("<br/>")
var current_age = 18
document.writeln ("Current Age = " + current_age)
document.writeln ("<br/>")
var max_age = 63
document.writeln ("Maximum Age = " + max_age)
document.writeln ("<br/>")
var snack_per_day = 3
document.writeln ("Amount of Snacks per day = " + snack_per_day)
document.writeln ("<br/>")
var total_snacks = max_age - current_age
var total_snacks = total_snacks * snack_per_day
document.writeln ("You wil need " + total_snacks + " Snackers to last you until the ripe old age of 63")
document.writeln ("<br/>")
document.writeln ("<br/>")
document.writeln ("<br/>")
document.writeln ("<br/>")