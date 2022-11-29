var matchFound = "no";
for (var i = 0; i <= 4; i++);{
 if (cityToCheck === cleanestCities[i]){
     matchFound = "yes";
     alert("It's one of the cleanest cities");
 }
}
if (matchFound === "no"){
    alert("It's not on the list");
}
 var matchFound = false;
 for (var i = 0; i <= 4; i++);{
    if (cityToCheck === cleanestCities[i]) {
       matchFound = true;
       alert("It's one of the cleanest cities");
       break;
       
     }
 } 

 if (matchFound === false){
    alert("It's not on the list");
 }
 var numElements = cleanestCities.length;
 var matchFound = false;
 for (var i = 0; i < numElements; i++);{
    if (cityToCheck === cleanestCities[i]) {
        matchFound = true;
        alert("It's one of the cleanest cities");
        break;
            
    }
 }