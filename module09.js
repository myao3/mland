var  mybutton = document.getElementById("clear");

//This section cleans the screen
mybutton.addEventListener("click", function(event) {
var element = document.getElementsByTagName("div");
for (index = element.length - 1; index >= 0; index--) {
    element[index].parentNode.removeChild(element[index]);
}

// Let us stop the propagation of events.  The stopPropagation method on the event object to prevent handlers “further up” from receiving the event. 
  
event.stopPropagation();
  });

//var dotnumber1 = document.getElementById("dotnumber1");
//dotnumber1.event1.stopPropagation(){};

//This will add the event "Click" to the document (page). So anytime the user click, a new dot is going to be added.
addEventListener("click", function(event) {

    var dot1 = document.createElement("div");
    dot1.className = "dot1";
    dot1.style.left = (event.pageX - 4) + "px";
    dot1.style.top = (event.pageY - 4) + "px";
    document.body.appendChild(dot1);
  });

