function validationform(){

var validFirstName=false;
//2) read value from HTML
var FirstName = document.getElementById("FirstName").value;
//3) Do validation
if (FirstName==="null" || FirstName==="" || FirstName.length > 3)
    document.getElementById("errorMessages").innerHTML = "The FirstName is required and cannot be greater than 3 characters";
    return false
else
   return true;

  }
