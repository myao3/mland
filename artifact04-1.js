var frmvalidator  = new Validator("myform");
  frmvalidator.EnableOnPageErrorDisplaySingleBox();
  frmvalidator.EnableMsgsTogether();

  frmvalidator.addValidation("FirstName","maxlen=20","Max length for FirstName is 20");
  frmvalidator.addValidation("FirstName","alpha","Alphabetic chars only");  

  frmvalidator.addValidation("LastName","maxlen=50","Max length is 50");
  frmvalidator.addValidation("LastName","alpha","Alphabetic chars only");
  
  frmvalidator.addValidation("EMail","maxlen=50");
  frmvalidator.addValidation("EMail","email");

 frmvalidator.addValidation("Phone","maxlen=15","Maximum 15 digits");
 frmvalidator.addValidation("Phone","numeric","Numerical chars only");

 frmvalidator.addValidation("Username","maxlen=12","Max length for Username is 12");
 frmvalidator.addValidation("Password","maxlen=7","Max length for Password is 7");

 frmvalidator.addValidation("Address","req","Address is required")
 frmvalidator.addValidation("City","req","City is required")
 frmvalidator.addValidation("State","dontselect=000", "State is required")

 frmvalidator.addValidation("Country","dontselect=000","Country is required");

var country = document.getElementById("Country").value;
if (country === "USA")
  if(Zipcode.length = 5)
  return true;
  else
  errorMessages += "<p>The zip code is 5 digits</p>";
else
validZipcode = true;
