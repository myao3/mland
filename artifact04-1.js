var frmvalidator  = new Validator("myform");

  frmvalidator.addValidation("FirstName","maxlen=5","Max length for FirstName is 20");
  frmvalidator.addValidation("FirstName","alpha","Alphabetic chars only");  

  frmvalidator.addValidation("LastName","maxlen=3","Max length is 50");
  frmvalidator.addValidation("LastName","alpha","Alphabetic chars only");
  
 
