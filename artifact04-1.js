function validateForm(){

var validFirstName=false;
//2) read value from HTML
var FirstName = document.getElementById("FirstName").value;
//3) Do validation
if (FirstName==="null" || FirstName==="" || FirstName.length > 3)
    errorMessages += "<p>The firstname is required and cannot be greater than 3 characters</p>";
else
   validFirstName = true;
document.getElementById("errorMessages").innerHTML = errorMessages;
return (validFirstName);
  }
