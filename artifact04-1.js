function validateForm(){


//2) read value from HTML
var FirstName = document.getElementById("FirstName").value;
var LastName = document.getElementById("LastName").value;
var Username = document.getElementById("Username").value;
var Password = document.getElementById("Password").value;
var Address = document.getElementById("Address").value;
var City = document.getElementById("City").value;
var State = document.getElementById("State").value;
var Country = document.getElementById("Country").value;
var letters = /^[A-Za-z]+$/;
    
//3) Do validation
if ( FirstName==="null" || FirstName==="" || FirstName.length > 3 || !FirstName.match(letters)){
    document.getElementById("errorMessages1").innerHTML = "The firstname is required and cannot be greater than 3 alphabetic character";
    return false;
}

    
//3) Do validation
if ( LastName==="null" || LastName==="" || LastName.length > 3 || !LastName.match(letters)){
    document.getElementById("errorMessages2").innerHTML = "The LastName is required and cannot be greater than 3 alphabetic character";
    return false;
}

    
if ( Username==="null" || Username==="" || Username.length > 3 ){
    document.getElementById("errorMessages5").innerHTML = "The Username is required and cannot be greater than 3 alphabetic character";
    return false;
}
 

    if ( Password==="null" || Password==="" || Password.length > 3 ){
    document.getElementById("errorMessages6").innerHTML = "The Password is required and cannot be greater than 3 alphabetic character";
    return false;
}


    if ( Address==="null" || Address==="" ){
    document.getElementById("errorMessages7").innerHTML = "The Address is required";
    return false;
}
    
    
    if ( City==="null" || City==="" ){
    document.getElementById("errorMessages8").innerHTML = "The City is required";
    return false;
}

    
    if ( State==="null" || State==="000" ){
    document.getElementById("errorMessages9").innerHTML = "The State is required";
    return false;
}
   
    
    if ( Country==="null" || Country==="000" ){
    document.getElementById("errorMessages10").innerHTML = "The Country is required";
    return false;
}
return true; 
    
    
    
  }
