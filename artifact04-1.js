function validateForm(){


//2) read value from HTML
var FirstName = document.getElementById("FirstName").value;
var letters = /^[A-Za-z]+$/;
//3) Do validation
if ( FirstName==="null" || FirstName==="" || FirstName.length > 3 || !FirstName.match(letters)){
    document.getElementById("errorMessages1").innerHTML = "The firstname is required and cannot be greater than 3 alphabetic character";
    return false;
}
else{
  return true;
}
}

function validateForm(){
var LastName = document.getElementById("LastName").value;
var letters = /^[A-Za-z]+$/;
//3) Do validation
if ( LastName==="null" || LastName==="" || LastName.length > 3 || !LastName.match(letters)){
    document.getElementById("errorMessages2").innerHTML = "The LastName is required and cannot be greater than 3 alphabetic character";
    return false;
}
else{
  return true;
}
  }
