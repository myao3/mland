var frmvalidator  = new Validator("myform");
  frmvalidator.addValidation("FirstName","maxlen=20",	"Max length for FirstName is 3");
  frmvalidator.addValidation("FirstName","alpha","Alphabetic chars only");
  

  frmvalidator.addValidation("LastName","maxlen=20","Max length is 3");
  frmvalidator.addValidation("LastName","alpha","Alphabetic chars only");
