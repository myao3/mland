function validationform(){

var validFirstName=false;
//2) read value from HTML
var FirstName = document.getElementById("FirstName").value;
//3) Do validation
if (FirstName==="null" || FirstName==="" || FirstName.length > 3)
    errorMessages += "<p>The FirstName is required and cannot be greater than 3 characters</p>";
    return false;
else
   return true;
//4) Send error message to HTML
document.getElementById("errorMessages").innerHTML = errorMessages;
  
  }
