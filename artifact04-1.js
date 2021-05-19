function validateForm(){


//2) read value from HTML
var FirstName = document.getElementById("FirstName").value;
var LastName = document.getElementById("LastName").value;
var Username = document.getElementById("Username").value;
var Password = document.getElementById("Password").value;
var letters = /^[A-Za-z]+$/;
    
//3) Do validation
if ( FirstName==="null" || FirstName==="" || FirstName.length > 3 || !FirstName.match(letters)){
    document.getElementById("errorMessages1").innerHTML = "The firstname is required and cannot be greater than 3 alphabetic character";
    return false;
}
return true;
    
//3) Do validation
if ( LastName==="null" || LastName==="" || LastName.length > 3 || !LastName.match(letters)){
    document.getElementById("errorMessages2").innerHTML = "The LastName is required and cannot be greater than 3 alphabetic character";
    return false;
}
return true;
    
if ( Username==="null" || Username==="" || Username.length > 3 ){
    document.getElementById("errorMessages5").innerHTML = "The Username is required and cannot be greater than 3 alphabetic character";
    return false;
}
return true;
    
if ( Password==="null" || Password==="" || Password.length > 3 ){
    document.getElementById("errorMessages6").innerHTML = "The Password is required and cannot be greater than 3 alphabetic character";
    return false;
}
return true;

  }
