// Function Class Work
// Q-1
// Write a function that takes an array of numbers and returns their sum.
function arraySum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum;
}
var ansQ1 = arraySum([1, 5, 6]);
console.log(ansQ1);

// Q-2
// Write a function that reverses a string.
function reverse(str) {
    str = str.split("").reverse().join("")
    return str;
}

var ansQ2 = reverse("Mohtashim Javed")
console.log(ansQ2);

// Q-3
// Write a function that finds the largest number in an array.
function largest_Num(arr) {
    var largest = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }
    return largest;
}

var ansQ3 = largest_Num([31, 5, 18, 55, 85, 99, 120, 150, 50]);
console.log(ansQ3);

// Q-4
// Write a function that counts the number of vowels in a string.
function vowels_count(str) {
    var count = 0;
    var vowel = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < vowel.length; j++) {
            if (str[i] == vowel[j]) {
                count++;
            }
        }
    }
    return count;
}

var ansQ4 = vowels_count("My name is Mohatshim Javed")
console.log(ansQ4);

// Q-5
// Write a function that removes duplicates from an array.
function remove_duplicate(arr) {
    var new_arr = []
    for (var i = 0; i < arr.length; i++) {
        if (new_arr.indexOf(arr[i]) === -1) {
            new_arr.push(arr[i])
        }
    }
    return new_arr;
}

var ansQ5 = remove_duplicate([1, 2, 5, 2, 6, 8, 9, 9])
console.log(ansQ5);

// Q-6
// Write a function that capitalizes the first letter of each word in a sentence.
function capitalize(sentence){
    var words = sentence.split(" ")
    for(var i =0; i<words.length; i++){
        var word = words[i]
        if (word.length > 0){
            words[i] = word.charAt(0).toUpperCase() + word.slice(1)

        }
    }
    return words.join(" ")
}

var ansQ6 = capitalize("my name is mohtashim javed");
console.log(ansQ6);
