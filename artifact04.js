//1) Create variable
var validFirstName=false;
//2) read value from HTML
var FirstName = document.getElementById("FirstName").value;
//3) Do validation
if (FirstName==="null" || FirstName==="" || FirstName.length > 20)
    errorMessages += "<p>The FirstName is required and cannot be greater than 20 characters</p>";
else
   validFirstName = true;
//4) Send error message to HTML
document.getElementById("errorMessages").innerHTML = errorMessages;

//5) return status of each field
return (validFirstName); 

  
//1) Create variable
var validLastName=false;
//2) read value from HTML
var validLastName = document.getElementById("LastName").value;

//3) Do validation
if (LastName==="null" || LastName==="" || LastName.length > 50)
    errorMessages += "<p>The LastName is required and cannot be greater than 50 characters</p>";
else
   validLastName = true;
//4) Send error message to HMTL  
document.getElementById("errorMessages").innerHTML = errorMessages;
  
//5) return status of each field
return (validLastName);
  
var userEMail = document.getElementById("EMail").value;
var atpos = userEMail.indexOf("@");
var dotpos = userEMail.lastIndexOf(".");
if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEMail.length) 
    // send error message. For example:  
  errorMessages += "<p>Invalid email</p>";
else
  userEMail = true //Or assign the value to a variable. For example validEmail = true 
document.getElementById("errorMessages").innerHTML = errorMessages;
return (userEMail);
  
  
var Phone = document.getElementById("Phone").value;
if (isNaN(Phone) || Phone.lenght >15 || Phone===null || Phone==="")
//send error message. For example 
  errorMessages += "<p>Invalid phone number. Maximum 15 digits. </p>";
else
  return true; //Or assign the value to a variable. For example validPhone = true;

var Username = document.getElementById("Username").value;
if (Username==="null" || Username==="" || Username.length > 12)
//send error message. For example 
  errorMessages += "<p>Invalid Username. Maximum 12 characters.</p>";
else
  return true;
  
var validZipcode = document.getElementById("ZipCode").value;
var Country = document.getElementById("Country").value;
if (Country === "USA)
// validate Zipcode according to the rules
    if (isNaN(Zipcode) || Zipcode.lenght >5 || Zipcode===null || Zipcode==="")
    errorMessages += "<p>Invalid Zip code. Maximum 5 digits. </p>";
    else
    return true;
else
//Zipcode is OK. For example: 
    validZipcode = true;  
