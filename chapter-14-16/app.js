// Q#1
var arrStudent = [];

// Q#2
var studentArray = Array ();

// Q#3
var arrStrings = ["Mohtashim", "Javed", "Abdullah"];

// Q#4
var arrNum = [31, 5, 20, 7];

// Q#5
var arrBolean = [true, false];

// Q#6
var arrMixed = [31, "Mohtashim", "Javed", true];

// Q#7
var degrees= ["SSC", "HSC", "BCS","BS", "BCOM", "MS", "M.Phil", "PhD"];
document.write ("Qualification : ")
document.write ("<br/>")
document.write ("<br/>")
for (var i = 0; i < degrees.length; i++) {
    document.write ((i + 1) + " ) " + degrees[i] + "<br/>");
    
}
document.write ("<br/>")
document.write ("<br/>")
document.write ("<br/>")

// Q#8
var stdName = ["Ali" , "Hamza", "Zain"]
var stdScore = [420 , 380 , 470]
var totalMarks = 500
var percentageOfStd1 = ((stdScore[0]* 100)/totalMarks)
var percentageOfStd2 = ((stdScore[1]* 100)/totalMarks)
var percentageOfStd3 = ((stdScore[2]* 100)/totalMarks)
document.write("Score of " + stdName[0] + " is " + stdScore[0] +". " + "Percentage: " + percentageOfStd1 +"%")
document.write("<br>")
document.write("Score of " + stdName[1] + " is " + stdScore[1] +". " + "Percentage: " + percentageOfStd2  +"%" )
document.write("<br>")
document.write("Score of " + stdName[2] + " is " + stdScore[2] +". " + "Percentage: " + percentageOfStd3  +"%" )
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<br>")

// Q#9
var colorNames = ["Yellow", " Brown"," Pink"," Orange"," Red"]
document.write(colorNames)

//a
var color = prompt("What color do you add in the starting of an array?")
colorNames.unshift(color)
document.write("<br>")
document.write(colorNames)

//b
var color = prompt("What color do you add in the ending of an array?")
colorNames.push(color)
document.write("<br>")
document.write(colorNames)
document.write("<br>")

// c
colorNames.unshift("Grey" ," White")
document.write(colorNames)
document.write("<br>")

//d 
colorNames.shift()
document.write(colorNames)
document.write("<br>")

// e
colorNames.pop()
document.write(colorNames)
document.write("<br>")

// f
var whichIndex = prompt("In which index you want to add a Color name ?")
var addColor = prompt("type a color name which you want to add in a array ? ")
colorNames.splice(whichIndex , 0, addColor );
document.write(colorNames)
document.write("<br>")

//g
var indexDelete = prompt("At which index you want to delete a Color name ?")
var howManyColors = prompt("how many colors you want to delete in an array ? ")
colorNames.splice(indexDelete , howManyColors);
document.write(colorNames)
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<br>")

// Q#10
var studentScore = [320,230,480,120]
document.write("Scores of Students : " + studentScore + "<br>")
studentScore.sort();
document.write("Scores of Students : " + studentScore)
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<br>")

// Q#11
var cities = ["Karachi", "Quetta", "Islamabad", "Lahore", "Peshawar"]
document.write("Cities List : " + "<br/>" + cities + "<br>")
var copy = cities.slice (1,4)
document.write("Selected Cities List : " + "<br/>" + copy + "<br>")
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<br>")

// Q#12
var q12arr = ["This", " is", " my" ," cat"];
var singleString = q12arr.join(" ");
document.write ("Array:<br>" + q12arr + "<br>" + "String:<br>" + singleString);
document.write("<br>")
document.write("<br>")
document.write("<br>")

// Q#13
var devices = ["keyboard" , "mouse" , "printer" , "monitor"]
document.write("FIFO" + "<br/>" + "Out: " +"<br>" + devices[0] + "<br>" + "Out: " +"<br>" + devices[1] + "<br>" + "Out: " +"<br>" + devices[2] + "<br>" +"Out: " +"<br>" + devices[3] + "<br>" )
document.write("<br>")
document.write("<br>")
document.write("<br>")

// Q#14
var devices = ["keyboard" , "mouse" , "printer" , "monitor"]
document.write("LIFO" + "<br/>" + "Out: " +"<br>" + devices[3] + "<br>" + "Out: " +"<br>" + devices[2] + "<br>" + "Out: " +"<br>" + devices[1] + "<br>" +"Out: " +"<br>" + devices[0] + "<br>" )
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<br>")

// Q#15
var phoneArray=["Apple","Motorola","Nokia","Sony","Haier"];
var size=phoneArray.length;
for(var i=0;i<size;i++)
{
    document.write(phoneArray[i]+"<br>");
}

