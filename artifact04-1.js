function validateForm(){


//2) read value from HTML
var FirstName = document.getElementById("FirstName").value;
//3) Do validation
if ( FirstName==="null" || FirstName==="" || FirstName.length > 3 || isAlphabetic(FirstName)){
    document.getElementById("errorMessages").innerHTML = "The firstname is required and cannot be greater than 3 alphabetic character";
    return false;
}
else{
  return true;
}
  }
