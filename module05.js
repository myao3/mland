var table = '';             // Unit of table


table = GetValueFromUser("table")

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = GetTableContent(table);

function GetValueFromUser(valueType) {
  var greetingMessage = 'Hello. How are you? Please enter a number';
  if (valueType == "table") {}


  return prompt(greetingMessage);
}

function GetTableContent(table) {
 
  var i = 1;                 // Set counter to 1
  var msg = '';              // Message  
    
    while (i < 11) {
      msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
      i++;
    }
  
  return '<h2>Multiplication Table</h2>'+'<br/>'+ msg;
 
    }
