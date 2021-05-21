function validateForm(){
      var FirstName = document.getElementById("FirstName").value;
      var LastName = document.getElementById("LastName").value;
      var EMail = document.getElementById("EMail").value;
      var Phone = document.getElementById("Phone").value;   
   
      var errorMessages1 =true;
      var errorMessages2 =true;
      var errorMessages3 =true;
      var errorMessages4 =true;
      
      if (FirstName == "" || FirstName==="null") {
         document.getElementById("errorMessages1").innerHTML = "Please enter your first name.";
          } 
        else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(FirstName) === false || FirstName.length > 3 ){
          document.getElementById("errorMessages1").innerHTML = "Please enter a valid first name. Maximum 20 characters.";
          } 
        else {
          document.getElementById("errorMessages1").innerHTML = "";
          errorMessages1 = false;
        }
     }
	  
     if (LastName == "" || LastName==="null") {
         document.getElementById("errorMessages2").innerHTML = "Please enter your last name.";
          } 
         else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(LastName) === false || LastName.length > 3) {
          document.getElementById("errorMessages2").innerHTML = "Please enter a valid last name. Maximum 50 characters. ";
          } 
        else {
          document.getElementById("errorMessages2").innerHTML = "";
          errorMessages2 = false;
        }
    }
    
    if (EMail == "" || EMail==="null") {
         document.getElementById("errorMessages3").innerHTML = "Please enter your Email";
          } 
         else {
         var atpos = EMail.indexOf("@");
         var dotpos = EMail.lastIndexOf(".");             
        if(atpos< 1 || dotpos<atpos+2 || dotpos+2>=EMail.length) {
          document.getElementById("errorMessages3").innerHTML = "Please enter a valid Email";
          } 
        else {
          document.getElementById("errorMessages3").innerHTML = "";
          errorMessages3 = false;
        }
    }
    
     if (Phone == "" || Phone==="null") {
         document.getElementById("errorMessages4").innerHTML = "Please enter your phone number.";
          } 
         else {
        var numbers=/^[0-9]+$/;;                
        if(numbers.test(Phone) === false || Phone.length > 3) {
          document.getElementById("errorMessages4").innerHTML = "Please enter a valid phone number. Maximum 15 characters. ";
          } 
        else {
          document.getElementById("errorMessages4").innerHTML = "";
          errorMessages4 = false;
        }
    }
    
     if(errorMessages1  == true) {
       return false;
    } 
     if(errorMessages2 == true) {
       return false;
    } 
     if(errorMessages3 == true) {
       return false;
    } 
     if(errorMessages4 == true) {
       return false;
    } 
  }
