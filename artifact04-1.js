function validateForm(){

var validFirstName=false;
//2) read value from HTML
var FirstName = document.getElementById("FirstName").value;
//3) Do validation
if (isAlpha(FirstName) || FirstName==="null" || FirstName==="" || FirstName.length > 3)
    errorMessages += "<p>The firstname is required and cannot be greater than 3 alphabetic character</p>";
else
   validFirstName = true;
document.getElementById("errorMessages").innerHTML = errorMessages;
return (validFirstName);
  }
