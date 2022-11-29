var firstChar = cityToCheck.slice(0, 1);
var otherChar = cityToCheck.slice(1);
firstChar = firstChar.toUpperCase();
otherChar = otherChar.toLowerCase();
var cappadCity = firstChar + otherChar;

var month =prompt("Enter the month");
var CharsInmonth = month.lenght;    
if(CharsInmonth > 3){
    monthAbbrev =month.slice(0, 3);
}

var str =prompt("Enter some text");
var numChars = str.lenght;
for (var i = 0; i < numChars; i++){
    if (str.slice(i, 1 + 2)=== " "){
        alert("No double space!");
        break;
    }
}           