var rangeNum = document.getElementById("range_num");
var range = document.getElementById("range");

range.addEventListener("input", function () {
    rangeNum.value = this.value;
})
rangeNum.addEventListener("input", function () {
    range.value = this.value;
})

function password(len) {
    var characters = " "
    if (document.getElementById("uppercase_checkbox").checked){
        characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    if (document.getElementById("lowercase_checkbox").checked){
        characters += "abcdefghijklmnopqrstuvwxyz"
    }
    if (document.getElementById("number_checkbox").checked){
        characters += "0123456789"
    }
    if (document.getElementById("symbol_checkbox").checked){
        characters += "!@#$%^&*()_+{}[]:;<>,.?/~`'"
    }
    var final = " "
    for (var i = 0; i < len; i++) {
        final += characters.charAt(Math.floor(Math.random() * characters.length));

    }
    return final;
}
function finalpassword(){
    var len = document.getElementById("range_num").value
    var final = password(len);
    document.getElementById("input").value = final
}
console.log(finalpassword());


function copy(){
    var copytext = document.getElementById("input");
    copytext.select();
    copytext.setSelectionRange(0, 999999);
    navigator.clipboard.writeText(copytext.value);
    
    return copytext.value
}
console.log(copy());

