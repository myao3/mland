function validateForm(){


//2) read value from HTML


var Country = document.getElementById("Country").value;
var Zipcode = document.getElementById("Zipcode").value;


if ( Country==="null" || Country==="000" ){
    document.getElementById("errorMessages5").innerHTML = "The Country is required";
    return false;
}
     
if (  Country==="USA" || Zipcode.length > 5){
    document.getElementById("errorMessages6").innerHTML = "The Zip code is required";
    return false;
}
return true; 
}
