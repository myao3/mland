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
var EMail = document.getElementById("EMail").value;
var atpos = userEmail.indexOf("@");
var dotpos = userEmail.lastIndexOf(".");
var phone = document.getElementById("Phone").value;    

if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=EMail.length) {
    document.getElementById("errorMessages5").innerHTML = "<p>Invalid email</p>";
    return false;
}
     
if (isNaN(Phone) || Phone.lenght >15 || Phone===null || Phone===""){
    document.getElementById("errorMessages6").innerHTML= "<p>Invalid phone number </p>";
    return false;
}
return true; 
}
